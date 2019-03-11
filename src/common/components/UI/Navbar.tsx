import { Link } from 'gatsby';
import React from 'react';

interface NavbarProps {}

const Navbar: React.SFC<NavbarProps> = () => {
  return (
    <div className="fixed w-full z-10 p-5 justify-center flex mb-8 font-sans text-xl md:pl-335 md:justify-start">
      <ul className="list-reset flex">
        <li className="mr-6">
          <Link
            to="/"
            activeClassName="border-b text-blue-lighter border-blue-lighter"
            className="text-blue-dark hover:text-blue-lighter no-underline border-0"
          >
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link
            to="/portfolio"
            activeClassName="border-b text-blue-lighter border-blue-lighter"
            className="text-blue-dark hover:text-blue-lighter no-underline border-0"
          >
            Portfolio
          </Link>
        </li>
        <li className="mr-6">
          <Link
            to="/blog"
            activeClassName="border-b text-blue-lighter border-blue-lighter"
            className="text-blue-dark hover:text-blue-lighter no-underline border-0"
          >
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
