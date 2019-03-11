import { graphql } from 'gatsby';
import * as React from 'react';
import Heading from '../common/components/Heading';
import SEO from '../common/components/SEO';
import Layout from '../common/components/UI/Layout';

interface PostTemplateProps {
  data: {
    post: {
      frontmatter: {
        title: string;
        tags: string[];
      };
      html: string;
    };
  };
}

const PortfolioPostTemplate: React.SFC<PostTemplateProps> = ({ data }) => {
  console.log(data);
  const post = data.post;
  const { title } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} keywords={post.frontmatter.tags} />
      <div className="font-sans">
        <Heading heading={title} />
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
      }
    }
    date: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date
      }
    }
  }
`;
