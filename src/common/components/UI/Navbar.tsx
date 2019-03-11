import { Link } from 'gatsby';
import React from 'react';

interface NavbarProps {}

const activeLinkClass = 'border-b text-blue-lighter border-blue-lighter hover:border-blue-lighter';
const linkClass = 'text-blue-light hover:text-blue-lighter no-underline border-0';

const Navbar: React.SFC<NavbarProps> = () => {
  return (
    <div className="bg-blue-custom-transparent border-b border-blue-dark fixed w-full z-10 p-5 justify-center flex mb-8 font-sans text-xl md:pl-335 md:justify-start">
      <ul className="list-reset flex">
        <li className="mr-6">
          <Link to="/" activeClassName={activeLinkClass} className={linkClass}>
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/portfolio" activeClassName={activeLinkClass} className={linkClass}>
            Portfolio
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/blog" activeClassName={activeLinkClass} className={linkClass}>
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
