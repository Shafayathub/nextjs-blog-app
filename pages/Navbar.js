import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="mt-5">
      <ul className="flex justify-center space-x-5">
        <Link href={'/'}>
          <li>Home</li>
        </Link>
        <Link href={'/blog'}>
          <li>Blog</li>
        </Link>
        <Link href={'/about'}>
          <li>About</li>
        </Link>
        <Link href={'contact'}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
