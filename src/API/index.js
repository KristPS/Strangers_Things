const COHORT_NAME='2302-acc-et-web-pt-a'
const BASE_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const POSTS=`${BASE_URL}/posts`

export async function fetchAllPosts() {
    try {
      const response = await fetch(`${POSTS}`)
      const result = await response.json();
      console.log(result.data.posts);
      return result.data.posts
    } catch (err) {
      console.error(err);
    }
}

export async function fetchMyPosts() {
    try {
        const response = await fetch(`${BASE_URL}/users/me`)
        const result = await response.json();
        console.log(result.data.posts);
        return result.data.posts
      } catch (err) {
        console.error(err);
      }
}

export async function fetchNewPost() {

}

export async function deletePost() {
  
}

export async function createNewPost(newPost, token) {
    console.log(newPost)
    try {
        const response = await fetch(POSTS, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(newPost)
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
    
}