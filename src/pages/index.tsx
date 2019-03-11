import React from 'react';
import Heading from '../common/components/Heading';
import SEO from '../common/components/SEO';
import Layout from '../common/components/UI/Layout';

interface IndexProps {}

const IndexPage: React.SFC<IndexProps> = () => (
  <Layout showSidebarOnMobile={true}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Heading centerOnMobile={true} heading="Welcome to Haggyman!" />
    <p>
      My name is Mark Hagemann but I also commonly go by "Haggy" or the "Haggyman". Currently based in Melbourne, working for{' '}
      <a href="https://www.ltnetwork.co">LT Network</a> / <a href="https://digitalstack.io"> Digital Stack</a>. I am a software developer
      with a focus on the web, and a curiosity for game development.{' '}
    </p>
    <br />{' '}
    <p>
      My background started with a focus in PHP frameworks such as Laravel, SilverStripe and WordPress. These days I am working with React,
      Angular and Node. I also enjoy learning more about DevOps and design.
    </p>
    <br />
    <p>
      {' '}
      When I'm not coding something, you will usually find me trying to avoid being choked out by someone in Brazilian Jiu-Jitsu, watching
      movies or playing video games with friends.
    </p>
  </Layout>
);

export default IndexPage;
