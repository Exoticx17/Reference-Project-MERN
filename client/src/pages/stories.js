import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import NextPage from '../components/nextPage';
import PrevPage from '../components/prevPage';
import Search from '../components/search';
import StoryCard from '../components/storyComponents/storyCard';
import '../stylesheets/stories.css';


const Stories = (props) => {

    const [cookie,setCookie] = useCookies()
    const jwt = cookie.jwt;


    useEffect(() => {
        if(!jwt){
            window.location.assign('/login')
        }
    })

    const [submitted,setSubmitted] = useState(false)
    const [name,setName] = useState('')
    const [genre,setgenre] = useState('')
    const [stories,setStories] = useState([])
    const [page,setPage] = useState(0)
    const [submitted1,setSubmitted1] = useState(false)

    const formHandler = e => {
        e.preventDefault()
        setSubmitted(true)
        setName(e.target.searchy.value)
        setgenre(e.target.categoryy.value)
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

    const Exists = (name,genre) => {
        if(submitted1){
            fetch(`http://localhost:3001/story?p=${page}`,{mode: 'cors'})
            .then(res => {
                return res.json()
            })
            .then(data => {
                setStories(data)
            })
            .catch(err => console.log(err))
            console.log(stories)
        }
        else if(!submitted1){
            if(name && !genre){
                //Norm Search
                fetch(`http://localhost:3001/story/search?p=0&title=${name}`,{mode: 'cors'})
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setStories(data)
                })
                .catch(err => console.log(err))
                console.log(stories)
            }
            else if(name && genre){
                //Both Search
                fetch(`http://localhost:3001/story/search?p=0&title=${name}&genre=${genre}`,{mode: 'cors'})
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setStories(data)
                })
                .catch(err => console.log(err))
                console.log(stories)
            }
            else if(!name && genre){
                //genre Search
                fetch(`http://localhost:3001/story/search?p=0&genre=${genre}`,{mode: 'cors'})
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setStories(data)
                })
                .catch(err => console.log(err))
                console.log(stories)
            }
    }

        return(
            <div className="exists-div">
               {stories.map((story) => (
                    <div key={story._id}>
                        <Link to={'/stories/' + story._id} className="dc-stories">
                            <StoryCard name={story.title} snippet={story.snippet} className="away"/>\
                        </Link>
                    </div>
                ))}
            </div>
        )
    }

    const Away = () => {
        fetch("http://localhost:3001/story?p=0",{mode: 'cors'})
            .then(res => {
                return res.json()
            })
            .then(data => {
                setStories(data)
            })
            .catch(err => console.log(err))
            console.log(stories)
        return (
            <div className="away-div">
                {stories.map((story) => (
                    <div key={story._id}>
                        <Link to={'/stories/' + story._id} className="dc-stories">
                            <StoryCard name={story.title} snippet={story.snippet} className="away"/>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }

    return ( 
        <div className='stories'>
            <div className='search'>
                    <Search formHandler={formHandler}/>
            </div>
            <div className='container'>
                {submitted ? Exists(name,genre) : Away()}
                <PrevPage onSubmit={onClick1}/>
                <NextPage onSubmit={onClick2}/>
            </div>            
        </div>
     );
}
 
export default Stories;