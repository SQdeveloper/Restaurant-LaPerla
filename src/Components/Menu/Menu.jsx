import React from 'react';
import Button from '../../Components/Button/Button';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = ({closeModal}) => {    

    return (
        <div className='menu'>
            <div className="content-menu-mobile">
                <ul>
                    <li><Link onClick={closeModal} to='/'>Home</Link></li>
                    <li><Link onClick={closeModal} to='/angebot'>Angebot</Link></li>
                    <li><Link onClick={closeModal} to='/events'>Events</Link></li>
                    <li><Link onClick={closeModal} to='/aboutus'>About Us</Link></li>
                    <li><Link onClick={closeModal} to='/contact'>Contact</Link></li>
                    <li><Link onClick={closeModal} to='/reserve'>Reserve</Link></li>
                </ul>
            </div>
            <div className="content-menu-desktop">
                <div className="content-menu-desktop-info">
                    <h2>WE WARMLY WELCOME YOU TO OUR COMPANY.</h2>
                    <p className='paragraph'>Reserve a table today and indulge your taste buds.</p>
                    <div onClick={closeModal}>
                        <Button urlRedirection='/reserve' text='reserve now'/>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><Link onClick={closeModal} to='/'>Home</Link></li>
                        <li><Link onClick={closeModal} to='/angebot'>Angebot</Link></li>
                        <li><Link onClick={closeModal} to='/events'>Events</Link></li>
                        <li><Link onClick={closeModal} to='/aboutus'>About Us</Link></li>
                        <li><Link onClick={closeModal} to='/contact'>Contact</Link></li>
                        <li><Link onClick={closeModal} to='/reserve'>Reserve</Link></li>
                    </ul>
                </nav>
                <div className="content-menu-desktop-image">
                    <img src="/banner-images/chef-with-people.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Menu;