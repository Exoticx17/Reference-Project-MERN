import React,{useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
import StoryDForm from '../components/storyComponents/storyDForm';
import StoryEForm from '../components/storyComponents/storyEForm';
import StoryPForm from '../components/storyComponents/storyPForm';
import '../stylesheets/sdatabase.css'

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
    const [genre, setGenre] = useState('')
    const [id, setId] = useState('')
    const [etitle, setETitle] = useState('')
    const [eauthor, setEAuthor] = useState('')
    const [esnippet, setESnippet] = useState('')
    const [ebody, setEBody] = useState('')
    const [egenre, setEGenre] = useState('')
    const [dID, setDID] = useState('')

    const handleForm = (e) => {
        e.preventDefault()
        setTitle(e.target.title.value)
        setAuthor(e.target.author.value)
        setSnippet(e.target.snippet.value)
        setBody(e.target.body.value)
        setGenre(e.target.genre.value)
        const data = {
                title: title,
                author: author,
                snippet: snippet,
                genre: genre,
                body: body
        }
        fetch('http://localhost:3001/story',{
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
        setId(e.target.eid.value)
        setETitle(e.target.etitle.value)
        setEAuthor(e.target.eauthor.value)
        setESnippet(e.target.esnippet.value)
        setEBody(e.target.ebody.value)
        setEGenre(e.target.egenre.value)
        const edata = {
                title: etitle,
                author: eauthor,
                snippet: esnippet,
                genre: egenre,
                body: ebody
        }
        fetch(`http://localhost:3001/story/${id}`,{
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

        fetch(`http://localhost:3001/story/${dID}`,{
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
                <StoryPForm formHandler={handleForm}/>
            </div>
            <div className='edit'>
                <StoryEForm formHandler={ehandleForm}/>
            </div>
            <div className='delete'>
                <StoryDForm formHandler={dformHandler}/>
            </div>
        </div>
     );
}
 
export default Database;