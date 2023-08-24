import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar.jsx'
import { fetchPosts } from '../API/index.js'
import PostCard from '../components/PostCard.jsx'

const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const POSTS_ENDPOINT=`${API_URL}/posts`

export default function Posts() {
    const [posts, setPosts] = useState([])
   
    async function fetchData() {
        const data = await fetchPosts()
        setPosts(data)
    }
    useEffect(() => {
        fetchData()
    }, []) 
    
    return (
        <>
            <NavBar />
            <h1>Posts</h1>
            <main>
            {
                posts.map((post) => (
                    <PostCard 
                        key={post._id}
                        post={post}
                        fetchPosts={fetchData}
                        />
                ))
            }
            </main>
        </>
        
    )
}