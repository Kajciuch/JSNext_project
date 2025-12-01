'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './nav-link.module.css';

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  const active = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${classes.link} ${active ? classes.active : ''}`}
    >
      {children}
    </Link>
  );
}
