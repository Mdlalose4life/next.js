import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Posts from "./routes/Posts.jsx";
import Rootlayout from "./routes/RootLayout.jsx";
import NewPost, {action as PostAction} from "./routes/NewPost.jsx";
import PostDetails, {loader as PostDetailsLoadder} from "./routes/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout />,
    children: [
      { 
        path: '/', 
        element: <Posts />,
        loader: async () => {
          const response = await fetch("http://localhost:8080/posts");
          const resData = await response.json();
          return resData.posts;
        },
      },
      { 
        path: '/create-post', 
        element: <NewPost />, 
        action: PostAction 
      },
      {
        path:'/:id',
        element:<PostDetails/>,
        loader: PostDetailsLoadder
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
