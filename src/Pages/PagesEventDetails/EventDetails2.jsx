import React from 'react';
import EventDetailsHeader from '../../Components/EventDetailsHeader/EventDetailsHeader';
import './EventDetails2.css';

const EventDetails2 = () => {
    return (
        <>
            <EventDetailsHeader title={'LA PERLA JUBILÄUM'} image={'/events-images/events-image-2.webp'}/>   
            <section className="eventDetails-main-perla">
                <section className="eventDetails-main-info-perla">
                    <h2>15 JAHRE LA PERLA</h2>
                    <p>La Perla was opened 15 years ago in the atmospheric vaulted cellar next to the River Aare. Since then, we have strived every day to offer our guests an unforgettable culinary experience.</p>                    
                    <p>We recently celebrated our 15th anniversary together with our valued guests. We looked back over the last few years in a relaxed atmosphere with delicious food and drinks. We are proud of the consistently high quality that we offer at La Perla and look forward to many more years in which we can spoil our guests with high-quality culinary delights.</p>                    
                </section>
                <aside className='eventDetails-main-perla-aside'>                    
                    <img src="/memories/memories-1.webp" alt="image about food" className="eventDetails-main-perla-aside-img" />
                    <img src="/memories/memories-2.webp" alt="image about food" className="eventDetails-main-perla-aside-img" />
                    <img src="/memories/memories-3.webp" alt="image about food" className="eventDetails-main-perla-aside-img" />
                    <img src="/memories/memories-4.webp" alt="image about food" className="eventDetails-main-perla-aside-img" />
                    <img src="/memories/memories-5.webp" alt="image about food" className="eventDetails-main-perla-aside-img" />
                    <img src="/memories/memories-6.webp" alt="image about food" className="eventDetails-main-perla-aside-img" />
                    <img src="/memories/memories-7.webp" alt="image about food" className="eventDetails-main-perla-aside-img" />
                    <img src="/memories/memories-8.webp" alt="image about food" className="eventDetails-main-perla-aside-img" />
                    <img src="/memories/memories-9.webp" alt="image about food" className="eventDetails-main-perla-aside-img" />
                    <img src="/memories/memories-10.webp" alt="image about food" className="eventDetails-main-perla-aside-img" />
                    <img src="/memories/memories-11.webp" alt="image about food" className="eventDetails-main-perla-aside-img" />
                    <img src="/memories/memories-12.webp" alt="image about food" className="eventDetails-main-perla-aside-img" />
                    <img src="/memories/memories-13.webp" alt="image about food" className="eventDetails-main-perla-aside-img" />
                    <img src="/memories/memories-14.webp" alt="image about food" className="eventDetails-main-perla-aside-img" />
                    <img src="/memories/memories-15.webp" alt="image about food" className="eventDetails-main-perla-aside-img" />
                    <img src="/memories/memories-16.webp" alt="image about food" className="eventDetails-main-perla-aside-img" />
                </aside>
            </section>

        </>
    );
};

export default EventDetails2;