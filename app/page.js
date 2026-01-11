import Link from 'next/link';

import ImageSlideshow from '@/components/components/images/image-slideshow';
import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div className={classes.hero}>
          <h1>NextLevel Food</h1>
          <p>Share recipes, swap stories, and discover new meals every week.</p>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Browse Meals</Link>
          </div>
        </div>
      </header>
      <main className={classes.section}>
        <h2>How it works</h2>
        <p>
          NextLevel Food is the place where food lovers show off their best
          dishes. Upload your favorite recipes, get inspired by others, and keep
          building your personal cookbook online.
        </p>
        <p>
          Want to contribute? Head over to the community, share your special
          meal, and connect with people who love cooking just as much as you do.
        </p>
      </main>
    </>
  );
}
