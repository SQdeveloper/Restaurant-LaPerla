import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './SwiperClients.css';
import CommentClient from '../CommentClient/CommentClient';

const SwiperClients = () => {
    const clients = [
        {
            comment: 'Very nice restaurant, with very fine food, from starter to dessert! The hosts are very friendly, we can only recommend La Perla.',
            name: 'Boban P. vor 3 Monaten'
        },
        {
            comment: 'As always, everything was perfect! :-)',
            name: 'Lukas W. vor 2 Monaten'
        },
        {
            comment: 'Very attentive and friendly serviceAs always, everything was perfect! :-)',
            name: 'Michaela S. vor 6 Monaten'
        },
        {
            comment: 'Friendly staff and very nice ambiance with very tasty food. Looking forward to coming back soon. Thanks a lot for the service',
            name: 'Jan K. vor 12 Tagen'
        },
        {
            comment: 'The restaurant is really beautiful and the food is excellent, I highly recommend it. See you soon',
            name: 'Chantal K. vor 4 Monaten'
        },
        {
            comment: 'Service was very friendly. Lunch excellent. Price very acceptable. Fantastic location',
            name: 'dirk h. vor 7 Monaten'
        },
        {
            comment: "Everything was fine. We'd be happy to do it again.",
            name: 'Jano B. vor 6 Monaten'
        }
    ]

    return (        
        <Swiper pagination={true} modules={[Pagination]} className="swiper-clients">
            {
                clients.map((client,index)=>(
                    <SwiperSlide key={index}>
                        <CommentClient comment={client.comment} name={client.name}/>
                    </SwiperSlide>            
                ))
            }
        </Swiper>        
    );
};

export default SwiperClients;