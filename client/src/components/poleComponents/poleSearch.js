import React from 'react';
import '../../stylesheets/poleSearch.css'

const PoleSearch = (props) => {
    return ( 
        <div>
            <form onSubmit={props.formHandler} className="formm">
                <div className="search-box">
                    <input type="text" className='search' placeholder='Search' name='searchy' autocomplete="off"/>
                </div>
                <div className='subject-box'>
                    <select name="subjecty" className='subjectc'>
                        <option value="" defaultValue className='s-value'>Subject</option>
                        <option value="Science" className="s-value">Science</option>
                        <option value="Technology" className="s-value">Technology</option>
                        <option value="Math" className="s-value">Math</option>
                        <option value="English" className="s-value">English</option>
                        <option value="Writing" className="s-value">Writing</option>
                        <option value="Geography" className="s-value">Geography</option>
                        <option value="P.E" className="s-value">P.E</option>
                        <option value="Art" className="s-value">Art</option>
                        <option value="History" className="s-value">History</option>
                    </select>
                </div>
                <input type="submit" className="submitpp" />
            </form> 
        </div>
     );
}

export default PoleSearch;