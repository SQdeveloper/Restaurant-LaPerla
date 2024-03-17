import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './Header.css';

const toggleMenu = ()=> {
    const menu = document.querySelector('.menu');
    const linesMenu = document.querySelectorAll('.header-main-line-menu');

    menu.classList.toggle('open');
    linesMenu[0].classList.toggle('open');
    linesMenu[1].classList.toggle('open');
    linesMenu[2].classList.toggle('open');
    document.body.classList.toggle('noScroll');
}

const closeModal = ()=>{
    const menu = document.querySelector('.menu');
    const linesMenu = document.querySelectorAll('.header-main-line-menu');
    
    menu.classList.remove('open');
    linesMenu[0].classList.remove('open');
    linesMenu[1].classList.remove('open');
    linesMenu[2].classList.remove('open');
    document.body.classList.remove('noScroll');
}

const Header = () => {
    return (
        <header className='header-main'>
            <Menu closeModal={closeModal}/>
            <nav>
                <div className="header-main-left header-main-group">
                    <button onClick={toggleMenu} className='header-main-component-invisible'>
                        <span className='header-main-line-menu'></span>
                        <span className='header-main-line-menu'></span>
                        <span className='header-main-line-menu'></span>
                    </button>
                    <ul>
                        <li><Link to='/' className='header-main-ancle' href="">Home</Link></li>
                        <li><Link to='/angebot' className='header-main-ancle' href="">AngeBot</Link></li>
                        <li><Link to='/events' className='header-main-ancle' href="">Events</Link></li>
                    </ul>
                </div>
                <h1 className='header-main-title'><Link onClick={closeModal} to='/'><img src="/logo/logo-main.webp" alt="image of logo" /></Link></h1>
                <div className="header-main-right header-main-group">
                    <ul>
                        <li><Link to='/aboutUs' className='header-main-ancle' href="">About Us</Link></li>
                        <li><Link to='/contact' className='header-main-ancle' href="">Contact</Link></li>
                        <li><Link to='/reserve' className='header-main-ancle' href="">Reserve</Link></li>
                    </ul>
                    <Link onClick={closeModal} className='header-main-component-invisible' to='/reserve'><svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 944 928"><defs></defs><path className="cls-11" d="m894,362v-.22H50v.22H0v469.49C0,884.7,43.3,928,96.51,928h750.97c53.22,0,96.51-43.3,96.51-96.51v-469.49h-50ZM250,779c0,13.81-11.19,25-25,25h-83c-13.81,0-25-11.19-25-25v-30c0-13.81,11.19-25,25-25h83c13.81,0,25,11.19,25,25v30Zm0-150c0,13.81-11.19,25-25,25h-83c-13.81,0-25-11.19-25-25v-30c0-13.81,11.19-25,25-25h83c13.81,0,25,11.19,25,25v30Zm0-148.04c0,12.73-10.32,23.04-23.04,23.04h-86.91c-12.73,0-23.04-10.32-23.04-23.04v-33.91c0-12.73,10.32-23.04,23.04-23.04h86.91c12.73,0,23.04,10.32,23.04,23.04v33.91Zm193,298.04c0,13.81-11.19,25-25,25h-83c-13.81,0-25-11.19-25-25v-30c0-13.81,11.19-25,25-25h83c13.81,0,25,11.19,25,25v30Zm0-150c0,13.81-11.19,25-25,25h-83c-13.81,0-25-11.19-25-25v-30c0-13.81,11.19-25,25-25h83c13.81,0,25,11.19,25,25v30Zm0-150c0,13.81-11.19,25-25,25h-83c-13.81,0-25-11.19-25-25v-30c0-13.81,11.19-25,25-25h83c13.81,0,25,11.19,25,25v30Zm193,300c0,13.81-11.19,25-25,25h-83c-13.81,0-25-11.19-25-25v-30c0-13.81,11.19-25,25-25h83c13.81,0,25,11.19,25,25v30Zm0-150c0,13.81-11.19,25-25,25h-83c-13.81,0-25-11.19-25-25v-30c0-13.81,11.19-25,25-25h83c13.81,0,25,11.19,25,25v30Zm0-150c0,13.81-11.19,25-25,25h-83c-13.81,0-25-11.19-25-25v-30c0-13.81,11.19-25,25-25h83c13.81,0,25,11.19,25,25v30Zm193,300c0,13.81-11.19,25-25,25h-83c-13.81,0-25-11.19-25-25v-30c0-13.81,11.19-25,25-25h83c13.81,0,25,11.19,25,25v30Zm0-150c0,13.81-11.19,25-25,25h-83c-13.81,0-25-11.19-25-25v-30c0-13.81,11.19-25,25-25h83c13.81,0,25,11.19,25,25v30Zm0-150c0,13.81-11.19,25-25,25h-83c-13.81,0-25-11.19-25-25v-30c0-13.81,11.19-25,25-25h83c13.81,0,25,11.19,25,25v30Z"></path><g><path className="cls-11" d="m847.49,90h-91.49V25c0-13.81-11.19-25-25-25s-25,11.19-25,25v65H244l-1-64c0-13.81-16.19-26-30-26s-29,12.19-29,26l-1,64h-86.49C43.3,90,0,133.3,0,186.51v132.49h944v-132.49c0-53.22-43.3-96.51-96.51-96.51Zm-609.49,45.47c3.11,1.29,6.1,2.8,8.94,4.53,18.9,11.5,31.56,32.3,31.56,56,0,36.12-29.38,65.5-65.5,65.5s-65.5-29.38-65.5-65.5c0-23.7,12.65-44.5,31.56-56,2.85-1.73,5.84-3.24,8.94-4.53m543,126.03c-36.12,0-65.5-29.38-65.5-65.5,0-23.7,12.65-44.5,31.56-56,2.85-1.73,5.84-3.24,8.94-4.53v60.53c0,13.81,11.19,25,25,25s25-11.19,25-25v-60.53c3.11,1.29,6.1,2.8,8.94,4.53,18.9,11.5,31.56,32.3,31.56,56,0,36.12-29.38,65.5-65.5,65.5Z"></path><path className="cls-11" d="m185,132l1.05,60.09c.2,11.32,6.65,21.73,16.89,26.56,3.05,1.44,6.64,2.57,10.86,3.19.97.14,1.94.16,2.91.08.07,0,.13-.01.2-.02,15.54-1.41,27.46-14.43,27.8-30.02l1.3-59.87h-61Z"></path><path className="cls-11" d="m701,132l1.05,60.09c.2,11.32,6.65,21.73,16.89,26.56,3.05,1.44,6.64,2.57,10.86,3.19.97.14,1.94.16,2.91.08.07,0,.13-.01.2-.02,15.54-1.41,27.46-14.43,27.8-30.02l1.3-59.87h-61Z"></path><path className="cls-11" d="m701,90l1.05-60.09c.2-11.32,6.65-21.73,16.89-26.56,3.05-1.44,6.64-2.57,10.86-3.19.97-.14,1.94-.16,2.91-.08.07,0,.13.01.2.02,15.54,1.41,27.46,14.43,27.8,30.02l1.3,59.87h-61Z"></path></g></svg></Link>
                </div>
            </nav>
        </header >
    );
};

export default Header;