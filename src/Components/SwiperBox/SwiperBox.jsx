import React from 'react';
import Button from '../Button/Button';

const SwiperBox = ({number, img, subtitle, title, paragraph}) => {
    return (
        <div className="swiper-box">
            <div className="swiper-number">{number}.</div>
            <img className='swiper-image' src={img} alt="image of food" />
            <section className="swiper-box-info">
                <span className="swiper-subtitle subtitle">{subtitle}</span>
                <h2 className='swiper-title'>{title}</h2>
                <p className='swiper-description paragraph'>{paragraph}</p>
                <Button text={'learn more'}/>
            </section>
        </div>
    );
};

export default SwiperBox;