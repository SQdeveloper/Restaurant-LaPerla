import React from 'react';
import './EventDetailsHeader.css';

const EventDetailsHeader = ({title, image}) => {
    return (
        <section className='header-eventDetails'>
            <span className="subtitle">event</span>
            <h1 className='header-eventDetails-title'>{title}</h1>
            <img className='header-eventDetails-img' src={image} alt="image about event" />
        </section>
    );
};

export default EventDetailsHeader;