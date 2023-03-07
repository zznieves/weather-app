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
                <select name='stateCode' onChange={changeInput}>
                    <option value=''>Please select a state......</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
</select>
            </div>
            <div>
                <input type='text' name='countryCode' value={countryCode} readOnly />
            </div>
            <button type='submit' onClick={() => fetchData(city, stateCode, countryCode)}>Submit</button>
            <p>{stateCode}</p>
        </div>
    );
}


export default InputForm;

