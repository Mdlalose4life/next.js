import Image from "next/image"
import Link from "next/link"

import classes from './meal-item.module.css'

export default function MealsItem({ tittle="See you later", slug, image, summary, creator }){
    return(
        <article className={classes.meal} >
            <header>
                <div className={classes.image}>
                    {/* {console.log(tittle)} */}
                    <Image src={image} alt={tittle} fill/>
                </div>
                <div className={classes.headerText}>
                {console.log(tittle)}
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