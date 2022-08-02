import React from 'react';
import '../../stylesheets/poleDForm.css'

const PoleDForm = (props) => {
    return ( 
        <div className='container'>
            <form onSubmit={props.formHandler} className='dform'>
                <input type="text" name="delete" className='delete' placeholder='Delete' autoComplete="off"/>
                <input type="submit" className='polesubmit' value="Delete"/>
            </form>
        </div>
     );
}
 
export default PoleDForm;