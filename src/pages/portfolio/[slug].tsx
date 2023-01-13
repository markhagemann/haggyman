import * as React from 'react';
import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

import Post from '../../components/post/Post';
import SEO from '../../components/SEO';
import Layout from '../../components/UI/Layout';
import {
  getAllPortfolioPosts,
  getPortfolioPostBySlug,
  PortfolioPost,
} from '../../lib/portfolio';

interface PostTemplateProps {
  post: PortfolioPost;
  html: string;
}

export async function getStaticProps({ params }) {
  const post = getPortfolioPostBySlug(params.slug);

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
  const posts = getAllPortfolioPosts();

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

const PortfolioPostTemplate: React.FC<PostTemplateProps> = ({ post, html }) => {
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
        externalLink={post.frontmatter.externalLink}
      />
    </Layout>
  );
};

export default PortfolioPostTemplate;
