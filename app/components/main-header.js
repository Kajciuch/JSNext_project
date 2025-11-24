import Link from 'next/link';
import classes from './main-header.module.css';
import Image from 'next/image';
import logo from '../../assets/logo.png';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Image src={logo} alt="Logo" width={50} height={50} priority />
        <span>Jedzenie</span>
      </div>

      <nav>
        <ul className={classes.nav}>
          <li><Link href="/">Strona główna</Link></li>
          <li><Link href="/meals">Dania</Link></li>
          <li><Link href="/meals/share">Udostępnij</Link></li>
          <li><Link href="/community">Społeczność</Link></li>
        </ul>
      </nav>
    </header>
  );
}
