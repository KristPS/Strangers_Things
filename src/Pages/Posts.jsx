import { useState, useEffect } from "react"
import NavBar from '../Components/NavBar'
import { fetchPosts } from '../API'
import PostCard from '../Components/PostCard'

//const COHORT_NAME='2302-acc-et-web-pt-a'
//const BASE_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
//const POSTS=`${BASE_URL}/posts`

export default function fetchPosts() {
  try {
    const response = await fetch (
      `${BASE_URL}/posts`);
      const result = await response.json();
      console.log(result);
      return result.data.posts;
    } catch (error){
      console.error(error);
    }
    
  
  //See a list of all posts
  //create a new post
  
    const [posts, setPosts] = useState([])
   
    useEffect(() => {
      async function fetchData()
      {
        const data = await FetchPosts() 
        setPosts(data)
     }
        fetchData()

    }, []) 
    
    return (
        <>
            
            <h1>Posts</h1>
            <main>
            {
                posts.map((post) => (
                    <PostCard 
                        key={post._id}
                        post={post}
                        
                        />
                ))
            }
            </main>
        </>
        
    )
}
