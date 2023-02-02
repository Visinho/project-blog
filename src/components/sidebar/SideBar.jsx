import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./SideBar.css"

export default function SideBar() {
const [cats,setCats] = useState([])


useEffect(() => {
    const getCats = async () =>{
        const res = await axios.get("http://localhost:5000/api/categories/")
        setCats(res.data)
    };
    getCats();
    }, []);

  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://images.unsplash.com/photo-1557089041-7fa93ffc2e08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpb2xlbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <p>
                What exactly is violence? Sometimes spelt Vayolence, vawulence, or vio vio, it is the act of
                serving revenge when it is dead cold, like mortuary standard something wey person go see shout
                "chei... E don be as e go be nah"
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-telegram"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
  )
}
