import Link from "next/link";

function NewsPage(){
    return (
        <>
        <h1>News Page</h1>
        <ul className="news-list">
             <li> 
                <Link href="news/first-news"> First News </Link>
             </li>
             <li> 
                <Link href="news/second-news"> second News </Link>
             </li>
             <li> 
                <Link href="news/third-news"> Third News </Link>
             </li>
        </ul>
        </>
    )
}
export default NewsPage;