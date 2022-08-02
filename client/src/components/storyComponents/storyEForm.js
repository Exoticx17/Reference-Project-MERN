import React from 'react';
import '../../stylesheets/storyEForm.css'

const StoryEForm = (props) => {
    return (  
        <div className='container'>
            <form onSubmit={props.formHandler} className='form'>
                <input type="text" name="eid" className='id' placeholder='ID'  autoComplete="off"/>
                <input type="text" name="etitle" className="title" placeholder="Title" autoComplete="off"/>
                <input type="text" name="eauthor" className="author" placeholder="Author" autoComplete="off"/>
                <input type="text" name="esnippet" className="snippet" placeholder="Snippet" autoComplete="off"/>
                <input type="text" name="ebody" className="body" placeholder="Body" autoComplete="off"/>
                <select name="egenre" className='ecategory'>
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
                <input type="submit" className="esubmit" />
            </form>
        </div>
    );
}
 
export default StoryEForm;