import classNames from 'classnames';
import React from 'react';
import Profile from './Profile';
import Social from './Social';

interface SidebarProps {
  showOnMobile?: boolean;
}

const sidebarClass: (props: SidebarProps) => string = props => {
  return classNames({
    'flex-col justify-center px-5 pb-5 mt-24 border-gradient-r-blue-dark border-b md:w-75 md:fixed md:h-screen md:pb-0 md:mt-0 md:border-r md:border-gradient-b-blue-dark':
      true,
    'hidden md:flex': !props.showOnMobile,
    flex: props.showOnMobile,
  });
};

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  return (
    <aside className={sidebarClass(props)}>
      <Profile />
      <div className="m-2 text-center">
        <h2 className="font-light text-blue-dark text-3xl">
          <span className="mr-2">Mark</span>
          <span className="font-medium">Hagemann </span>
        </h2>
        <h3 className="text-slate-400 my-1 text-2xl"> Full Stack Developer </h3>
        <Social />
      </div>
    </aside>
  );
};

export default Sidebar;
