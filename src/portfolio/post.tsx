import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';
import SEO from '../common/components/SEO';
import Layout from '../common/components/UI/Layout';

interface PostTemplateProps {
  data: {
    post: {
      // siteMetadata?: SiteMetadata;
      frontmatter: {
        title: string;
        tags: string[];
        postImage?: {
          childImageSharp: {
            original: {
              src: string;
            };
            fluid: any; // TODO: Get actual type
          };
        };
      };
      html: string;
    };
  };
}

const PortfolioPostTemplate: React.SFC<PostTemplateProps> = ({ data }) => {
  const post = data.post;
  const { title } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} keywords={post.frontmatter.tags} />
      <div className="font-sans">
        <h1 className="text-blue-lighter mb-5">{title}</h1>
        {post.frontmatter.postImage && <Img fluid={post.frontmatter.postImage.childImageSharp.fluid} />}
        <div className="md-post" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export default PortfolioPostTemplate;

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMM Do, YYYY")
        dateOriginal: date
        category
        title
        description
        slug
        tags
        postImage {
          childImageSharp {
            original {
              src
            }
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    date: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date
      }
    }
  }
`;
