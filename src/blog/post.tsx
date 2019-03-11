import { graphql } from 'gatsby';
import * as React from 'react';
import SEO from '../common/components/SEO';
import Layout from '../common/components/UI/Layout';

interface PostTemplateProps {
  data: {
    post: {
      // siteMetadata?: SiteMetadata;
      fields: {
        readingTime: {
          text: string;
        };
      };
      frontmatter: {
        title: string;
        tags: string[];
        date: string;
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
      <SEO title={title} keywords={post.frontmatter.tags} />
      <div className="font-sans">
        <h1 className="mb-1"> {title} </h1>
        <div className="mb-8">
          <span className="text-blue-dark">
            {post.frontmatter.date} - {post.fields.readingTime.text}
          </span>
        </div>
        <div className="md-post" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
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
