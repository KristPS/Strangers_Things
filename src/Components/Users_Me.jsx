import React, { useState, useEffect } from "react";

const COHORT_NAME = "2302-acc-et-web-pt-a";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const POSTS = `${BASE_URL}/posts`;

function Users_Me() {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("On Request");
  const [willDeliver, setWillDeliver] = useState(true);

  // Function to fetch the user's data
  const fetchUserData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      const result = await response.json();
      setUser(result.data.user);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      post: {
        title: title,
        description: description,
        price: price,
        location: location,
        willDeliver: willDeliver,
      },
    };

    try {
      // Send a POST request to create a new post
      const response = await fetch(POSTS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN_STRING_HERE}`,
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        setTitle("");
        setDescription("");
        setPrice("");
        setLocation("On Request");
        setWillDeliver(true);

        // Fetch user data again to refresh the user's posts

        fetchUserData();
      } else {
        console.error("Failed to create a new post");
      }
    } catch (error) {
      console.error("Error creating a new post:", error);
    }
  };

  return (
    <div>
      {user && (
        <div>
          <h1>Welcome, {user.username}!</h1>
          {/* Display user information here */}
        </div>
      )}

      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for creating a new post */}
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit">Create Post</button>
      </form>

      {/* Display user's posts here */}
    </div>
  );
}

export default Users_Me;
