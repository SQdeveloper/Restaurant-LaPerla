import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header-main'>
            <nav>
                <div className="header-main-left header-main-group">
                    <ul>
                        <li><Link to='/' className='header-main-ancle' href="">Home</Link></li>
                        <li><Link to='/angebot' className='header-main-ancle' href="">AngeBot</Link></li>
                        <li><Link to='/events' className='header-main-ancle' href="">Events</Link></li>
                    </ul>
                </div>
                <h1 className='header-main-title'><Link  to='/'><img src="/logo/logo-main.webp" alt="image of logo" /></Link></h1>
                <div className="header-main-right header-main-group">
                    <ul>
                        <li><Link to='/aboutUs' className='header-main-ancle' href="">About Us</Link></li>
                        <li><Link to='/contact' className='header-main-ancle' href="">Contact</Link></li>
                        <li><Link to='/reserve' className='header-main-ancle' href="">Reserve</Link></li>
                    </ul>

                </div>
            </nav>
        </header >
    );
};

export default Header;