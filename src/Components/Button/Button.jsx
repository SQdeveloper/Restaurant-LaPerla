import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({text, urlRedirection}) => {
    const scrollUp = ()=>{
        window.scrollTo({top:0});
    }

    return (
        <Link onClick={scrollUp} className='button-ancle' to={urlRedirection}>                        
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>
            <span>{text}</span>
        </Link>
    );
};

export default Button;