import classNames from 'classnames';
import React from 'react';
import Profile from './Profile';

interface SidebarProps {
  siteTitle: string;
  hideOnMobile?: boolean;
}

const mobileClass: (props: SidebarProps) => string = props => {
  return classNames({
    // 'md:w-300 md:h-screen flex flex-col justify-center px-5 md:border-r border-blue-dark-custom-border': true,
    'md:w-300 md:h-screen flex flex-col justify-center px-5': true,
    'sm:d-none': props.hideOnMobile
  });
};

const Sidebar: React.SFC<SidebarProps> = (props: SidebarProps) => {
  return (
    <aside className={mobileClass(props)}>
      <Profile />
      <div className="font-display m-2 text-center">
        <h1 className="font-light text-blue-light">
          <span className="mr-2">Mark</span>
          <span className="font-bold">Hagemann </span>
        </h1>
        <h2 className="font-light  text-blue-dark my-2"> Full Stack Developer </h2>
      </div>
    </aside>
  );
};

export default Sidebar;
