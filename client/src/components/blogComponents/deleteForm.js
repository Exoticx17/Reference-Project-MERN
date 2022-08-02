import React from 'react';
import '../../stylesheets/deleteForm.css'

const DForm = (props) => {
    return ( 
        <div className='container'>
            <form onSubmit={props.formHandler} className='dform'>
                <input type="text" name="delete" className='delete' placeholder='Delete' autoComplete="off"/>
                <input type="submit" className='dfsubmit' value="Delete"/>
            </form>
        </div>
     );
}
 
export default DForm;