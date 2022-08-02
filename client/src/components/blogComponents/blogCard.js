import React from 'react';
import '../../stylesheets/blogCard.css'

const BlogCard = (props) => {
    return ( 
        <div className='contained'>
            <img src="/blog-pic.jpg" alt="Work and Paradise" className='picture'/>
            <div className='text'>
                <h2 className='ttname'>{props.name}</h2>
                <p className='tsnippet'>{props.snippet}</p>
            </div>
        </div>

     );
}
 
export default BlogCard;