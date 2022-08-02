import React from 'react';
import '../../stylesheets/postForm.css'

const PForm = (props) => {
    return ( 
        <div className='container'>
            <form onSubmit={props.formHandler} className='form'>
                <input type="text" name="titley" className="title" placeholder="Title" autoComplete="off"/>
                <input type="text" name="authory" className="author" placeholder="Author" autoComplete="off"/>
                <input type="text" name="snippety" className="snippet" placeholder="Snippet" autoComplete="off"/>
                <input type="text" name="bodyy" className="body" placeholder="Body" autoComplete="off"/>
                <select name="categoryy" className='pcategory'>
                    <option value="" defaultValue className='s-value'>Category</option>
                    <option value="Science" className="s-value">Science</option> 
                    <option value="Technology" className="s-value">Technology</option>
                    <option value="Business" className="s-value">Business</option>
                    <option value="Sports" className="s-value">Sports</option>
                    <option value="Food" className="s-value">Food</option>
                    <option value="Travel" className="s-value">Travel</option>
                    <option value="Politics" className="s-value">Politics</option>
                    <option value="Entertainment" className="s-value">Entertainment</option>
                    <option value="History" className="s-value">History</option>
                    <option value="News" className="s-value">News</option>
                </select>
                <input type="submit" className="psubmit" />
                <h4 className="data4">Blogs</h4>
            </form>
        </div>
     );
}
 
export default PForm;
