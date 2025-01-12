import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostList.module.css"

function PostsList() {
const posts = useLoaderData()
// useEffect(() => {
//   async function fetchPost() {
//     setIsFetching(true);
//     const response = await fetch("http://localhost:8080/posts")
//     const resData = await response.json();
//     setPosts(resData.posts);
//     setIsFetching(false);
//   }
//   fetchPost()
// },[])

// function addPostHandler(postData){
//   fetch("http://localhost:8080/posts",{
//     method: "POST",
//     body: JSON.stringify(postData),
//     headers: {
//       'content-type': 'application/json'
//     }
//   });
//   setPosts(existingPost => [postData, ...existingPost]);
// }

  return (
    <>
    { posts.length > 0 && (
      <ul className={classes.posts}>
        {posts.map((post) => <Post key={post.id} id={post.id} author={post.author} body={post.body} />)}
      </ul>)}
      { posts.length === 0 && 
      <div style={{ textAlign: "center", color: "#1e40af"}}>
        <h2>No Posts available yet</h2>
        <p>Start adding some</p>
      </div>
      }
    </>
  );
}

export default PostsList;
