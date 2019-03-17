import { graphql } from 'gatsby';
import * as React from 'react';
import Post from '../common/components/post/Post';
import SEO from '../common/components/SEO';
import Layout from '../common/components/UI/Layout';

interface PostTemplateProps {
  data: {
    post: {
      fields: {
        readingTime: {
          text: string;
        };
      };
      frontmatter: {
        title: string;
        tags: string[];
        date: string;
        description: string;
      };
      html: string;
    };
  };
}

const BlogPostTemplate: React.SFC<PostTemplateProps> = ({ data }) => {
  const post = data.post;
  const { title } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} keywords={post.frontmatter.tags} description={post.frontmatter.description} />
      <Post title={title} date={post.frontmatter.date} readingTime={post.fields.readingTime.text} html={post.html} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      fields {
        readingTime {
          text
        }
      }
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
