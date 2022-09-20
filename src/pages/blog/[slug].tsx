import * as React from 'react';
import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

import { getBlogPostBySlug, getAllBlogPosts, BlogPost } from '../../lib/blog';
import Post from '../../components/post/Post';
import SEO from '../../components/SEO';
import Layout from '../../components/UI/Layout';

interface PostTemplateProps {
  post: BlogPost;
  html: string;
}

export async function getStaticProps({ params }) {
  const post = getBlogPostBySlug(params.slug);

  const markdown = await remark()
    .use(html)
    .use(prism)
    .process(post.content || '');

  return {
    props: {
      post,
      html: markdown.toString(),
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllBlogPosts();

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

const BlogPostTemplate: React.FC<PostTemplateProps> = ({ post, html }) => {
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        keywords={post.frontmatter.tags}
        description={post.frontmatter.description}
      />
      <Post
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        readingTime={post.fields.readingTime}
        html={html}
      />
    </Layout>
  );
};

export default BlogPostTemplate;
