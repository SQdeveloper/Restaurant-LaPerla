import React from 'react';
import EventDetailsHeader from '../../Components/EventDetailsHeader/EventDetailsHeader';
import EventsForm from '../../Components/EventsForm/EventsForm';
import './EventDetails5.css';

const EventDetails5 = () => {
    return (
        <>
            <EventDetailsHeader title={'WINE & DINE'} image={'/events-images/events-image-5.webp'}/>   
            <section className="eventDetails-main-bindella">
                <section className="eventDetails-main-bindella-img">
                    <a className='eventDetails-main-bindella-ancle' href="https://www.laperla-aarburg.ch/wp-content/uploads/2023/04/WINE-UND-DINE-BINDELLA-%E2%80%93-TENUTA-VALLOCAIA.jpg" target='_blank'>
                        <img src='https://www.laperla-aarburg.ch/wp-content/uploads/2023/04/WINE-UND-DINE-BINDELLA-%E2%80%93-TENUTA-VALLOCAIA-723x1024.jpg' alt="bg-restaurant" />
                    </a>
                </section>
                <EventsForm/>
            </section>

        </>
    );
};

export default EventDetails5;