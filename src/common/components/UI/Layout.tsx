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
          <div className="container mx-auto px-1 md:mx-0 md:px-8">
            <Navbar />
            <div className="md:flex py-20">
              <Sidebar hideOnMobile={hideSidebarOnMobile ? true : false} siteTitle={data.site.siteMetadata.title} />
              <div className="px-5 pt-10">
                {children}
                {/* <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer> */}
              </div>
            </div>
          </div>
        </main>
      )}
    />
  );
};

export default Layout;
