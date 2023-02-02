import './Post.css';
import {Link} from "react-router-dom"

export default function Post({post}) {
  return (
    <div className='post'>
      {post.photo && 
        <img 
        className='postImg'
        // src='https://media.istockphoto.com/photos/conflict-concept-picture-id1177188061?b=1&k=20&m=1177188061&s=170667a&w=0&h=TsGm0UjsrSl_-DU9zuZ4ZcS20_RbfdWPydE86ecVsOg=' 
        src={post.photo}
        alt=''/>
      }
      
      <div className="postInfo">
            <div className="postCats">
                {post.categories.map(c=>(
                  <span className="postCat">{c.name}</span>
                ))}
            </div>
            <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">
                 {post.title}
            </span>
            </Link>
            
            <hr/>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='postDesc'>
        {post.desc}
        </p>
    </div>
  )
}
