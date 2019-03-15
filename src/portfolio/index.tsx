import { graphql } from 'gatsby';
import React from 'react';
import Heading from '../common/components/Heading';
import SEO from '../common/components/SEO';
import Layout from '../common/components/UI/Layout';
import Preview from './components/Preview';

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
      externalLink: string;
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
      <SEO title="Portfolio" keywords={[`portfolio`, `web developer`, `gatsby`, `node`, `react`, `javascript`, `php`, `silverstripe`]} />
      <Heading centerOnMobile={true} heading="What I've worked on" />
      <p className="text-center italic text-lg md:text-left">
        {' '}
        I am passionate about anything I have the privilege to work on. Solving big problems is just as satisfying as making something
        pretty.
      </p>
      <hr className="border-b border-gradient-r-blue-custom my-8" />
      {posts.map(({ node }, i: number) => (
        <Preview
          title={node.frontmatter.title}
          postImageFluid={node.frontmatter.postImage.childImageSharp.fluid}
          readingTime={node.fields.readingTime.text}
          slug={node.frontmatter.slug}
          date={node.frontmatter.date}
          externalLink={node.frontmatter.externalLink}
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
            externalLink
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
