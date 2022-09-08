import './SinglePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img 
            className='singlePostImg'
            src='https://media.istockphoto.com/photos/full-residential-house-fire-picture-id1404260690?b=1&k=20&m=1404260690&s=170667a&w=0&h=aKWFROjy0p0E2DHAEPxvWAJeqz_vwxdofN_Egfe96bA='
            alt='ggg' />
            <h1 className="singlePostTitle">
                Ignite the violence
                <div className="singlePostEdit">
                    <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i class="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor"><b>ELVIS VISINHO</b></span>
                <span className="singlePostDate"><b>1 hr ago</b></span>
            </div>
            <p className='singlePostDesc'>
                Keep in mind, when two enemies are talking, they're not fighting, they're talking. They might be yelling and screaming, but at least they're talking. 
                It's when the talking ceases that the ground becomes fertile for violence.
                It's one thing to say, 'I don't like what you said to me and I find it rude and offensive,' 
                but the moment you threaten violence in return, you've taken it to another level, where you lose whatever credibility you had.
                Where there is no human connection, there is no compassion. Without compassion, then community, commitment, loving-kindness, human understanding, and peace all shrivel. 
                Individuals become isolated, the isolated turn cruel, and the tragic hovers in the forms of domestic and civil violence. Art and literature are antidotes to that.
                What has violence ever accomplished? What has it ever created? No martyr's cause has ever been stilled by an assassin's bullet. 
                No wrongs have ever been righted by riots and civil disorders. A sniper is only a coward, not a hero; 
                and an uncontrolled or uncontrollable mob is only the voice of madness, not the voice of the people.
                Symbolic violence is violence wielded with tacit complicity between its victims and its agents, 
                insofar as both remain unconscious of submitting to or wielding it.
                Anti-Semitism is the hatred that never dies. Violence that begins with the Jews never ends with them. 
                All of this is true. What's also true is that anti-Semitism is the oldest hatred in the world because individual people have sustained it in every generation. 
                It cannot be defeated until we look these people and their ideologies in the face.
                Violence is both unavoidable and justifiable as it is the language of the unheard. There is no escape - we pay for the violence of our ancestors.


            </p>
      </div>
    </div>
  )
}
