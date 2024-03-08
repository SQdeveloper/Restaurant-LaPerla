import React from 'react';
import EventDetailsHeader from '../../Components/EventDetailsHeader/EventDetailsHeader';
import EventsForm from '../../Components/EventsForm/EventsForm';
import './EventDetails1.css';

const EventDetails1 = () => {
    return (
        <>
            <EventDetailsHeader title={'wine & dine'} image={'/events-images/events-image-1.webp'}/>   
            <section className="eventDetails-main">
                <section className="eventDetails-main-info">
                    <h2>A TASTE OF BOLGHERI</h2>
                    <p>Villanovana was born from the passion for good wine and the love for this corner of Tuscany, from the desire to cultivate our land while respecting nature and the environment. For this reason, we also use organic methods for the cultivation of crops such as the Bokashi technique, unique in Bolgheri, with natural compost treatment that improves the characteristics of the soil and makes the plants resistant to parasites. The Villanoviana Agricultural Company was founded in the heart of the Bolgheri DOC region, not far from the medieval village of Bolgheri. It extends over 6 hectares of vineyards where Merlot, Cabernet Franc, Cabernet Sauvignon, Petit Verdot, Vermentino and Viogner are cultivated. The proximity to the sea and the sunshine give the wines minerality with the acidity that characterizes the terroir from which they come."</p>
                    <aside className="eventDetails-main-info-subGroup">
                        <h3>Dinner mit Weinbegleitung</h3>
                        <p>A glass of wine contains sensations and emotions that reflect the expression of a territory and its producers.</p>
                    </aside>
                    <p>On 06.10.2023 from 19.00 you can taste excellent wines from the ancient village of Bolgheri in the restaurant La Perla to enjoy a moment of relaxation and get to know the products of VILLANOVIANA better. Places are limited, so it's worth booking early!</p>
                    <span>CHF 120.- pro Person</span>
                </section>
                <EventsForm/>
            </section>

        </>
    );
};

export default EventDetails1;