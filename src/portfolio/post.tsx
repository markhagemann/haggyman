import { graphql } from 'gatsby';
import * as React from 'react';
import Post from '../common/components/post/Post';
import SEO from '../common/components/SEO';
import Layout from '../common/components/UI/Layout';

interface PostTemplateProps {
  data: {
    post: {
      frontmatter: {
        date: string;
        title: string;
        description: string;
        tags: string[];
        externalLink: string;
      };
      fields: {
        readingTime: {
          text: string;
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
      <SEO title={title} keywords={post.frontmatter.tags} description={post.frontmatter.description} />
      <Post
        title={title}
        date={post.frontmatter.date}
        readingTime={post.fields.readingTime.text}
        html={post.html}
        externalLink={post.frontmatter.externalLink}
      />
    </Layout>
  );
};

export default PortfolioPostTemplate;

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMM YYYY")
        dateOriginal: date
        title
        description
        slug
        tags
        externalLink
      }
      fields {
        readingTime {
          text
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
