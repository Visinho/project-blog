import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SinglePost.css'
import axios from "axios"
import { useContext } from 'react';
import { Context } from '../../context/Context';


export default function SinglePost() {
  const location = useLocation()
  const path = (location.pathname.split("/")[2])
  const [post, setPost] = useState({})
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context); 
  

  useEffect(() =>{
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      setPost(res.data)
    };
    getPost()
  }, [path]);

  const handleDelete = async (e) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${post._id}`, 
      {data: {username: user.username},
    });
      window.location.replace("/")
    } catch (err) {}
  }

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo && (
        <img 
        className='singlePostImg'
        // src='https://media.istockphoto.com/photos/full-residential-house-fire-picture-id1404260690?b=1&k=20&m=1404260690&s=170667a&w=0&h=aKWFROjy0p0E2DHAEPxvWAJeqz_vwxdofN_Egfe96bA='
        src={PF + post.photo}
        alt='ggg' />
          )}
            <h1 className="singlePostTitle">
                {post.title}
                {post.username === user?.username && 
                <div className="singlePostEdit">
                    <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i class="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
                </div>
                }
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                Author:
                <Link to={`/?user=${post.username}`} className="link">
                <b>{post.username}</b>
                </Link>
                </span>
                <span className="singlePostDate"><b>{new Date(post.createdAt).toDateString()}</b></span>
            </div>
            <p className='singlePostDesc'>
              {post.desc}
            </p>
      </div>
    </div>
  )
}
