import React from 'react';
import { Link } from 'react-router-dom';
import './EventBox.css';

const EventBox = ({event}) => {
    return (
        <Link to={`/events/details`} className='events-box' href="">
            <div className="events-box-Bgimage">
                <img src={event.image} alt="img-bg" />
            </div>
            <div className="events-box-text">
                <h2 className='events-box-title'>{event.title}</h2>
                <div className="events-box-info">
                    <span className="events-box-date">{event.date}</span>
                    <p className='events-box-paragraph'>{event.paragraph}</p>
                </div>
            </div>
        </Link>
    );
};

export default EventBox;