import React from 'react';
import '../../stylesheets/storyDForm.css'

const StoryDForm = (props) => {
    return ( 
        <div className='container'>
            <form onSubmit={props.formHandler} className='dform'>
                <input type="text" name="delete" className='delete' placeholder='Delete' autoComplete="off"/>
                <input type="submit" className='dssubmit' value="Delete"/>
            </form>
        </div>
     );
}
 
export default StoryDForm;