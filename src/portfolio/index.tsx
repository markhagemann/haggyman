import { graphql } from 'gatsby';
import React from 'react';
import Heading from '../common/components/Heading';
import SEO from '../common/components/SEO';
import Layout from '../common/components/UI/Layout';
import Preview from './Preview';

interface Edge {
  node: {
    fields: {
      readingTime: {
        text: string;
      };
    };
    frontmatter: {
      date: string;
      title: string;
      slug: string;
      postImage: {
        childImageSharp: {
          fluid: any;
        };
      };
    };
  };
}

interface PortfolioProps {
  data: {
    posts: {
      edges: Edge[];
    };
  };
}

const PortfolioIndex: React.SFC<PortfolioProps> = props => {
  const posts = props.data.posts.edges;
  return (
    <Layout showSidebarOnMobile={false}>
      <SEO title="Portfolio" keywords={[`gatsby`, `node`, `react`, `javascript`, `php`, `silverstripe`]} />
      <Heading centerOnMobile={true} heading="What I've worked on" />
      {posts.map(({ node }, i: number) => (
        <Preview
          title={node.frontmatter.title}
          postImageFluid={node.frontmatter.postImage.childImageSharp.fluid}
          readingTime={node.fields.readingTime.text}
          slug={node.frontmatter.slug}
          date={node.frontmatter.date}
          key={i}
        />
      ))}
    </Layout>
  );
};

export default PortfolioIndex;

export const portfolioListQuery = graphql`
  query portfolioPosts($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "portfolio" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            readingTime {
              text
            }
          }
          frontmatter {
            title
            date(formatString: "MMM YYYY")
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
