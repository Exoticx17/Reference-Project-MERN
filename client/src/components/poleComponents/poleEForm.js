import React from 'react';
import '../../stylesheets/poleEForm.css'

const PoleEForm = (props) => {
    return (  
        <div className='container'>
            <form onSubmit={props.formHandler} className='form'>
                <input type="text" name="eid" className='id' placeholder='ID'  autoComplete="off"/>
                <input type="text" name="etitle" className="title" placeholder="Title" autoComplete="off"/>
                <input type="text" name="eauthor" className="author" placeholder="Author" autoComplete="off"/>
                <select name="esubject" className='subjecte'>
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
                <input type="submit" className="esubmit" />
            </form>
        </div>
    );
}
 
export default PoleEForm;