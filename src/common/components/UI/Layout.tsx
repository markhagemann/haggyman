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
    'container mx-auto max-w-2xl px-5 my-8 md:mt-16 md:text-left md:pt-24 md:px-8 md:ml-75': true,
    'mt-32': !showSidebarOnMobile
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
        <main className="min-h-screen max-h-full bg-cover bg-blue-darker text-grey-light font-titillium">
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
