import React from 'react';
import EventDetailsHeader from '../../Components/EventDetailsHeader/EventDetailsHeader';
import EventsForm from '../../Components/EventsForm/EventsForm';
import './EventDetails4.css';

const EventDetails4 = () => {
    return (
        <>
            <EventDetailsHeader title={'WINE & DINE'} image={'/events-images/events-image-4.webp'}/>   
            <section className="eventDetails-main-tapas">
                <section className="eventDetails-main-tapas-img">
                    <img src='/events-images/events-image-4.webp' alt="bg-restaurant" />
                </section>
                <EventsForm/>
            </section>

        </>
    );
};

export default EventDetails4;