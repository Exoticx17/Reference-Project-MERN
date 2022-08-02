import React from 'react';
import '../../stylesheets/blogPage.css'

const BlogPage = (props) => {
    return ( 
        <div className='pcontainer'>
            <div className='pheader'>
                <h1 className='ptitle'>{props.title}</h1>
                <h2 className='ppauthor'>{props.author}</h2>
                <h2 className='ppcategory'>{props.category}</h2>
            </div>
            <div className='pmiddle'>
                <img src="/fgphoto.jpg" alt="An Amazing City" className='pphoto'/>
            </div>
            <div className='pbody'>
                <div className='ppbody-1'>
                    <p className='ppid'>{props.id}</p>
                </div>
                <p className='tbody'>{props.body}</p>
            </div>
        </div>
     );
}
 
export default BlogPage;