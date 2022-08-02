import React from 'react';
import '../../stylesheets/storyPForm.css'

const StoryPForm = (props) => {
    return ( 
        <div className='container'>
            <form onSubmit={props.formHandler} className='form'>
                <input type="text" name="title" className="title" placeholder="Title" autoComplete="off"/>
                <input type="text" name="author" className="author" placeholder="Author" autoComplete="off"/>
                <input type="text" name="snippet" className="snippet" placeholder="Snippet" autoComplete="off"/>
                <input type="text" name="body" className="body" placeholder="Body" autoComplete="off"/>
                <select name="genre" className='pcategory'>
                    <option value="" defaultValue className='s-value'>Genres</option>
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
                <h4 className="data4">Stories</h4>
            </form>
        </div>
     );
}
 
export default StoryPForm;
