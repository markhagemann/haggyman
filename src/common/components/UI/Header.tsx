import { Link } from 'gatsby';
import React from 'react';

interface HeaderProps {
  siteTitle: string;
}

const Header: React.SFC<HeaderProps> = (props: HeaderProps) => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">{props.siteTitle}</Link>
      </h1>
    </div>
  </header>
);

export default Header;
