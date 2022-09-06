import './Post.css';

export default function Post() {
  return (
    <div className='post'>
      <img 
        className='postImg'
        src='https://media.istockphoto.com/photos/conflict-concept-picture-id1177188061?b=1&k=20&m=1177188061&s=170667a&w=0&h=TsGm0UjsrSl_-DU9zuZ4ZcS20_RbfdWPydE86ecVsOg=' 
        alt=''/>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Elvis</span>
                <span className="postCat">Visinho</span>
            </div>
            <span className="postTitle">
                 Peace is a dirty word
            </span>
            <hr/>
            <span className="postDate">1 hr ago</span>
        </div>
        <p className='postDesc'>
        It is better to be violent, if there is violence in our hearts, 
        than to put on the cloak of nonviolence to cover impotence. Violence is always the last option, but if that time comes, it is the ONLY option. 
        Peace is not the absence of conflict but the presence of creative alternatives for responding to conflict - alternatives to passive or aggressive responses, alternatives to violence. 
        For if we desire a society of peace, then we should achieve such a society through violence. 
        If we desire a society without discrimination, then we must discriminate against anyone in the process of building this society. 
        If we desire a society that is democratic, then violence must become a means as well as an end.
        </p>
    </div>
  )
}
