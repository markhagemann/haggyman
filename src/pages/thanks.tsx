import React from 'react';
import SEO from '../components/SEO';
import Heading from '../components/UI/Heading';
import Layout from '../components/UI/Layout';

const ThanksPage: React.FC = () => (
  <Layout>
    <SEO title="Thanks" description="Thanks for contacting me" />
    <Heading heading="Thanks" />
    <p>I&apos;ll aim to get back to you as soon as I can.</p>
  </Layout>
);

export default ThanksPage;
