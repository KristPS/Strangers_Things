import { useState } from "react";


export default function CreatePosts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
 
    async function handleSubmit(e) {
      e.preventDefault()
      const createPosts = {post:{
        title:title,
        description:description,
        price:price,
        location:location,
        willDeliver:willDeliver
      }}
      await createPosts()
      await fetchPosts()
      setShowForm(false)
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
        type="text"
        id="willDeliver"
        value={willDeliver}
        onChange={(e) => setWillDeliver(e.target.value)}
      />
      <button type="submit">Create Post</button>
    
    
    <label htmlFor="username">Username</label>
    <input
      type="text"
      id="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <label htmlFor="password">Password</label>
    <input
      type="password"
      id="password"
      value={username}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit">Create Posts</button>
  </form>
  );
}
