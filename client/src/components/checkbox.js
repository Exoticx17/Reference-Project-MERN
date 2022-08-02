import React from 'react';
import '../stylesheets/checkboxes.css'
const CheckBoxes = (props) => {
    return ( 
            <div className='checkboxes'>
                <input type="checkbox" id="science" name="genre" value="Science"/>
                    <label htmlFor="science" className='c-value'>Science</label>
                <input type="checkbox" id="technology" name="genre" value="Technology"/>
                    <label htmlFor="technology" className='c-value'>Technology</label><br/>
                <input type="checkbox" id="business" name="genre" value="Business"/>
                    <label htmlFor="business" className='c-value'>Business</label>
                <input type="checkbox" id="sports" name="genre" value="Sports"/>
                    <label htmlFor="sports" className='c-value'>Sports</label><br/>
                <input type="checkbox" id="travel" name="genre" value="Travel"/>
                    <label htmlFor="travel" className='c-value'>Travel</label>
                <input type="checkbox" id="politics" name="genre" value="Politics"/>
                    <label htmlFor="politics" className='c-value'>Politics</label><br/>
                <input type="checkbox" id="food" name="genre" value="Food"/>
                    <label htmlFor="food" className='c-value'>Food</label>
                <input type="checkbox" id="entertainment" name="genre" value="Entertainment"/>
                    <label htmlFor="entertainment" className='c-value'>Entertainment</label><br/>
                <input type="checkbox" id="history" name="genre" value="History"/>
                    <label htmlFor="history" className='c-value'>History</label>
                <input type="checkbox" id="news" name="genre" value="News"/>
                    <label htmlFor="news" className='c-value'>News</label>
            </div>
     );
}
 
export default CheckBoxes;