import React from 'react';
import './EventsForm.css';
import EventsInput from '../EventsInput/EventsInput';

const EventsForm = () => {
    return (
        <section className='section-formulario'>
            <h1 className="section-formulario-title">reserve now</h1>
            <EventsInput textPlaceHolder='name'/>
            <EventsInput textPlaceHolder='last name'/>
            <EventsInput textPlaceHolder='telephone'/>
            <EventsInput textPlaceHolder='e-mail'/>
            <textarea className='section-formulario-textarea' placeholder='message'/>
            <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-8gonkdg6p306" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LewykUlAAAAAHq1kHP1jnaXyONsuz9od5chjKkT&amp;co=aHR0cHM6Ly93d3cubGFwZXJsYS1hYXJidXJnLmNoOjQ0Mw..&amp;hl=es&amp;v=vj7hFxe2iNgbe-u95xTozOXW&amp;size=normal&amp;cb=7de1jfxqnwpp"></iframe>
            <button className='section-formulario-button'>send</button>
        </section>
    );
};

export default EventsForm;