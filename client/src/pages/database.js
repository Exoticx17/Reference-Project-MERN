import React,{useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
import DForm from '../components/blogComponents/deleteForm';
import EForm from '../components/blogComponents/editForm';
import PForm from '../components/blogComponents/postForm'
import '../stylesheets/database.css'

const Database = () => {

    const [cookie,setCookie] = useCookies()
    const jwt = cookie.jwt;


    useEffect(() => {
        if(!jwt){
            window.location.assign('/login')
        }
    })


    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [snippet, setSnippet] = useState('')
    const [body, setBody] = useState('')
    const [category, setCategory] = useState('')
    const [id, setId] = useState('')
    const [etitle, setETitle] = useState('')
    const [eauthor, setEAuthor] = useState('')
    const [esnippet, setESnippet] = useState('')
    const [ebody, setEBody] = useState('')
    const [ecategory, setECategory] = useState('')
    const [dID, setDID] = useState('')

    const handleForm = (e) => {
        e.preventDefault()
        setTitle(e.target.titley.value)
        setAuthor(e.target.authory.value)
        setSnippet(e.target.snippety.value)
        setBody(e.target.bodyy.value)
        setCategory(e.target.categoryy.value)
        const data = {
                title: title,
                author: author,
                snippet: snippet,
                category: category,
                body: body
        }
        fetch('http://localhost:3001/blogs',{
            method: 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res) => {
            console.log(res)
            console.log('worked')
        })
        .catch((err) => {
            console.error(err)
        })
    }

    const ehandleForm = (e) => {
        e.preventDefault()
        setId(e.target.eidy.value)
        setETitle(e.target.etitley.value)
        setEAuthor(e.target.eauthory.value)
        setESnippet(e.target.esnippety.value)
        setEBody(e.target.ebodyy.value)
        setECategory(e.target.ecategoryy.value)
        const edata = {
                title: etitle,
                author: eauthor,
                snippet: esnippet,
                category: ecategory,
                body: ebody
        }
        fetch(`http://localhost:3001/blogs/${id}`,{
            method: 'PATCH',
            headers : {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(edata)
        })
        .then((res) => {
            console.log(res)
            console.log('worked')
        })
        .catch((err) => {
            console.error(err)
        })
    }

    const dformHandler = (e) => {
        e.preventDefault()
        setDID(e.target.delete.value)

        fetch(`http://localhost:3001/blogs/${dID}`,{
            method: 'DELETE'
        })
        .then((res) => {
            console.log(res)
            console.log('worked')
        })
        .catch((err) => {
            console.error(err)
        })
    }

    return ( 
        <div>
            <div className='post'>
                <PForm formHandler={handleForm}/>
                <meta name='description' content="Main Database Page For Blogs"/>
            </div>
            <div className='edit'>
                <EForm formHandler={ehandleForm}/>
            </div>
            <div className='delete'>
                <DForm formHandler={dformHandler}/>
            </div>
        </div>
     );
}
 
export default Database;