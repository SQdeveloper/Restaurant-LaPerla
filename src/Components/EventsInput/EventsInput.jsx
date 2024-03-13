import React from 'react';
import './EventsInput.css';

const EventsInput = ({textPlaceHolder}) => {
    return (
        <input name='input' className='events-input' type="text" placeholder={textPlaceHolder}/>
    );
};

export default EventsInput;