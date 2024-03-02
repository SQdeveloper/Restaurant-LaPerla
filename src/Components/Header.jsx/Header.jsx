import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header-main'>
            <nav>
                <div className="header-main-left header-main-group">
                    <ul>
                        <li><a className='header-main-ancle' href="">Home</a></li>
                        <li><a className='header-main-ancle' href="">AngeBot</a></li>
                        <li><a className='header-main-ancle' href="">Events</a></li>
                    </ul>
                </div>
                <h1 className='header-main-title'>La Perla</h1>
                <div className="header-main-right header-main-group">
                    <ul>
                        <li><a className='header-main-ancle' href="">About Us</a></li>
                        <li><a className='header-main-ancle' href="">Contact</a></li>
                        <li><a className='header-main-ancle' href="">Reserve</a></li>
                    </ul>

                </div>
            </nav>
        </header >
    );
};

export default Header;