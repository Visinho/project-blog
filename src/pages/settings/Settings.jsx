import './Settings.css'
import Sidebar from '../../components/sidebar/SideBar'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Settings() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(null);
  const PF = "http://localhost:5000/images/"



  const handleSubmit = async (e) => {
    dispatch({type: "UPDATE_START"})
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username, email, password
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("http://localhost:5000/api/users/" + user._id, updatedUser);
      setSuccess(true);
    dispatch({type: "UPDATE_SUCCESS", payload: res.data})
    } catch (error) {
    dispatch({type: "UPDATE_FAILURE"})
    }
  };


  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your Account</span>
            <span className="settingsDeleteTitle">Delete your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img 
                    // src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"  
                    src={file ? URL.createObjectURL(file) : PF + user.profilePic}  
                    alt=''
                />
                <label htmlFor='fileInput'>
                    <i class="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type='file' id='fileInput' style={{display: "none"}} onChange={(e) => setFile(e.target.files[0])}/>
            </div>
            <label>Username</label>
            <input type='text' placeholder= {user.username} onChange={e=>setUsername(e.target.value)}/>
            <label>Email</label>
            <input type='email' placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
            <label>Password</label>
            <input type='text' onChange={e=>setPassword(e.target.value)}/>
            <button className='settingsSubmit' type='submit'>Update</button>
            {success && (<span style={{color: "green", textAlign: 'center', marginTop: "20px"}}>Profile updated successfully</span>)}
        </form>
      </div> 
      <Sidebar/>
    </div>
  )
}
