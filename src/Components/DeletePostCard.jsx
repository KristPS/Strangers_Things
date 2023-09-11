import React, { useState, useEffect } from 'react';
import { deletePost, fetchAllPosts } from 'https://strangers-things.herokuapp.com/api/posts'; 
import SendMessage from './SendMessage'; 


const COHORT_NAME = '2302-acc-et-web-pt-a';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function DeletePost({ post, token, fetchPosts, currentUser }) {
  const { _id, title, author, location, price, messages } = post;
  const [showMessageForm, setShowMessageForm] = useState(false);

    const isAuthor = currentUser && currentUser._id === author._id;

   async function handleDeleteClick() {
    if (isAuthor) {
      try {
        await deletePost(_id, token);
        await fetchAllPosts();
        } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  }

  // Function to handle message form display
  function handleMessageClick() {
    setShowMessageForm(true);
  }

  return (
    <div className="deletepost" key={_id}>
      <h2>{title}</h2>
      <p>{messages}</p>
      <p>{price}</p>
      <h2>Seller: {author.username}</h2>
      <p>Location: {location}</p>

      {/* Display the delete button if the user is the author */}
      {isAuthor && (
        <button onClick={() => handleDeleteClick()}>Delete Post</button>
      )}

      {showMessageForm && (
        <SendMessage
          post={post}
          token={token}
          fetchPosts={fetchPosts}
          setShowMessageForm={setShowMessageForm}
        />
      )}
    </div>
  );
}

