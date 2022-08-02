import React,{useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
import '../stylesheets/pdatabase.css'
import PolePForm from '../components/poleComponents/polePForm'
import PoleEForm from '../components/poleComponents/poleEForm'
import PoleDForm from '../components/poleComponents/poleDForm'
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
    const [subject, setSubject] = useState('')
    const [id, setId] = useState('')
    const [etitle, setETitle] = useState('')
    const [eauthor, setEAuthor] = useState('')
    const [esubject, setESubject] = useState('')
    const [dID, setDID] = useState('')

    const handleForm = (e) => {
        e.preventDefault()
        setTitle(e.target.titley.value)
        setAuthor(e.target.authory.value)
        setSubject(e.target.subjecty.value)
        const data = {
                title: title,
                author: author,
                subject: subject,
        }
        fetch('http://localhost:3001/pole',{
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
        setESubject(e.target.esubject.value)
        const edata = {
                title: etitle,
                author: eauthor,
                subject: esubject,
        }
        fetch(`http://localhost:3001/pole/${id}`,{
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

        fetch(`http://localhost:3001/pole/${dID}`,{
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
                <PolePForm formHandler={handleForm}/>
            </div>
            <div className='edit'>
                <PoleEForm formHandler={ehandleForm}/>
            </div>
            <div className='delete'>
                <PoleDForm formHandler={dformHandler}/>
            </div>
        </div>
     );
}
 
export default Database;