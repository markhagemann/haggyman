import { graphql } from 'gatsby';
import React from 'react';
import Heading from '../common/components/UI/Heading';
import SEO from '../common/components/SEO';
import Layout from '../common/components/UI/Layout';
import Preview from './components/Preview';

interface Edge {
  node: {
    excerpt: string;
    fields: {
      readingTime: {
        text: string;
      };
    };
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
      <SEO title="Blog" keywords={[`programming`, `web development`, `javascript`]} />
      <Heading centerOnMobile={true} heading="Some of my thoughts" />
      {posts.map(({ node }, i: number) => (
        <Preview
          title={node.frontmatter.title}
          readingTime={node.fields.readingTime.text}
          excerpt={node.excerpt}
          slug={node.frontmatter.slug}
          key={i}
          date={node.frontmatter.date}
        />
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
          excerpt(pruneLength: 200)
          fields {
            readingTime {
              text
            }
          }
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
