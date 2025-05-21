import { DUMMY_NEWS } from "@/dummy-news";
import NewsNotFoundPage from "./News-not-found";


function NewsDetailsPage({params}){
    const NewsSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === NewsSlug)

    if (!newsItem){
      return NewsNotFoundPage()
    }

    return (
        <article className="news-article">
            <header>
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                <header>{newsItem.title}</header>
                <time dateTime={newsItem.date}>{newsItem.date}</time>                
            </header>
            <p>{newsItem.content}</p>
        </article>
    )
}
export default NewsDetailsPage;