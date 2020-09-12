import classNames from 'classnames';
import React from 'react';
import Profile from './Profile';
import Social from './Social';

interface SidebarProps {
  showOnMobile?: boolean;
}

const mobileClass: (props: SidebarProps) => string = props => {
  return classNames({
    'border-blue-transparent border-gradient-b-blue-custom flex-col justify-center px-5 mt-24 md:w-75 md:fixed md:h-screen md:mt-0 md:border-r': true,
    'hidden md:flex': !props.showOnMobile,
    flex: props.showOnMobile,
  });
};

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  return (
    <aside className={mobileClass(props)}>
      <Profile />
      <div className="font-exo m-2 text-center">
        <h2 className="font-light text-blue-light text-3xl leading-9">
          <span className="mr-2">Mark</span>
          <span className="font-bold">Hagemann </span>
        </h2>
        <h3 className="font-light text-blue-dark my-1 text-2xl">
          {' '}
          Full Stack Developer{' '}
        </h3>
        <Social />
      </div>
    </aside>
  );
};

export default Sidebar;
