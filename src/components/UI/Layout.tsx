import classNames from 'classnames';
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './sidebar/Sidebar';

interface LayoutProps {
  children?: React.ReactNode;
  showSidebarOnMobile?: boolean;
  centerContent?: boolean;
}

const containerClass: (props: LayoutProps) => string = props => {
  return classNames({
    'container mx-auto max-w-2xl px-5 pb-8 md:text-left md:px-8 md:ml-75': true,
    'mt-8': props.showSidebarOnMobile,
    'mt-32': !props.showSidebarOnMobile,
    'md:mt-0': props.centerContent,
    'md:flex md:justify-center md:items-center md:min-h-screen':
      props.centerContent,
  });
};

const Layout: React.FC<LayoutProps> = props => {
  const { children } = props;
  const showSidebarOnMobile = props.showSidebarOnMobile ? true : false;
  return (
    <main className="min-h-screen max-h-full bg-cover bg-slate-900 font-body text-grey-light">
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
