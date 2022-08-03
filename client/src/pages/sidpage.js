import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import '../stylesheets/pidpage.css'


const PIDPage = () => {

    let {id} = useParams()
    

    const RenderBarC1 = () => {
    const [stories0,setStories0] = useState([]);
    const [stories,setStories] = useState([]);
    const [stories2,setStories2] = useState([]);
    const [stories3,setStories3] = useState([]);
    const [stories4,setStories4] = useState([]);



    //By Id Fetch    
    fetch(`http://localhost:3001/story/one?id=${id}` ,{mode: 'cors'})
    .then(res => {
        return res.json()
    })
    .then(data => {
        setStories0(data)
        console.log(stories0)
    })
    const genre = stories0.genre
    //Type Of All Fetch
    fetch('http://localhost:3001/story/genre?type=all' ,{mode: 'cors'})
        .then(res => {
            return res.json()
        })
        .then(data => {
            setStories(data)
            console.log(stories)
        })
        console.log(stories.business)
        const data1 = [
            {
                Genre: 'Science',
                Amount: stories.science
            },
            {
                Genre: 'Technology',
                Amount: stories.technology
            }, 
            {
                Genre: 'Business',
                Amount: stories.business
            }, 
            {
                Genre: 'Sports',
                Amount: stories.sports
            }, 
            {
                Genre: 'Food',
                Amount: stories.food
            }, 
            {
                Genre: 'Travel',
                Amount: stories.travel
            },
            {
                Genre: 'Politics',
                Amount: stories.politics
            }, 
            {
                Genre: 'Entertainment',
                Amount: stories.entertainment
            }, 
            {
                Genre: 'History',
                Amount: stories.history
            }, 
            {
                Genre: 'News',
                Amount: stories.news
            }, 
        ]

        //Type Of One Fetch
        fetch(`http://localhost:3001/story/genre?id=${id}&type=one`,{mode: 'cors'})
            .then(res => {
                return res.json()
            })
            .then(data => {
                setStories2(data)
                console.log(stories2)
            })
            const data2 = [
                {
                    Genre: 'Science',
                    Amount: stories2.science
                },
                {
                    Genre: 'Technology',
                    Amount: stories2.technology
                }, 
                {
                    Genre: 'Business',
                    Amount: stories2.business
                }, 
                {
                    Genre: 'Sports',
                    Amount: stories2.sports
                }, 
                {
                    Genre: 'Food',
                    Amount: stories2.food
                }, 
                {
                    Genre: 'Travel',
                    Amount: stories2.travel
                },
                {
                    Genre: 'Politics',
                    Amount: stories2.politics
                }, 
                {
                    Genre: 'Entertainment',
                    Amount: stories2.entertainment
                }, 
                {
                    Genre: 'History',
                    Amount: stories2.history
                }, 
                {
                    Genre: 'News',
                    Amount: stories2.news
                }, 
            ]
            
            //Type Of Only Fetch
            fetch(`http://localhost:3001/story/genre?id=${id}&type=only`,{mode: 'cors'})
            .then(res => {
                return res.json()
            })
            .then(data => {
                setStories3(data)
                console.log(stories3)
            })
            const data3 = [
                {
                    Genre: 'Science',
                    Amount: stories3.science
                },
                {
                    Genre: 'Technology',
                    Amount: stories3.technology
                }, 
                {
                    Genre: 'Business',
                    Amount: stories3.business
                }, 
                {
                    Genre: 'Sports',
                    Amount: stories3.sports
                }, 
                {
                    Genre: 'Food',
                    Amount: stories3.food
                }, 
                {
                    Genre: 'Travel',
                    Amount: stories3.travel
                },
                {
                    Genre: 'Politics',
                    Amount: stories3.politics
                }, 
                {
                    Genre: 'Entertainment',
                    Amount: stories3.entertainment
                }, 
                {
                    Genre: 'History',
                    Amount: stories3.history
                }, 
                {
                    Genre: 'News',
                    Amount: stories3.news
                }, 
            ]
            //Type of Both Fetch
            fetch(`http://localhost:3001/story/genre?genre=${genre}&type=both`, {mode: 'cors'})
            .then(res => {
                return res.json()
            })
            .then(data => {
                setStories4(data)
                console.log(stories4)
            })
            const data4 = [
                {
                    Genre: 'Science',
                    Amount: stories4.science
                },
                {
                    Genre: 'Technology',
                    Amount: stories4.technology
                }, 
                {
                    Genre: 'Business',
                    Amount: stories4.business
                }, 
                {
                    Genre: 'Sports',
                    Amount: stories4.sports
                }, 
                {
                    Genre: 'Food',
                    Amount: stories4.food
                }, 
                {
                    Genre: 'Travel',
                    Amount: stories4.travel
                },
                {
                    Genre: 'Politics',
                    Amount: stories4.politics
                }, 
                {
                    Genre: 'Entertainment',
                    Amount: stories4.entertainment
                }, 
                {
                    Genre: 'History',
                    Amount: stories4.history
                }, 
                {
                    Genre: 'News',
                    Amount: stories4.news
                },
            ]
        return(
            <div className='barchart1'>
                <div className='zero'>
                    <h3>{stories0.title}</h3>
                    <h4>{stories0.author}</h4>
                    <h5>{stories0.snippet}</h5>
                    <h6>{stories0.genre}</h6>
                    <p>{stories0.body}</p>
                </div>
                <div className='one'>
                    <label className='label1'>All Types of Genres</label>
                    <BarChart width={850} height={450} data={data1} className='barone'> 
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Genre"/>
                        <YAxis domain={[0,10]}/>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Amount" stackId="a" fill="#4b78b8" />
                    </BarChart>
                </div>
                <div className='two'>
                    <label className='label2'>Without This Story</label>
                    <BarChart width={850} height={450} data={data2} className='bartwo'> 
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Genre"/>
                        <YAxis domain={[0,10]}/>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Amount" stackId="a" fill="#4b78b8" />
                    </BarChart>
                </div>
                <div className='three'>
                    <label className='label3'>With Only This Story</label>
                    <BarChart width={850} height={450} data={data3} className="barthree"> 
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Genre"/>
                        <YAxis domain={[0,10]}/>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Amount" stackId="a" fill="#4b78b8" />
                    </BarChart>
                </div>
                <div className='four'>
                    <label className='label4'>With Out This Story's Genre</label>
                    <BarChart width={850} height={450} data={data4} className='barfour'> 
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Genre"/>
                        <YAxis domain={[0,10]}/>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Amount" stackId="a" fill="#4b78b8" />
                    </BarChart>
                </div>
            </div>
        )
    }

    return ( 
    <div className='container'>
        <meta name='description' content="Secondary Specific Page For Stories"/>
        <RenderBarC1 />
    </div>  
    );
}
 
export default PIDPage;
