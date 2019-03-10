import { Link } from 'gatsby';
import React from 'react';
import SEO from '../common/components/SEO';
import Layout from '../common/components/UI/Layout';

interface IndexProps {}

const IndexPage: React.SFC<IndexProps> = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>This is the homepage</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <Link to="/blog">Go to blog</Link>
  </Layout>
);

export default IndexPage;
