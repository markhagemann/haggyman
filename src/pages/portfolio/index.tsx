import React from 'react';
import SEO from '../../components/SEO';
import Heading from '../../components/UI/Heading';
import Layout from '../../components/UI/Layout';
import { getAllPortfolioPosts, PortfolioPost } from '../../lib/portfolio';
import Company from './components/Company';
import Preview from './components/Preview';

interface PortfolioProps {
  posts: PortfolioPost[];
}

export async function getServerSideProps() {
  const posts = getAllPortfolioPosts();

  return {
    props: {
      posts,
    },
  };
}

const PortfolioIndex: React.FC<PortfolioProps> = ({ posts }) => {
  return (
    <Layout showSidebarOnMobile={false}>
      <SEO
        title="Portfolio"
        description="List of projects I've contributed to"
        keywords={[
          `portfolio`,
          `web developer`,
          `javascript`,
          `node`,
          `react`,
          `nextjs`,
          `gatsby`,
          `php`,
          `silverstripe`,
        ]}
      />
      <Heading
        centerOnPortrait={true}
        heading="Some projects I've contributed to"
      />
      <p className="text-center text-lg md:text-left">
        {' '}
        I am passionate about anything I end up working on. Solving big problems
        is just as satisfying as making something pretty.
      </p>
      <Company
        company="TreviPay"
        role="Tech Lead"
        years="2023 - Present"
        noPosts={true}
      />
      <Company
        company="TreviPay"
        role="Developer"
        years="2019 - 2023"
        noPosts={true}
      />
      <Company
        company="LT Network"
        role="Web, Content &amp; Custom Development"
        years="2016 - 2019"
      />
      {posts.map(post => {
        return post.frontmatter.company === 'LT Network' ? (
          <Preview
            title={post.frontmatter.title}
            postImageUrl={post.frontmatter.postImage}
            readingTime={post.fields.readingTime}
            slug={post.slug}
            date={post.frontmatter.date}
            externalLink={post.frontmatter.externalLink}
            key={post.slug}
          />
        ) : null;
      })}
      <Company company="Freelance" />
      {posts.map(post => {
        return post.frontmatter.company === 'Freelance' ? (
          <Preview
            title={post.frontmatter.title}
            postImageUrl={post.frontmatter.postImage}
            readingTime={post.fields.readingTime}
            slug={post.slug}
            date={post.frontmatter.date}
            externalLink={post.frontmatter.externalLink}
            key={post.slug}
          />
        ) : null;
      })}
    </Layout>
  );
};

export default PortfolioIndex;
