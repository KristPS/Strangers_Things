
import { Link } from 'react-router-dom';
import { useState } from 'react';

const COHORT_NAME = '2302-acc-et-web-pt-a';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const POSTS = `${BASE_URL}/posts`;

export default function AllPostsCard({ post, token, fetchAllPosts }) {
  const { _id, title, description, price } = post;
  const [showForm, setShowForm] = useState(false);

  async function handleDeletePost(_id, token) {
    await deletePost(_id, token);
    await fetchAllPosts();
  }

  async function handleEditPost() {
    await updatePost(post, _id, token);
    await fetchAllPosts();
    setShowForm(true);
  }

  async function handleCreateNewPost() {
    const newPost = {
      title: "Your New Post Title",
      description: "Your New Post Description",
      price: 0,
      location: "Your New Post Location",
      willDeliver: false,
    };

    try {
      await createNewPost(newPost, token);
      await fetchAllPosts();
      setShowForm(true);
    } catch (error) {
      console.error('Failed to create a new post:', error);
    }
  }

  const createNewPost = async (newPost, token) => {

  }
  const updatePost = async (post, id, token) => {

  }
  const deletePost = async (id, token) => {

  }

  return (
    <div className="allPosts" key={_id}>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>

      <button className="createNewPost" onClick={() => handleCreateNewPost()}>Create New Post</button>
      <Link to={`/posts/${_id}`}>View Post</Link>
      <button className="editPost" onClick={() => handleEditPost()}>Edit Post</button>
      <button className="deletePost" onClick={() => handleDeletePost(_id, token)}>Delete Post</button>

      {showForm && <EditPost post={post} token={token} fetchAllPosts={fetchAllPosts} />}
      </div>
  );
}

          
