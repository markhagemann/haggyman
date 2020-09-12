import React from 'react';
import Heading from '../common/components/UI/Heading';
import SEO from '../common/components/SEO';
import Layout from '../common/components/UI/Layout';

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading heading="Not Found :(" />
    <p>You just hit a route that doesn&apos;t exist my friend...</p>
  </Layout>
);

export default NotFoundPage;
