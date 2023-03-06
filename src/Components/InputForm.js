import React, { useState } from 'react';

// functional component
function InputForm(props) {

    // destructure props
    const { fetchData } = props;

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

    // onChange event handler for input
    const changeInput = ({target}) => {

        // new value
        let newText = target.value;

        // change the appropriate state-property
        (target.name === 'city') ? (setCity(newText)) : (setStateCode(newText));
    };

    // return HTML(JSX)
    return (
        <div id='form'>
            <div>
                <input type='text' name='city' value={city} onChange={changeInput}/>
            </div>
            <div>
                <input  type='text' name='stateCode' value={stateCode} onChange={changeInput} />
            </div>
            <div>
                <input type='text' name='countryCode' value={countryCode} readOnly />
            </div>
            <button type='submit' onClick={() => fetchData(city, stateCode, countryCode)}>Submit</button>
        </div>
    );
}


export default InputForm;

