import { useState } from 'react'
import { updatePost, fetchMyPosts } from '../API'


export default function UpdatePost() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [location, setLocation] = useState('')
    const [willDeliver, setWillDeliver] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        const updatedPost = {post:{
          title:title,
          description:description,
          price:price,
          location:location,
          willDeliver:willDeliver
        }}
        await updatePost(updatedPost, post._id, token)
        await fetchAllPosts()
        setShowForm(false)
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
            <br></br>
            <label htmlFor="description">Description: </label>
            <textarea
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>
            <label htmlFor="price">Price: </label>
            <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <br></br>
            <label htmlFor="location">Location: </label>
            <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <br></br>
            <label htmlFor="willDeliver">Will Deliver: </label>
            <select
                id="willDeliver"
                value={willDeliver}
                onChange={(e) => setWillDeliver(e.target.value)}
            >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <br></br>
            <button type ="submit">Update Post</button>
        </form>
    )
}