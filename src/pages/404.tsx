import React from 'react';
import Heading from '../components/UI/Heading';
import SEO from '../components/SEO';
import Layout from '../components/UI/Layout';

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" description="Invalid URL" />
    <Heading heading="Not Found" />
    <p>This page does not exist</p>
  </Layout>
);

export default NotFoundPage;
