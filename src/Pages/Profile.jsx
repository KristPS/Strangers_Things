import { useState, useEffect } from "react";
import NavBar from './Components/NavBar'
import {fetchMyPosts} from '../API'

const COHORT_NAME='2302-acc-et-web-pt-a'
const BASE_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function Profile({ token }) {
  const [username, setUsername] = useState("");
  const [posts, setPosts] = useState([]);
  const myData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
        });
        const result = await response.json();
        // console.log(result);
        setUsername(result.data.username)
        
        setPosts(result.data.posts)
        // console.log(posts)
        return result
    } catch (err) {
        console.error(err);
    }
}
useEffect(() => {
    myData();
}, [token])
return (
    <>
   
        <div>
     
            <p>Welcome {username}!</p>
        <main>
        {
            posts.map((post) => (
                <AllPostsCard 
                    key={post._id}
                    post={post}
                    token={token}
                    fetchMyPosts={myData}
                    />
            ))
        }
        </main>
    
    
        </div>
        
        {
            //need edit post button and delete post button only on the posts the user has created
            //need to 
        }
    </>
)

}