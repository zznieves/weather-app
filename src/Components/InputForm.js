import React from 'react';

// functional component
function InputForm(props) {

    // return HTML(JSX)
    return (
        <div id='form'>
            <div>
                <input type='text' />
            </div>
            <div>
                <input  type='text' />
            </div>
            <div>
                <input type='text' />
            </div>
            <button type='submit'>Submit</button>
        </div>
    );
}


export default InputForm;

