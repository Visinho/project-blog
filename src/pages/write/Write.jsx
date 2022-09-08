import './Write.css'

export default function Write() {
  return (
    <div className='write'>
        <img 
            className='writeImg'
            src='https://media.istockphoto.com/photos/battle-scene-military-silhouettes-fighting-scene-on-war-fog-sky-a-picture-id1180483423?k=20&m=1180483423&s=612x612&w=0&h=RUwK4FHSZsWnSTQ7ivc7JM0cCPN_ItfaknjO8vm9H-8='
            alt=''
        />
      <form className='writeForm'>
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
            </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea 
                placeholder='Tell your story...' 
                type="text" 
                className='writeInput writeText'>
            </textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>  
  )
}
