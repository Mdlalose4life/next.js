import Image from "next/image"
import Link from "next/link"

import classes from './meal-item.module.css'

export default function MealsItem({ tittle, slug, image, summary, creator }){
    return(
        <article className={classes.meal} >
            <header>
                <div className={classes.image}>
                    <Image src={image} alt={tittle} fill/>
                </div>
                <div className={classes.headerText}>
                    <h2>{tittle}</h2>
                    <p>By {creator}</p>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>{summary}</p>
                <div className={classes.actions}>
                    <Link href={`/meals/${slug}`} >View details</Link>
                </div>
            </div>
        </article>
    )
}