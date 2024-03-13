import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>                                  
            <img className='footer-logo' src="/logo/logo-main.webp" alt="footer-logo" />
            <div className="footer-info-contact">
                <span>062 791 31 51</span>
                <span>info@laperla-aarburg.ch</span>
                <span>Landhausstrasse 17, 4663 Aarburg</span>
            </div>
            <section className="footer-info-hours">
                <h2>OPENING HOURS</h2>
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
            </section>
            <span className='footer-title'>WE LOOK FORWARD TO YOUR VISIT!</span>
            <hr className="footer-line" />
            <Button urlRedirection={'/contact'} text={'contact us now'}/>
            <nav>
                <ul>
                    <li><Link onClick={()=>{window.scrollTo({top:0})}} to='/'>home</Link></li><hr />
                    <li><Link onClick={()=>{window.scrollTo({top:0})}} to='/angebot'>angebot</Link></li><hr />
                    <li><Link onClick={()=>{window.scrollTo({top:0})}} to='/events'>events</Link></li><hr />
                    <li><Link onClick={()=>{window.scrollTo({top:0})}} to='/contact'>contact us</Link></li><hr />
                    <li><Link onClick={()=>{window.scrollTo({top:0})}} to='/aboutus'>about us</Link></li><hr />
                    <li><Link onClick={()=>{window.scrollTo({top:0})}} to='/reserve'>reserve</Link></li>
                </ul>
            </nav>
            <div className="footer-redes">                
                <a href=""><img src="/redes-sociales/facebook.svg" alt="image facebook" className="footer-redes-img" /></a>
                <a href=""><img src="/redes-sociales/instagram.svg" alt="image instagram" className="footer-redes-img" /></a>
            </div>            
        </footer>
    );
};

export default Footer;