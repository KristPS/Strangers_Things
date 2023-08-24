import { useState, useEffect } from 'react'
import NavBar from '../Components/NavBar'
import Form from '../Components/PostForm.jsx'
import { createNewPost } from '../API/'

const COHORT_NAME='2302-acc-et-web-pt-a'
const BASE_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const POSTS=`${BASE_URL}/posts`

export default function CreatePost({token, setToken}) {

    return (
        <div>
         
            <Form token={token}/>
        </div>
    )
}