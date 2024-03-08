import React from 'react';
import './EventsInput.css';

const EventsInput = ({textPlaceHolder}) => {
    return (
        <input className='events-input' type="text" placeholder={textPlaceHolder}/>
    );
};

export default EventsInput;