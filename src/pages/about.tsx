import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../common/components/UI/Layout';
import SEO from '../common/components/SEO';

interface AboutProps {}

const AboutPage: React.SFC<AboutProps> = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>All about the Haggyman</h1>
    <p>I like to make stuff, you know?</p>
  </Layout>
);

export default AboutPage;
