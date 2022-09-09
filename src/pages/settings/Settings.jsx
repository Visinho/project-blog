import './Settings.css'
import Sidebar from '../../components/sidebar/SideBar'

export default function Settings() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your Account</span>
            <span className="settingsDeleteTitle">Delete your Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img 
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"  
                    alt=''
                />
                <label htmlFor='fileInput'>
                    <i class="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type='file' id='fileInput' style={{display: "none"}}/>
            </div>
            <label>Username</label>
            <input type='text' placeholder='Visinho'/>
            <label>Email</label>
            <input type='email' placeholder='Elvisvisinho97@gmail.com'/>
            <label>Password</label>
            <input type='text'/>
            <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
