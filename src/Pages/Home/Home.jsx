import React from 'react';
import Description from '../../Components/Description/Description';
import Hero from '../../Components/Hero/Hero';
import Button from '../../Components/Button/Button';
import SwiperHome from '../../Components/SwiperHome/SwiperHome';
import './Home.css';

const Home = () => {    
    return (
        <section className='home'>
            <Hero/>
            <Description/>
            <section className="home-about">
                <div className="home-about-info">
                    <span className="home-about-info-subtitle subtitle">About Us</span>
                    <h2>WITH PASSION AND HEART AND SOUL</h2>
                    <p className='paragraph'>Seit 2008 setzen wir uns dafür ein, allen unseren Gästen ein unvergessliches kulinarisches Erlebnis zu bieten. Der älteste Gewölbekeller im Kanton Aargau verleiht unserem Restaurant eine ganz besondere Atmosphäre und wir legen grossen Wert auf hervorragenden Service und ausgezeichnete Qualität der Speisen und Getränke. </p>
                    <Button text={'learn more'}/>
                </div>
                <div className="home-about-contImage">
                    <img className='home-about-contImage-chef' src="/other-images/chef-home.webp" alt="image-chef" />
                    <img className='home-about-contImage-flower' src="/other-images/flower.webp" alt="image-chef" />
                </div>
            </section>

            <section className='home-angebot'>
                <span className='home-angebot-subtitle subtitle'>ANGEBOT</span>
                <h2 className="home-angebot-title"><span>A DREAM</span><span>FOR THE GAUMEN</span></h2>
                <p className="home-angebot-description paragraph">Get an insight into our exquisite range of dishes and our diverse selection of quality wines.</p>
            </section>
            <SwiperHome/>
        </section>
        
    );
};

export default Home;