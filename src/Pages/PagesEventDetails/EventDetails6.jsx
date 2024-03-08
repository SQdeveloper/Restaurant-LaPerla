import React from 'react';
import EventDetailsHeader from '../../Components/EventDetailsHeader/EventDetailsHeader';import EventsForm from '../../Components/EventsForm/EventsForm';
import Button from '../../Components/Button/Button';
import './EventDetails6.css';

const EventDetails5 = () => {
    return (
        <>
            <EventDetailsHeader title={'WINE & DINE'} image={'/events-images/events-image-5.webp'}/>   
            <section className="eventDetails-main-last">                
                <span className="subtitle">DINNER MIT WEINBEGLEITUNG</span>
                <p>Our Wine & Dine is a culinary highlight that you should not miss. We indulge your senses with a refined menu and a matching wine pairing. Our dishes are carefully selected and prepared with love. Each course is an experience in itself and is rounded off with the right wine. Enjoy good conversation and excellent cuisine in a warm atmosphere. Don't hesitate and reserve your place today!</p>
                <div className="eventDetails-main-last-group-images">
                    <img src="https://www.laperla-aarburg.ch/wp-content/uploads/2023/04/WINE-UND-DINE-BINDELLA-%E2%80%93-TENUTA-VALLOCAIA.jpg" alt="menu" />
                    <img src="https://www.laperla-aarburg.ch/wp-content/uploads/2023/03/DSC08632-scaled12_11zon-768x512.jpg" alt="chef" />
                </div>

                <h2>ONLY THE BEST FOR YOU</h2>
                <p>We are convinced that a good glass of wine is part of an all-round successful dinner. To give you a unique taste experience at our events, we only work with the best wineries in the region. Together we will find the ideal wine accompaniment for the evening's menu so that you can enjoy a harmonious combination of delicious food and exquisite wines. Get to know new flavors and the diversity of regional wine culture.</p>
                <Button text='events'/>
            </section>

        </>
    );
};

export default EventDetails5;