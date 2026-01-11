import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';
import classes from './page.module.css';

export default async function MealDetailsPage({ params }) {
 
  const { mealSlug } = await params; 
  
  const meal = getMeal(mealSlug);

  if (!meal) {
    notFound(); [cite_start]
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p 
          className={classes.instructions} 
          dangerouslySetInnerHTML={{ 
            __html: meal.instructions.replace(/\n/g, '<br />') 
          }}
        ></p>
      </main>
    </>
  );
}