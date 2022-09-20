import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="main-nav bg-blue-transparent border-b border-blue-dark fixed w-full z-10 p-5 justify-center flex mb-8 font-titillium text-xl md:pl-84 md:justify-start">
      <ul className="flex text-lg gap-4">
        <li>
          <NavLink href="/">
            <a>Home</a>
          </NavLink>
        </li>
        <li>
          <NavLink href="/portfolio">
            <a>Portfolio</a>
          </NavLink>
        </li>
        <li>
          <NavLink href="/blog">
            <a>Blog</a>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const NavLink = ({ children, href }) => {
  const child = React.Children.only(children);
  const router = useRouter();

  return (
    <Link href={href} passHref>
      {React.cloneElement(child, {
        'aria-current': router.pathname === href ? 'page' : null,
      })}
    </Link>
  );
};

export default Navbar;
