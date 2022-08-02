import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import BlogCard from '../components/blogComponents/blogCard';
import NextPage from '../components/nextPage';
import PrevPage from '../components/prevPage';
import Search from '../components/search';
import '../stylesheets/blogs.css';


const Blogs = (props) => {

    const [cookie,setCookie] = useCookies()
    const jwt = cookie.jwt;


    useEffect(() => {
        if(!jwt){
            window.location.assign('/login')
        }
    })
    const [submitted,setSubmitted] = useState(false)
    const [submitted1,setSubmitted1] = useState(false)
    const [name,setName] = useState('')
    const [category,setCategory] = useState('')
    const [blogs,setBlogs] = useState([])
    const [page,setPage] = useState(0)

    const formHandler = e => {
        e.preventDefault()
        setSubmitted(true)
        setName(e.target.searchy.value)
        setCategory(e.target.categoryy.value)
    }

    const onClick1 = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setSubmitted1(true)
        setPage(page - 1)
        console.log(page)
    }

    const onClick2 = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setSubmitted1(true)
        setPage(page + 1)
        console.log(page)
    }

    const Exists = (name,category) => {
        if(submitted1){
            fetch(`http://localhost:3001/blogs?p=${page}`,{mode: 'cors'})
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data)
            })
            .catch(err => console.log(err))
            console.log(blogs)
        }
        else if(!submitted1){
            if(name && !category){
                //Norm Search
                fetch(`http://localhost:3001/blogs/search?p=0&title=${name}`,{mode: 'cors'})
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setBlogs(data)
                })
                .catch(err => console.log(err))
                console.log(blogs)
            }
            else if(name && category){
                //Both Search
                fetch(`http://localhost:3001/blogs/search?p=0&title=${name}&category=${category}`,{mode: 'cors'})
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setBlogs(data)
                })
                .catch(err => console.log(err))
                console.log(blogs)
            }
            else if(!name && category){
                //Category Search
                fetch(`http://localhost:3001/blogs/search?p=0&category=${category}`,{mode: 'cors'})
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setBlogs(data)
                })
                .catch(err => console.log(err))
                console.log(blogs)
            }
    }

        return(
            <div className="exists-div">
               {blogs.map((blog) => (
                    <div key={blog._id}>
                        <Link to={'/blogs/' + blog._id} className="dc-blogs">
                            <BlogCard name={blog.title} snippet={blog.snippet} className="away"/>\
                        </Link>
                    </div>
                ))}
            </div>
        )
    }

    const Away = () => {
        fetch(`http://localhost:3001/blogs?p=0`,{mode: 'cors'})
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data)
            })
            .catch(err => console.log(err))
            console.log(blogs)
        return (
            <div className="away-div">
                {blogs.map((blog) => (
                    <div key={blog._id}>
                        <Link to={'/blogs/' + blog._id} className="dc-blogs">
                            <BlogCard name={blog.title} snippet={blog.snippet} className="away"/>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }

    return ( 
        <div className='blogs'>
            <div className='search'>
                    <Search formHandler={formHandler}/>
            </div>
            <div className='container'>
                {submitted ? Exists(name,category) : Away()} 
                <PrevPage onSubmit={onClick1}/>
                <NextPage onSubmit={onClick2}/>
            </div>            
        </div>
     );
}

export default Blogs;