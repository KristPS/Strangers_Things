import { useState } from 'react'
import {fetchPosts} from '../API'
import SendMessage from './SendMessage.jsx'

export default function PostCard({ post }) {
    //TODO show messages once send message is functional
    const { _id, title, author, location, price, messages} = post;
    const [showMessageForm, setShowMessageForm] = useState(false)
    // async function handleClick(_id, token) {
    //   if (isAuthor) {
    //       await deletePost(_id, token);  
    //   }
    //   await fetchPosts();
    // }
    async function handleMessageClick() {
      //TODO show message form
      setShowMessageForm(true)
    }
    return (
      <div className="postCard" key={_id}>
        <h2>{title}</h2>
        <p>{messages}</p>
        <p>{price}</p>
        <h2>Seller:{author.username}</h2>
        <p>Location:{location}</p>
        
        
        {/* <p>{messages.map()}</p> */}
        <button onClick={() => handleMessageClick()}>Send Message to Seller</button>
        {showMessageForm && <SendMessage post={post} token={token} fetchPosts={fetchPosts} setShowMessageForm={setShowMessageForm}/> }

        {
           // make button function to show message form below post. 
           // must be logged in and not the author to send message
        }
      </div>
    )
  }