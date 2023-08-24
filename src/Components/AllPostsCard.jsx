import { deletePost, updatePost, fetchMyPosts } from "../API";
import { Link } from 'react-router-dom'
import UpdatePost from './UpdatePost.jsx'
import { useState }from 'react'


export default function AllPostsCard({ post, token, fetchMyPosts }) {
    //TODO show messages once send message is functional
    const { _id, title, description, location, price, willDeliver, active} = post;
    const [showForm, setShowForm] = useState(false)
    async function handleClick(_id, token) {
        await deletePost(_id, token);
        await fetchMyPosts();
    }
    async function handleEditClick() {
        // await updatePost(post, _id, token);
        // await fetchMyPosts();
        setShowForm(true);
    }
    return (
      <div className="allPosts" key={_id}>
        <h1>{title}</h1>
        <p>Description: {description}</p>
        <p>Price: {price} Location: {location} Will Deliver: {willDeliver ? "Yes" : "No"}</p>
        {/* <p>{messages.map()}</p> */}
        <p>Active: {active ? "Yes" : "No"}</p>
        <button className="deleteButton" onClick={() => handleClick(_id, token)}>Delete Post</button>
        <button className="editPost" onClick={() => handleEditClick()}>Edit Post</button>
        {showForm && <UpdatePost post={post} token={token} fetchMyPosts={fetchMyPosts} setShowForm={setShowForm}/> }


        {
           // make button function to show message form below post. 
           // must be logged in to send message
        }
      </div>
    )
  }