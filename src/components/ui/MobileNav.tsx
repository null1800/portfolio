"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Music', path: '/music' },
  { name: 'Shows', path: '/shows' },
  { name: 'Contact', path: '/contact' },
];

function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      {/* Menu Trigger */}
      <SheetTrigger className="text-[#eae7e1] hover:text-[#d1a655] transition-colors duration-300">
        <CiMenuFries size={30} />
      </SheetTrigger>

      {/* Sidebar Menu */}
      <SheetContent
        side="right"
        className="bg-[#35281e]/95 text-[#eae7e1] w-72 p-6 shadow-2xl backdrop-blur-lg rounded-xl"
      >
        {/* Accessible hidden title */}
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

        {/* Logo */}
        <div className="flex items-start justify-between mb-10">
          <Link
            href="/"
            className="text-3xl font-extrabold tracking-wide font-[var(--font-playfair)] hover:text-[#d1a655] transition-colors duration-300"
          >
            BZ<span className="text-[#d1a655] drop-shadow-[0_0_10px_rgba(209,166,85,0.6)]">.</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-6">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`
                  text-lg font-semibold tracking-wide transition-all duration-300
                  ${isActive ? 'text-[#d1a655]' : 'text-[#ccc] hover:text-[#e5c57d]'}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
