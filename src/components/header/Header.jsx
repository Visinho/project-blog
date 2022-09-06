import "./Header.css"

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">Peace Portal</span>
        <span className="headerTitleLg">We Don't Do That Here</span>
      </div>
      <img
        className="headerImg" 
        src="https://images.unsplash.com/photo-1523861751938-121b5323b48b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
        alt="" />
    </div>
  );
}
