import React from 'react';
import '../../stylesheets/storyCard.css'

const StoryCard = (props) => {
    return ( 
        <div className='contained'>
            <img src="/blog-pic2.jpg" alt="Work and Paradise" className='picture'/>
            <div className='text'>
                <h2 className='ttname'>{props.name}</h2>
                <p className='tsnippet'>{props.snippet}</p>
            </div>
        </div>

     );
}
 
export default StoryCard;