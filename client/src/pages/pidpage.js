import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import '../stylesheets/sidpage.css'


const SIDPage = () => {

    let {id} = useParams()
    

    const RenderBarC1 = () => {
    const [poles0,setPoles0] = useState([]);
    const [poles,setPoles] = useState([]);
    const [poles2,setPoles02] = useState([]);
    const [poles3,setPoles03] = useState([]);
    const [poles4,setPoles04] = useState([]);



    //By Id Fetch    
    fetch(`http://localhost:3001/pole/one?id=${id}` ,{mode: 'cors'})
    .then(res => {
        return res.json()
    })
    .then(data => {
        setPoles0(data)
        console.log(poles0)
    })
    const Subject = poles0.Subject
    //Type Of All Fetch
    fetch('http://localhost:3001/pole/subject?type=all' ,{mode: 'cors'})
        .then(res => {
            return res.json()
        })
        .then(data => {
            setPoles(data)
            console.log(poles)
        })
        const data1 = [
            {
                Subject: 'Science',
                Amount: poles.science
            },
            {
                Subject: 'Technology',
                Amount: poles.technology
            }, 
            {
                Subject: 'Math',
                Amount: poles.Math
            }, 
            {
                Subject: 'English',
                Amount: poles.English
            }, 
            {
                Subject: 'Writing',
                Amount: poles.Writing
            }, 
            {
                Subject: 'Geography',
                Amount: poles.Geography
            },
            {
                Subject: 'Art',
                Amount: poles.Art
            }, 
            {
                Subject: 'PE',
                Amount: poles.PE
            }, 
            {
                Subject: 'History',
                Amount: poles.history
            }, 
        ]

        //Type Of One Fetch
        fetch(`http://localhost:3001/pole/subject?id=${id}&type=one`,{mode: 'cors'})
            .then(res => {
                return res.json()
            })
            .then(data => {
                setPoles02(data)
                console.log(poles2)
            })
            const data2 = [
                {
                    Subject: 'Science',
                    Amount: poles2.science
                },
                {
                    Subject: 'Technology',
                    Amount: poles2.technology
                }, 
                {
                    Subject: 'Math',
                    Amount: poles2.Math
                }, 
                {
                    Subject: 'English',
                    Amount: poles2.English
                }, 
                {
                    Subject: 'Writing',
                    Amount: poles2.Writing
                }, 
                {
                    Subject: 'Geography',
                    Amount: poles2.Geography
                },
                {
                    Subject: 'Art',
                    Amount: poles2.Art
                }, 
                {
                    Subject: 'PE',
                    Amount: poles2.PE
                }, 
                {
                    Subject: 'History',
                    Amount: poles2.history
                }, 
            ]
            
            //Type Of Only Fetch
            fetch(`http://localhost:3001/pole/subject?id=${id}&type=only`,{mode: 'cors'})
            .then(res => {
                return res.json()
            })
            .then(data => {
                setPoles03(data)
                console.log(poles3)
            })
            const data3 = [
                {
                    Subject: 'Science',
                    Amount: poles3.science
                },
                {
                    Subject: 'Technology',
                    Amount: poles3.technology
                }, 
                {
                    Subject: 'Math',
                    Amount: poles3.Math
                }, 
                {
                    Subject: 'English',
                    Amount: poles3.English
                }, 
                {
                    Subject: 'Writing',
                    Amount: poles3.Writing
                }, 
                {
                    Subject: 'Geography',
                    Amount: poles3.Geography
                },
                {
                    Subject: 'Art',
                    Amount: poles3.Art
                }, 
                {
                    Subject: 'PE',
                    Amount: poles3.PE
                }, 
                {
                    Subject: 'History',
                    Amount: poles3.history
                }, 
            ]
            //Type of Both Fetch
            fetch(`http://localhost:3001/pole/subject?subject=${Subject}&type=both`, {mode: 'cors'})
            .then(res => {
                return res.json()
            })
            .then(data => {
                setPoles04(data)
                console.log(poles4)
            })
            const data4 = [
                {
                    Subject: 'Science',
                    Amount: poles4.science
                },
                {
                    Subject: 'Technology',
                    Amount: poles4.technology
                }, 
                {
                    Subject: 'Math',
                    Amount: poles4.Math
                }, 
                {
                    Subject: 'English',
                    Amount: poles4.English
                }, 
                {
                    Subject: 'Writing',
                    Amount: poles4.Writing
                }, 
                {
                    Subject: 'Geography',
                    Amount: poles4.Geography
                },
                {
                    Subject: 'Art',
                    Amount: poles4.Art
                }, 
                {
                    Subject: 'PE',
                    Amount: poles4.PE
                }, 
                {
                    Subject: 'History',
                    Amount: poles4.history
                }, 
            ]
        return(
            <div className='barchart1'>
                <div className='one'>
                    <label className='label1'>All Types of Subjects</label>
                    <BarChart width={850} height={450} data={data1} className='barone'> 
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Subject"/>
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
                        <XAxis dataKey="Subject"/>
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
                        <XAxis dataKey="Subject"/>
                        <YAxis domain={[0,10]}/>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Amount" stackId="a" fill="#4b78b8" />
                    </BarChart>
                </div>
                <div className='four'>
                    <label className='label4'>With Out This Story's Subject</label>
                    <BarChart width={850} height={450} data={data4} className='barfour'> 
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Subject"/>
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
        <meta name='description' content="Secondary Specfic Page For Poles"/>
        <RenderBarC1 />
    </div>  
    );
}
 
export default SIDPage;
