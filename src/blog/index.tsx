import { graphql, Link } from 'gatsby';
import React from 'react';
import SEO from '../common/components/SEO';
import Layout from '../common/components/UI/Layout';

interface Edge {
  node: {
    excerpt: string;
    frontmatter: {
      date: string;
      title: string;
      slug: string;
    };
  };
}

interface BlogProps {
  data: {
    posts: {
      edges: Edge[];
    };
  };
}

const BlogIndex: React.SFC<BlogProps> = props => {
  const posts = props.data.posts.edges;
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Blog</h1>
      {posts.map(({ node }, i: number) => (
        <Link to={`blog/${node.frontmatter.slug}`} key={i} className="link">
          <div className="post-list">
            <h1>{node.frontmatter.title}</h1>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  );
};

export default BlogIndex;

export const blogListQuery = graphql`
  query blogPosts($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "blog" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            category
            description
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1080, maxHeight: 512) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;
