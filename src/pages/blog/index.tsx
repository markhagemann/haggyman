import React from 'react';

import Heading from '../../components/UI/Heading';
import SEO from '../../components/SEO';
import Layout from '../../components/UI/Layout';
import Preview from './components/Preview';
import { BlogPost, getAllBlogPosts } from '../../lib/blog';

interface BlogProps {
  posts: BlogPost[];
}

export async function getServerSideProps() {
  const posts = getAllBlogPosts();

  return {
    props: {
      posts,
    },
  };
}

const BlogIndex: React.FC<BlogProps> = ({ posts }) => {
  return (
    <Layout>
      <SEO
        title="Blog"
        description="Some of my thoughts"
        keywords={[`programming`, `web development`, `javascript`]}
      />
      {posts.map(
        (post): JSX.Element => (
          <div 
            key={post.slug}
          >
            <Heading centerOnMobile={true} heading="Some of my thoughts" />
            <Preview
              title={post.frontmatter.title}
              readingTime={post.fields.readingTime}
              excerpt={post.excerpt}
              slug={post.slug}
              date={post.frontmatter.date}
            />
          </div>
        ),
      )}
    </Layout>
  );
};

export default BlogIndex;
