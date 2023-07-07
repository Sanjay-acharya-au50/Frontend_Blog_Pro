import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import axios from 'axios'
import { toast } from 'react-toastify'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios("/posts")
      console.log(res.data)
      if (res.status === 224) {
        toast.success("Got all the post")
        setPosts(res.data)
      } else {
        toast.error(res.data)
      }
    }
    getPosts()
  }, [])

  return (
    <>
      { posts.length > 0 && posts.map((post, index) => (
       <Post key={index} {...post} />
     ))}
    </>
  );
}

export default Posts