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
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  

  useEffect(() =>{
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    };
    getPost()
  }, [path]);

  const handleDelete = async (e) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${post._id}`, 
      {data: {username: user.username},
    });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async (e) =>{
    try {
      await axios.put(`http://localhost:5000/api/posts/${post._id}`, 
      {username: user.username, title, desc,
    });
      setUpdateMode(false);
    } catch (err) {}
  };
  

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo && (
        <img 
        className='singlePostImg'
        // src='https://media.istockphoto.com/photos/full-residential-house-fire-picture-id1404260690?b=1&k=20&m=1404260690&s=170667a&w=0&h=aKWFROjy0p0E2DHAEPxvWAJeqz_vwxdofN_Egfe96bA='
        src={PF + post.photo}
        alt='' />
          )}
            {
            updateMode ? <input type="text" value={title} className="singlePostTitleInput" onChange={(e) => setTitle(e.target.value)} autoFocus/> : (

              <h1 className="singlePostTitle">
                {title}
                {post.username === user?.username && 
                <div className="singlePostEdit">
                    <i class="singlePostIcon fa-regular fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
                    <i class="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
                </div>
                }
            </h1>
              )}
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                Author:
                <Link to={`/?user=${post.username}`} className="link">
                <b>{post.username}</b>
                </Link>
                </span>
                <span className="singlePostDate"><b>{new Date(post.createdAt).toDateString()}</b></span>
            </div>
            {
              updateMode ? (<textarea className='singlePostDescInput' value={desc} onChange={(e) => setDesc(e.target.value)}/>) : (
                <p className='singlePostDesc'>
              {desc}
            </p>
          )}
          {
            updateMode && (

              <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
            )}
      </div>
    </div>
  )
}
