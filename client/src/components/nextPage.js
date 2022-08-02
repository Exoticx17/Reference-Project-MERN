import React from 'react';
import '../stylesheets/page.css'

const NextPage = (props) => {
    return ( 
        <div className='container'>
            <form onSubmit={props.onSubmit}>
                <input type="submit" value="Next Page" className='input' id="next"/>
            </form>
        </div>
     );
}
 
export default NextPage;