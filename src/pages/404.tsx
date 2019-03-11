import React from 'react';
import Heading from '../common/components/Heading';
import SEO from '../common/components/SEO';
import Layout from '../common/components/UI/Layout';

interface NotFoundPageProps {}

const NotFoundPage: React.SFC<NotFoundPageProps> = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading heading="Not Found :(" />
    <p>You just hit a route that doesn&#39;t exist my friend...</p>
  </Layout>
);

export default NotFoundPage;
