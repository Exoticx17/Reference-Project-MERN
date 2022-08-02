import React, { useState } from 'react';
import BlogPage from '../components/blogComponents/blogPage';
import { useParams } from 'react-router-dom';

const IdPage = () => {

    const [blogs,setBlogs] = useState([])

    const PageLoader = () => {

        let {id} = useParams()
        fetch(`http://localhost:3001/blogs/one?id=${id}`,{mode: 'cors'})
        .then(res => {
            return res.json()
        })
        .then(data => {
            setBlogs(data)
        })
        .catch(err => console.log(err))
        return(
            <div key={blogs._id}>
               <BlogPage title={blogs.title} author={blogs.author} snippet={blogs.snippet} category={blogs.category} body={blogs.body} id={blogs._id}/>
            </div>
        )
    }
    

    return ( 
        <div>
            { PageLoader() }
        </div>
      );
}
 
export default IdPage;
