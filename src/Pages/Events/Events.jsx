import React from 'react';
import EventBox from '../../Components/EventBox/EventBox';
import './Events.css';

const Events = () => {
    const events = [
        {
            title: 'wine & dine',
            date: 'Freitag, 06.10.2023',
            paragraph: 'Enjoy the excellent wine pairing with Villanoviana.',
            image: '/events-images/events-image-1.webp'
        },
        {
            title: 'La Perla Jubiläum',
            date: '',
            paragraph: 'We recently celebrated our 15th anniversary together with our valued guests.',
            image: '/events-images/events-image-2.webp'
        },
        {
            title: 'wine & dine',
            date: 'Freitag, 29.09.2023 ',
            paragraph: "Discover Dieter Meier's world of Argentinian wines",
            image: '/events-images/events-image-3.webp'
        },
        {
            title: 'wine & tapas',
            date: 'Freitag, 29.09.2023 ',
            paragraph: "Enjoy exquisite wines and delicious tapas in a relaxed atmosphere",
            image: '/events-images/events-image-4.webp'
        },
        {
            title: 'Wine and Dine Bindella - Tenuta Vallocaia',
            date: 'On Friday, April 28, 2023 ',
            paragraph: "",
            image: '/events-images/events-image-5.webp'
        },
        {
            title: 'Wine Dine Casa Del Vino',
            date: '',
            paragraph: "A culinary wine trip to Spain. On Friday, February 24, 2023.",
            image: '/events-images/events-image-6.webp'
        }
    ]

    return (
        <section className='events'>
            <span className='subtitle'>la perla</span>
            <h1 className='events-title'>events</h1>
            <div className="events-group-grid">                
                {events.map((event,index)=>(
                    <EventBox key={index} event={event}/>
                ))}
            </div>
        </section>
    );
};

export default Events;