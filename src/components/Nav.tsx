'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Music', path: '/music' },
  { name: 'Shows', path: '/Shows' },
  { name: 'Contact', path: '/contact' },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 text-base font-semibold tracking-wide">
      {links.map((link) => {
        const isActive = pathname === link.path;
        const isHomeActive = isActive && link.name === 'Home';

        return (
          <Link
            key={link.path}
            href={link.path}
            className={`
              capitalize
              transition-colors duration-300
              border-b-4
              border-b-transparent
              hover:border-b-amber-400 hover:text-amber-400
              ${
                isHomeActive
                  ? 'text-white border-b-amber-400'
                  : isActive
                  ? 'text-amber-400 border-b-amber-400'
                  : 'text-muted-foreground'
              }
            `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
