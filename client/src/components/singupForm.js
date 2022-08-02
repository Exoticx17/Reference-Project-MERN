import React from 'react';
import '../stylesheets/signup.css'

const SignupForm = (props) => {
    return ( 
        <div className='signup'>
            <form onSubmit={props.formHandler} className='sform'>
                <h2>Sign up</h2>
                <label htmlFor="email" className='el'>Email: </label>
                <input type="text" name="email" className="emaill" required placeholder='Email' autocomplete="off"/>
                <div className="email-error">{props.eerror}</div>
                <label htmlFor="password" className='pl'>Password: </label>
                <input type="password" name="password" className="password" required placeholder='Password' autocomplete="off"/>
                <div className="password-error">{props.perror}</div>
                <input type="submit" className='submit' value='Sign Up'/>
             </form>
        </div>
     );
}
 
export default SignupForm;