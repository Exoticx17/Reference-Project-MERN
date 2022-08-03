import React, {useState, useEffect} from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import PoleCard from '../components/poleComponents/poleCard';
import PoleSearch from '../components/poleComponents/poleSearch';
import NextPage from '../components/nextPage';
import PrevPage from '../components/prevPage';
import '../stylesheets/poles.css'

const Poles = () => {

    
    const [cookie,setCookie] = useCookies()
    const [submitted,setSubmitted] = useState(false)
    const [submitted1,setSubmitted1] = useState(false)
    const [title,setTitle] = useState('')
    const [subject,setSubject] = useState('')
    const [poles,setPoles] = useState([])
    const [page,setPage] = useState(0)
    const jwt = cookie.jwt;

    useEffect(() => {
        if(!jwt){
            window.location.assign('/login')
        }
    })

    const formHandler = e => {
        e.preventDefault()
        setSubmitted(true)
        setTitle(e.target.searchy.value)
        setSubject(e.target.sunjecty.value)
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

    const Exists = (title,subject) => {
        if(submitted1){
            fetch(`http://localhost:3001/pole?p=${page}`,{mode: 'cors'})
            .then(res => {
                return res.json()
            })
            .then(data => {
                setPoles(data)
            })
            .catch(err => console.log(err))
            console.log(poles)
        }
        else if(!submitted1){
            if(title && !subject){
                //Norm Search
                fetch(`http://localhost:3001/pole/search?p=0&title=${title}`,{mode: 'cors'})
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setPoles(data)
                })
                .catch(err => console.log(err))
                console.log(poles)
            }
            else if(title && subject){
                //Both Search
                fetch(`http://localhost:3001/pole/search?p=0&title=${title}&subject=${subject}`,{mode: 'cors'})
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setPoles(data)
                })
                .catch(err => console.log(err))
                console.log(poles)
            }
            else if(!title && subject){
                //Category Search
                fetch(`http://localhost:3001/pole/search?p=0&subject=${subject}`,{mode: 'cors'})
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setPoles(data)
                })
                .catch(err => console.log(err))
                console.log(poles)
            }
    }

        return(
            <div className="exists-div">
               {poles.map((pole) => (
                    <div key={poles._id}>
                        <Link to={'/poles/' + pole._id} className="dc-poles">
                            <PoleCard name={pole.title}className="away"/>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }

    const Away = () => {
        fetch("http://localhost:3001/pole?p=0",{mode: 'cors'})
            .then(res => {
                return res.json()
            })
            .then(data => {
                setPoles(data)
            })
            .catch(err => console.log(err))
            console.log(poles)
        return (
            <div className="away-div">
                {poles.map((pole) => (
                    <div key={pole._id}>
                        <Link to={'/poles/' + pole._id} className="dc-poles">
                            <PoleCard name={pole.title} className="away"/>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }

    return ( 
        <div className='poles'>
            <meta name='description' content="Main Page For Poles"/>
            <div className='search'>
                    <PoleSearch formHandler={formHandler}/> 
            </div>
            <div className='container'>
                {submitted ? Exists(title,subject) : Away()} 
                <PrevPage onSubmit={onClick1}/>
                <NextPage onSubmit={onClick2}/>
            </div>            
        </div>
     );
}
 
export default Poles;