import { useState } from "react";

export default function Posts({ token }) {
  //See a list of all posts
  //create a new post
  const [posts, setPosts] = useState([""]);

  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
}
