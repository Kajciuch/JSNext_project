import Link from 'next/link';
import Image from 'next/image';
import classes from './main-header.module.css';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src="/icon.png" alt="logo" width={50} height={50} />
        NextLevelFood
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/community">Community</NavLink>
          </li>
          <li>
            <NavLink href="/meals">Meals</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
