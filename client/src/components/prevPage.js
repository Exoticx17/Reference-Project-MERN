import React from 'react';
import '../stylesheets/page.css'

const PrevPage = (props) => {
    return ( 
        <div className='container'>
            <form onSubmit={props.onSubmit}>
                <input type="submit" value="Previous Page" className='input' id="prev"/>
            </form>
        </div>
     );
}
 
export default PrevPage;