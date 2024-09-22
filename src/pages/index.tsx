import React from 'react';
import ContactMe from '../components/ContactMe';
import SEO from '../components/SEO';
import Heading from '../components/UI/Heading';
import Layout from '../components/UI/Layout';

const IndexPage: React.FC = () => (
  <Layout showSidebarOnMobile={true}>
    <SEO
      title="Home"
      description="Homepage for Haggyman"
      keywords={[`nextjs`, `application`, `react`]}
    />
    <Heading centerOnMobile={true} heading="Welcome" />
    <p>
      My name is Mark Hagemann but I also commonly go by &quot;Haggy&quot; or
      &quot;Haggyman&quot;. I am a software developer with a focus on the web,
      and a curiosity for game development. Currently based in Brisbane and
      working as a technical lead for{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://trevipay.com">
        {' '}
        TreviPay
      </a>
      .{' '}
    </p>
    <br />{' '}
    <p>
      My background began with PHP frameworks such as Laravel, SilverStripe and
      WordPress. These days I am working with Vue, React and Node. I also enjoy
      customizing my neovim configuration, learning more about DevOps and UX
      design.
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
