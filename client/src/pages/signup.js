import React,{useState} from 'react';
import SignupForm from '../components/singupForm';


const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [eerror, setEerror] = useState('')
    const [perror, setPerror] = useState('')
    const [data,setData] = useState([])

    const formHandler = async (e) => {
        e.preventDefault()

        //Reset Errors
        setEerror('');
        setPerror('');

        //Set States
        setEmail(e.target.email.value)
        setPassword(e.target.password.value)
        console.log(email)
        console.log(password)
        Signup(email,password)

    }      
    const Signup = async(email,password) => {
        try {
            fetch('http://localhost:3001/user/signup', {
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
            .catch(err => {
                console.log(err)
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
        <SignupForm formHandler={formHandler} eerror={eerror} perror={perror}/>
     );
}
 
export default Signup;