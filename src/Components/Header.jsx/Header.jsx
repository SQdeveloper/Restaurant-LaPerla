import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header-main'>
            <nav>
                <div className="header-main-left header-main-group">
                    <ul>
                        <li>Home</li>
                        <li>AngeBot</li>
                        <li>Events</li>
                    </ul>
                </div>
                <h1 className='header-main-title'>La Perla</h1>
                <div className="header-main-right header-main-group">
                    <ul>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Reserve</li>
                    </ul>

                </div>
            </nav>
        </header >
    );
};

export default Header;