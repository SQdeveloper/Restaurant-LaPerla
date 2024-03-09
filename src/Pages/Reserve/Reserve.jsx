import React from 'react';
import HeaderSection from '../../Components/HeaderSection/HeaderSection';
import './Reserve.css';

const Reserve = () => {
    return (
        <section className="reserve">
            <HeaderSection subtitle={'LA PERLA'} firstPartTitle={'RESERVE A TABLE'} bgImage='https://www.laperla-aarburg.ch/wp-content/uploads/2023/02/DSC08305-scaled.jpg'/>
            <section className="reserve-main">
            <iframe src="https://reserve.foratable.com/?restaurantHash=37024c27798725835ea8e121ecd1d1b5#!/table" width="90%" height="990px" style={{border:'none'}} className="lzl-ed lzl-cached" data-lzl-src="https://reserve.foratable.com/?restaurantHash=37024c27798725835ea8e121ecd1d1b5#!/table"></iframe>
            </section>
        </section>
    );
};

export default Reserve;