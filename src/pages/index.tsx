import React from 'react';
import ContactMe from '../common/components/ContactMe';
import SEO from '../common/components/SEO';
import Heading from '../common/components/UI/Heading';
import Layout from '../common/components/UI/Layout';

const IndexPage: React.FC = () => (
  <Layout showSidebarOnMobile={true}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Heading centerOnMobile={true} heading="Welcome to Haggyman" />
    <p>
      My name is Mark Hagemann but I also commonly go by &quot;Haggy&quot; or
      &quot;Haggyman&quot;. Currently based in Melbourne, working for{' '}
      <a href="https://www.msts.com"> MSTS</a>. I am a software developer with a
      focus on the web, and a curiosity for game development.{' '}
    </p>
    <br />{' '}
    <p>
      My background began with PHP frameworks such as Laravel, SilverStripe and
      WordPress. These days I am working with Vue, React and Node. I also enjoy
      learning more about DevOps and design.
    </p>
    <br />
    <p>
      {' '}
      When I&apos;m not coding something, you will usually find me trying to
      avoid being choked out by someone in Brazilian Jiu-Jitsu, watching movies
      or playing video games with friends.
    </p>
    <div className="md:text-left">
      <ContactMe />
    </div>
  </Layout>
);

export default IndexPage;
