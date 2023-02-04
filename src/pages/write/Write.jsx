import { useState } from 'react'
import './Write.css'
import axios from "axios"
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function Write() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const { user } = useContext(Context); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      window.location.replace("/post/" + res.data._id)
    } catch (error) {}
  };

  return (
    <div className='write'>
      {file && (
        <img 
        className='writeImg'
        // src='https://media.istockphoto.com/photos/battle-scene-military-silhouettes-fighting-scene-on-war-fog-sky-a-picture-id1180483423?k=20&m=1180483423&s=612x612&w=0&h=RUwK4FHSZsWnSTQ7ivc7JM0cCPN_ItfaknjO8vm9H-8='
        src={URL.createObjectURL(file)}
        alt=''
    />
      )};
        
      <form className='writeForm' onSubmit={handleSubmit}>
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
            </label>
                <input type="file" id="fileInput" style={{display: "none"}} onChange={(e) => setFile(e.target.files[0])}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
        </div>
        <div className="writeFormGroup">
            <textarea 
                placeholder='Tell your story...' 
                type="text" 
                className='writeInput writeText'
                onChange={e=>setDesc(e.target.value)}
                  >
            </textarea>
        </div>
        <button className='writeSubmit' type='submit'>Publish</button>
      </form>
    </div>  
  )
}
