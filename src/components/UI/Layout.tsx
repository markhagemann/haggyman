import classNames from 'classnames';
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './sidebar/Sidebar';

interface LayoutProps {
  children?: React.ReactNode;
  showSidebarOnMobile?: boolean;
}

const containerClass: (props: LayoutProps) => string = props => {
  const showSidebarOnMobile = props.showSidebarOnMobile ? true : false;
  return classNames({
    'container mx-auto max-w-2xl px-5 my-8 md:mt-16 md:text-left md:pt-24 md:px-8 md:ml-75':
      true,
    'mt-32': !showSidebarOnMobile,
  });
};

const Layout: React.FC<LayoutProps> = props => {
  const { children } = props;
  const showSidebarOnMobile = props.showSidebarOnMobile ? true : false;
  return (
    <main className="min-h-screen max-h-full bg-cover bg-blue-darker font-body text-grey-light">
      <Navbar />
      <div className="flex flex-col md:flex-row relative">
        <Sidebar showOnMobile={showSidebarOnMobile ? true : false} />
        <div className={containerClass(props)}>
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
