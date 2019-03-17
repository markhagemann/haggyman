import classNames from 'classnames';
import React from 'react';
import Profile from './Profile';
import Social from './Social';

interface SidebarProps {
  showOnMobile?: boolean;
}

const mobileClass: (props: SidebarProps) => string = props => {
  return classNames({
    'border-gradient-b-blue-custom flex-col justify-center px-5 mt-24 md:w-300 md:fixed md:h-screen md:mt-0 md:border-r': true,
    'hidden md:flex': !props.showOnMobile,
    flex: props.showOnMobile
  });
};

const Sidebar: React.SFC<SidebarProps> = (props: SidebarProps) => {
  return (
    <aside className={mobileClass(props)}>
      <Profile />
      <div className="font-exo m-2 text-center">
        <h1 className="font-light text-blue-light">
          <span className="mr-2">Mark</span>
          <span className="font-bold">Hagemann </span>
        </h1>
        <h2 className="font-light text-blue-dark my-2"> Full Stack Developer </h2>
        <Social />
      </div>
    </aside>
  );
};

export default Sidebar;
