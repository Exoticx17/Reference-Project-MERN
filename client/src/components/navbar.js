import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css'
import { useCookies } from 'react-cookie';


const Navbar = () => {

    const [data,setData] = useState([])
    const [cookie,setCookie] = useCookies()
    const jwt = cookie.jwt;

    const clickHandler = async() => {
        try {
            
            fetch('http://localhost:3001/user/logout',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                redirect: 'follow',
                credentials: 'include'
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            })
            .then(() => {
                window.setTimeout(() => {
                    window.location.assign('/login')
                },500)
            })
            console.log(data)

        } catch (err) {
            console.log(err)
        }
    }

    return ( 
        <div className='nav'>
            <Link to="/" className={jwt ? 'chome': 'home-link'}> Home</Link>
            <Link to="/blogs" className={jwt ? 'cblogs' : 'blogs-page'}>Blogs</Link>
            <Link to="/database" className={jwt ? 'cdata' : 'data-page'}>Data</Link>
            <Link to="/login" className={jwt ? 'clogin' : 'login-page'}>Login</Link>
            <Link to="/signup" className={jwt ? 'csignup' : 'signup-page'}> Signup</Link>
            <button className={jwt ? 'clogout': 'logout'} onClick={clickHandler}>Logout</button>
        </div>
     );
}
 
export default Navbar;