import React from 'react';
import '../../stylesheets/polePForm.css'

const PolePForm = (props) => {
    return ( 
        <div className='container'>
            <form onSubmit={props.formHandler} className='form'>
                <input type="text" name="titley" className="title" placeholder="Title" autoComplete="off"/>
                <input type="text" name="authory" className="author" placeholder="Author" autoComplete="off"/>
                <select name="subjecty" className='csubject'>
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
                <input type="submit" className="submitp" />
                <h4 className="poleh4">Poles</h4>
            </form>
        </div>
     );
}
 
export default PolePForm;
