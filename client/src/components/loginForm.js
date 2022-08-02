import React from 'react';
import '../stylesheets/login.css'

const LoginForm = (props) => {
    return (  
    <div className='login'>
        <form onSubmit={props.formHandler} className='lform'>
            <h2>Login</h2>
            <div>
                <label htmlFor="email" className='efl'>Email: </label>
                <input type="text" name="email" className="emaili" required placeholder='Email' autocomplete="off"/>
            </div>
            <div className="emaill-error">{props.emerror}</div>
            <div>
                <label htmlFor="password" className='pfl'>Password: </label>
                <input type="password" name="password" className="passwordi" required placeholder='Password' autocomplete="off"/>
            </div>       
            <div className="passwordl-error">{props.paerror}</div>
                <input type="submit" className='lsubmit' value='Login'/>
        </form>
    </div> 
);
}
 
export default LoginForm;