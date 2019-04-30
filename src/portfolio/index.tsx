import { graphql } from 'gatsby';
import React from 'react';
import SEO from '../common/components/SEO';
import Heading from '../common/components/UI/Heading';
import Layout from '../common/components/UI/Layout';
import Company from './components/Company';
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
      company: string;
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
      <Heading centerOnMobile={true} heading="Some projects I've contributed to" />
      <p className="text-center text-lg md:text-left">
        {' '}
        I am passionate about anything I end up working on. Solving big problems is just as satisfying as making something pretty.
      </p>
      <Company company="MSTS" role="Developer" years="2019 - Present" noPosts="true" />
      <Company company="LT Network" role="Web, Content &amp; Custom Development" years="2016 - 2019" />
      {posts.map(({ node }, i: number) => {
        return node.frontmatter.company === 'LT Network' ? (
          <Preview
            title={node.frontmatter.title}
            postImageFluid={node.frontmatter.postImage.childImageSharp.fluid}
            readingTime={node.fields.readingTime.text}
            slug={node.frontmatter.slug}
            date={node.frontmatter.date}
            externalLink={node.frontmatter.externalLink}
            key={i}
          />
        ) : null;
      })}
      <Company company="Freelance" />
      {posts.map(({ node }, i: number) => {
        return node.frontmatter.company === 'Freelance' ? (
          <Preview
            title={node.frontmatter.title}
            postImageFluid={node.frontmatter.postImage.childImageSharp.fluid}
            readingTime={node.fields.readingTime.text}
            slug={node.frontmatter.slug}
            date={node.frontmatter.date}
            externalLink={node.frontmatter.externalLink}
            key={i}
          />
        ) : null;
      })}
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
            company
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
