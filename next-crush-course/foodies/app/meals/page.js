import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';

export default function Home() {
  return (
    <>
    <header className={classes.header}></header>
        <h1>
            Delicious meals, created <span className={classes.highlight}>By you</span>
        </h1>
        <p>
            Choose your favorite recipe and cook it yourself, it is easy and fun
        </p>
        <p className={classes.cta}>
            <Link href="/meals/share">
                Share your Favorite recipe
            </Link>
        </p>
    <main className={classes.main}>
        <MealsGrid meals={[]}/>
    </main>
    </>
  );
}