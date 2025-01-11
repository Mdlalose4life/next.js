import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <main>
        <PostsList/>
        <Outlet/>
      </main>
    </>
  );
}
export default Posts;