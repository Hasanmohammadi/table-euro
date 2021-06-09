import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPost, getDataAsync } from "./postSlice";

const Posts = () => {
  const posts = useSelector(selectPost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAsync("https://jsonplaceholder.typicode.com/posts"));
  }, [dispatch]);

  if (posts === []) {
      console.log(posts);
      return <h1>Loading</h1>
  }
  return (
    <div>
      {posts.map((post) => {
        return (
          <Fragment key={post.id}>
            <p>userId: {post.userId}</p>
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>
            <hr />
          </Fragment>
        );
      })}

      <button>ADD</button>
    </div>
  );
};

export default Posts;
