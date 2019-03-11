import classNames from 'classnames';
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar/Sidebar';

interface LayoutProps {
  showSidebarOnMobile?: boolean;
}

const containerClass: (props: LayoutProps) => string = props => {
  const showSidebarOnMobile = !!props.showSidebarOnMobile ? true : false;
  return classNames({
    'container mx-auto max-w-650 md:pt-24 px-5 md:mx-0 md:px-8 md:ml-300': true,
    'mt-16': showSidebarOnMobile,
    'mt-20': !showSidebarOnMobile
  });
};

const Layout: React.SFC<LayoutProps> = props => {
  const { children } = props;
  const showSidebarOnMobile = !!props.showSidebarOnMobile ? true : false;
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
      render={() => (
        <main className="min-h-screen max-h-full bg-cover bg-blue-dark-custom text-grey-light font-sans">
          <Navbar />
          <div className="flex flex-col md:flex-row relative">
            <Sidebar showOnMobile={showSidebarOnMobile ? true : false} />
            <div className={containerClass(props)}>
              <div>{children}</div>
            </div>
          </div>
        </main>
      )}
    />
  );
};

export default Layout;
