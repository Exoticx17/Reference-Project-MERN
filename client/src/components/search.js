import React from 'react';
import '../stylesheets/search.css'

const Search = (props) => {
    return ( 
        <div>
            <form onSubmit={props.formHandler} className="formm">
                <div className="search-box">
                    <input type="text" className='search' placeholder='Search' name='searchy' autocomplete="off"/>
                </div>
                <div className='category-box'>
                    <select name="categoryy" className='ccategory'>
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
                    </select>
                </div>
                <input type="submit" className="ssubmit" />
            </form> 
        </div>
     );
}

export default Search;