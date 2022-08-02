import React from 'react';
import '../../stylesheets/poleCard.css'

const PoleCard = (props) => {
    return ( 
        <div className='contained'>
            <img src="/blog-pic3.jpg" alt="Work and Paradise" className='picture'/>
            <div className='text'>
                <h2 className='ttname'>{props.name}</h2>
            </div>
        </div>

     );
}
 
export default PoleCard;