'use strict';

// const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
// const slash = require(`slash`);

const blogPostsQuery = `
  {
    allBlogPosts: allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            slug
          }
        }
      }
      group(field: frontmatter___category) {
        fieldValue
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  }
`;

const portfolioPostsQuery = `
  {
    allPortfolioPosts: allMarkdownRemark(filter: {frontmatter: {type: {eq: "portfolio"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            slug
          }
        }
      }
      group(field: frontmatter___category) {
        fieldValue
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  }
`;

// TODO: Use async / await instead
const makeRequest = (graphql, request) =>
    new Promise((resolve, reject) => {
        // Query for article nodes to use in creating pages.
        resolve(
            graphql(request).then((result) => {
                if (result.errors) {
                    reject(result.errors);
                }

                return result;
            }),
        );
    });

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // TODO: Use async / await instead
    const getBlogPosts = makeRequest(graphql, blogPostsQuery).then((result) => {
        return createHolderPageAndPosts(
            'blog',
            result.data.allBlogPosts,
            10,
            createPage,
        );
    });

    // TODO: Use async / await instead
    const getPortfolioPosts = makeRequest(graphql, portfolioPostsQuery).then(
        (result) => {
            return createHolderPageAndPosts(
                'portfolio',
                result.data.allPortfolioPosts,
                10,
                createPage,
            );
        },
    );

    // Queries for articles and authors nodes to use in creating pages.
    return Promise.all([getBlogPosts, getPortfolioPosts]);
};

function createHolderPageAndPosts(type, posts, postsPerPage, createPage) {
    const allPosts = posts.edges;
    // const groupedPosts = posts.group;
    const paginationTemplate = path.resolve(`src/${type}/index.tsx`);
    let numPages = Math.ceil(allPosts.length / postsPerPage);

    // Creating the main blog index
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/${type}` : `/${type}/${i + 1}`,
            component: paginationTemplate,
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                nextPage: `/${type}/${i + 2}`,
                pageNumber: i + 1,
            },
        });
    });

    // // Creating all category pages.
    // let category;
    // let categoryPosts;
    // const categoryTemplate = path.resolve('src/blog/category.tsx');
    // groupedPosts.forEach((group, _) => {
    //   category = group.fieldValue;
    //   categoryPosts = group.edges;
    //   numPages = Math.ceil(categoryPosts.length / postsPerPage);
    //   Array.from({ length: numPages }).forEach((_, i) => {
    //     createPage({
    //       path: i === 0 ? `/${category}` : `/${category}/${i + 1}`,
    //       component: categoryTemplate,
    //       context: {
    //         limit: postsPerPage,
    //         skip: i * postsPerPage,
    //         nextPage: `/${category}/${i + 2}`,
    //         pageNumber: i + 1,
    //         category: category,
    //       }
    //     })
    //   })
    // })

    // Create all the blog post pages.
    const template = path.resolve(`src/${type}/post.tsx`);
    allPosts.forEach(({ node }) => {
        let slug = node.frontmatter.slug;
        createPage({
            path: `${type}/${node.frontmatter.slug}`,
            component: template,
            context: {
                slug,
            },
        });
    });
}
