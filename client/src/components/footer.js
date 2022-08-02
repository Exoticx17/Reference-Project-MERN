import React from 'react';
import '../stylesheets/footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {



    return ( 
        <div>
            <div className='foot'>
                <Link to="/stories" className="jobs">Story</Link>
                <Link to="/sdatabase" className="stocks">SData</Link>
                <Link to="/poles" className="videos">Poles</Link>
                <Link to="/pdatabase" className="help">PData</Link>
                <Link to="/login" className="subs">Help</Link>
            </div>
        </div>
     );
}
 
export default Footer;