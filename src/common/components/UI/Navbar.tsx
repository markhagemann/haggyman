import { Link } from 'gatsby';
import React from 'react';

interface NavbarProps {}

const Navbar: React.SFC<NavbarProps> = (props: NavbarProps) => {
  return (
    <div className="fixed w-full z-10 pin-t p-5 justify-center flex mt-2 mb-8 font-display text-lg md:pl-320 md:justify-start">
      <ul className="list-reset flex">
        <li className="mr-6">
          <Link to="/" className="text-blue-dark hover:text-blue-lighter no-underline">
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/portfolio" className="text-blue-dark hover:text-blue-lighter no-underline">
            Portfolio
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/blog" className="text-blue-dark hover:text-blue-lighter no-underline">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
