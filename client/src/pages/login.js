import React,{useState} from 'react';
import LoginForm from '../components/loginForm';


const Login = () => {

    const [eerror,setEerror] = useState('')
    const [perror,setPerror] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [data,setData] = useState([])

    const lformHandler = (e) => {
        e.preventDefault()

        //Reset Errors
        setEerror('');
        setPerror('');

        //Set States
        setEmail(e.target.email.value)
        setPassword(e.target.password.value)
        console.log(email,password)
        Login(email,password)
    }


    const Login = async (email,password) => {
        try {
            fetch('http://localhost:3001/user/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                redirect: 'follow',
                credentials: 'include',
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            })
            .catch(err => {
                console.log(err)
            })
            if(data.errors) {
                setEerror(data.errors.email)
                setPerror(data.errors.password)
            }
            if(data.user) {
                window.setTimeout(() => {
                    window.location.assign('/')
                },500)
                
            }
        } catch (err) {
            console.log(err)
        }

    }
    return ( 
        <div>
            <LoginForm formHandler={lformHandler} emerror={eerror} paerror={perror}/>
       </div>
     );
}
 
export default Login;