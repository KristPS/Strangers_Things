import { useState } from 'react';
import { editPost, fetchMyPosts } from '`https://strangers-things.herokuapp.com/api';


const BASE_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
 const POSTS=`${BASE_URL}/posts/_id`

 const editPost = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts/_id`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
          post: {
            title: '',
            description: '',
            price: '',
            location: '',
            willDeliver: ''
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  


  export default function EditPost({ post: { title, description, price, location, willDeliver }, token, fetchEditPost }) {
    const [postTitle, setPostTitle] = useState(title);
    const [postDescription, setPostDescription] = useState(description);
    const [postPrice, setPostPrice] = useState(price);
    const [postLocation, setPostLocation] = useState(location);
    const [postWillDeliver, setPostWillDeliver] = useState(willDeliver);
  
  async function handleSubmit(e) {
    e.preventDefault();
    const editPost = {
      post: {
        title: title,
        description: description,
        price: price,
        location: location,
        willDeliver: willDeliver,
      },
    };
    await editPost(editPost, ._id, token);
    await fetchEditPost();
    setShowForm(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label htmlFor="description">Description: </label>
      <textarea
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <label htmlFor="price">Price: </label>
      <input
        type="text"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <label htmlFor="location">Location: </label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <br />
      <label htmlFor="willDeliver">Will Deliver: </label>
      <select
        id="willDeliver"
        value={willDeliver}
        onChange={(e) => setWillDeliver(e.target.value)}
      >
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
      <br />
      <button type="submit">Edit Post</button>
    </form>
  );
}
