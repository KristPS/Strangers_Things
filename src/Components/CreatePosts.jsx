import React, { useState } from "react";

import { fetchNewPost, createNewPost } from "../API"; 

const COHORT_NAME = '2302-acc-et-web-pt-a';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const POSTS = `${BASE_URL}/posts`;

export async function createNewPostAPI(newPost, token) {
  try {
    const response = await fetch(POSTS, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ post: newPost })
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

export default function CreateNewPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      title: title,
      description: description,
      price: price,
      location: location,
      willDeliver: willDeliver,
    };

    // Call the createPost function to create a new post
    await createNewPost(newPost);


    // Fetch the updated list of posts after creating a new one
    await fetchNewPost();


    // Reset form inputs and hide the form
    setTitle("");
    setDescription("");
    setPrice(0);
    setLocation("");
    setWillDeliver(false);
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="price">Price</label>
      <input
        type="text"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <label htmlFor="willDeliver">Will Deliver</label>
      <input
        type="checkbox"
        id="willDeliver"
        checked={willDeliver}
        onChange={(e) => setWillDeliver(e.target.checked)}
      />
      <button type="submit">Create New Post</button>
    </form>
  );
}
