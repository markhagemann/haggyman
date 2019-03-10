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
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>What I have worked on</h1>
      {posts.map(({ node }, i: number) => (
        <Link to={`/portfolio/${node.frontmatter.slug}`} key={i} className="link">
          <div className="post-list">
            <h2>{node.frontmatter.title}</h2>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
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
