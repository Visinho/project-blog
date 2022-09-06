import "./Header.css"

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">Visinho et Smiggs</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg" 
        src="https://images.unsplash.com/photo-1630877305806-bf883d56bad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&https://images.unsplash.com/photo-1605712202150-a0b0a29d204c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBleGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60auto=format&fit=crop&w=464&q=80ttps://images.unsplash.com/photo-1616708192455-af70f8b4eade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGV4ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
        alt="" />
    </div>
  );
}
