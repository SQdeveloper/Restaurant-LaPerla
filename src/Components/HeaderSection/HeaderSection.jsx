import React from 'react';
import './HeaderSection.css';

const HeaderSection = ({subtitle, firstPartTitle, secondPartTitle, bgImage}) => {
    return (
        <section className='headerSection' style={{background: `linear-gradient(rgba(0,0,0, .6) 100%, transparent), url(${bgImage})`,  backgroundSize: "cover", backgroundPosition:"center", backgroundRepeat: "no-repeat"}}>
            <div className="headerSection-text">
                <span className='headerSection-text-subtitle subtitle'>{subtitle}</span>
                <div className="headerSection-text-main">
                    <span>{firstPartTitle}</span>
                    <span>{secondPartTitle}</span>
                </div>                
            </div>
        </section>
    );
};

export default HeaderSection;