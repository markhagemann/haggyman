import React from 'react';
import SEO from '../common/components/SEO';
import Heading from '../common/components/UI/Heading';
import Layout from '../common/components/UI/Layout';

interface ThanksPageProps {}

const ThanksPage: React.SFC<ThanksPageProps> = () => (
  <Layout>
    <SEO title="Thanks" description="Thanks for contacting me" />
    <Heading heading="Thanks" />
    <p>I'll aim to get back to you as soon as I can.</p>
  </Layout>
);

export default ThanksPage;
