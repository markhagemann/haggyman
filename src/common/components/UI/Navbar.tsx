import { Link } from 'gatsby';
import React from 'react';

interface NavbarProps {}

const activeLinkClass = 'border-b border-blue-lighter text-blue-lighter hover:border-blue-lighter active';
const linkClass = 'no-underline border-0 relative';

const Navbar: React.SFC<NavbarProps> = () => {
  return (
    <div
      id="nav"
      className="bg-blue-custom-transparent border-b border-blue-dark fixed w-full z-10 p-5 justify-center flex mb-8 font-titillium text-xl md:pl-84 md:justify-start"
    >
      <ul className="flex text-lg">
        <li className="mr-6">
          <Link to="/" activeClassName={activeLinkClass} className={linkClass}>
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/portfolio/" activeClassName={activeLinkClass} className={linkClass}>
            Portfolio
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/blog/" activeClassName={activeLinkClass} className={linkClass}>
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
