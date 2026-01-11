'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './nav-link.module.css';

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
  const className = `${classes.link} ${isActive ? classes.active : ''}`.trim();

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
