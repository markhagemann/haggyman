import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';


const Navbar: React.FC = () => {
  const [navBackgroundStyle, setNavBackgroundStyle] = useState('bg-blue-darker')

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y < 0) {
        setNavBackgroundStyle('bg-blue-darker/[0.8] backdrop-blur-sm');
      }

    },
    [navBackgroundStyle]
  )

  return (
    <nav className={`main-nav ${navBackgroundStyle} border-b border-blue-dark fixed w-full z-10 p-5 justify-center flex mb-8 text-xl md:pl-84 md:justify-start`}>
      <ul className="flex font-display font-normal text-lg gap-4">
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
