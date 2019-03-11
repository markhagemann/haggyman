import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar/Sidebar';

interface LayoutProps {
  hideSidebarOnMobile?: boolean;
}

const Layout: React.SFC<LayoutProps> = props => {
  const { children } = props;
  const hideSidebarOnMobile = !!props.hideSidebarOnMobile ? true : false;
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <main className="min-h-screen max-h-full bg-cover bg-blue-dark-custom text-grey-light font-sans">
          <Navbar />
          <div className="flex flex-col md:flex-row relative">
            <Sidebar hideOnMobile={hideSidebarOnMobile ? true : false} siteTitle={data.site.siteMetadata.title} />
            <div className="container mx-auto max-w-650 py-16 md:pt-32 px-5 md:mx-0 md:px-8 md:ml-300">
              <div>{children}</div>
            </div>
          </div>
        </main>
      )}
    />
  );
};

export default Layout;
