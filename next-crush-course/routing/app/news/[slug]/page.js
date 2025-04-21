
function NewsDetailsPage({params}){
    const NewsId = params.slug
    return (
        <>
        <h1> News Details Page</h1>
        <p>News Id: {NewsId}</p>
        </>
    )
}
export default NewsDetailsPage;