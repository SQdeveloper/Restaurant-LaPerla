import React from 'react';
import HeaderSection from '../../Components/HeaderSection/HeaderSection';
import EventsForm from '../../Components/EventsForm/EventsForm';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section className='contactUs'>
            <HeaderSection subtitle={'contact'} firstPartTitle={'A CULINARY'} secondPartTitle={'ENJOY THE JOURNEY'} bgImage={'https://www.laperla-aarburg.ch/wp-content/uploads/2023/03/DSC00288-scaled.jpg'}/>
            <section className="contactUs-main">
                <div className="contactUs-info">
                    <ul>
                        <li>
                            <h2>TELEFON</h2>
                            <span>062 791 31 51</span>
                        </li>
                        <hr />
                        <li>
                            <h2>E-MAIL</h2>
                            <span>info@laperla-aarburg.ch</span>
                        </li>
                        <hr />
                        <li>
                            <h2>ADDRESS</h2>
                            <span>Landhausstrasse 17, 4663 Aarburg</span>
                        </li>
                        <hr />
                        <li>
                            <h2>OPENING HOURS</h2>
                            <div className="contactUs-info-hours">
                                <span>
                                    <strong>Montag:</strong>Geschlossen
                                </span>
                                <span>
                                    <strong>Dienstag – Freitag:</strong>11:00 – 14:00, 17:30 – 23:30                    
                                </span>
                                <span>
                                    <strong>Samstag:</strong>17:30 – 23:30                    
                                </span>
                                <span>
                                    <strong>Sonntag:</strong>11:00 – 14:00, 17:30 – 22:00                     
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <EventsForm/>
            </section>
        </section>
    );
};

export default ContactUs;