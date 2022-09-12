import { Link } from "react-router-dom";
import "./Topbar.css";

export default function TopBar() {
  const user = true;
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-telegram"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">HOME</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">ABOUT</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">CONTACT</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">WRITE</Link>
            </li>
            <li className="topListItem">
              {user && "LOGOUT"}
            </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img className="topImg" src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">REGISTER</Link>
              </li>
            </ul>
          )
        }
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div> 
  )
}
