import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css"

function PostsList() {
  return (
    <>
      <NewPost/>
      <ul className={classes.posts}>
        <Post author="Zama" body="HTML is not so simple" />
        <Post author="Sizwe" body="Triple happpines" />
      </ul>
    </>
  );
}

export default PostsList;
