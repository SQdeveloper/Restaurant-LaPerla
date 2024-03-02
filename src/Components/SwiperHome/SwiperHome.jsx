import React from 'react';
import SwiperBox from '../SwiperBox/SwiperBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SwiperHome.css';

const SwiperHome = () => {
    const info = [
        {
            number: "01",
            subtitle: "ENVIRONMENT",
            title: "UNIQUE ATMOSPHERE",
            paragraph: "Both the stylish vaulted cellar and the magnificent view from the terrace offer an unforgettable and unique ambience.",
            img: '/other-images/wine-restaurant.webp'
        },
        {
            number: "02",
            subtitle: "FOOD & WINES",
            title: "EXQUISITE QUALITY",
            paragraph: "In favor of exquisite freshness and the highest standards, we offer a carefully curated selection of culinary delights.",
            img: '/other-images/postre2.webp'
        },        
        {
            number: "03",
            subtitle: "WINE",
            title: "COMPANIONS WITH A STRONG CHARACTER",
            paragraph: "We have been wine connoisseurs for many years and attach great importance to the optimal matching of food and wine in our individual consultations.",
            img: '/bg-images/bg-home.webp'
        }              
    ]

    return (
        <Swiper
            pagination={{
            type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {info.map((inf,index)=>(
                <SwiperSlide key={index}>
                    <SwiperBox number={inf.number} img={inf.img} subtitle={inf.subtitle} title={inf.title} paragraph={inf.paragraph}/>
                </SwiperSlide>                
            ))}
        </Swiper>

    );
};

export default SwiperHome;