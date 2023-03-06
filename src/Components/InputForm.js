import React, { useState } from 'react';

// functional component
function InputForm(props) {

    /**
     *  state Hook
     *      1. variable for state
     *      2. state setter method to change state
     *      3. initial value of ''
     */

    // state for city
    const [ city, setCity ] = useState('');

    // state for state code (ex: GA, TX, CA)
    const [stateCode, setStateCode] = useState('');

    // state for country code: (scope of project version for United States only) preset to US 
    // *** this value won't change
    const [countryCode, setCountryCode] = useState('US');

    // return HTML(JSX)
    return (
        <div id='form'>
            <div>
                <input type='text' value={city}/>
            </div>
            <div>
                <input  type='text' value={stateCode} />
            </div>
            <div>
                <input type='text' value={countryCode} />
            </div>
            <button type='submit'>Submit</button>
        </div>
    );
}


export default InputForm;

