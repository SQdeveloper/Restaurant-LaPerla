import React from 'react';
import Description from '../../Components/Description/Description';
import Hero from '../../Components/Hero/Hero';
import Button from '../../Components/Button/Button';
import SwiperHome from '../../Components/SwiperHome/SwiperHome';
import SwiperClients from '../../Components/SwiperClients/SwiperClients';
import './Home.css';

const Home = () => {    
    return (
        <>            
            <section className='home'>
                <Hero/>
                <Description/>
                <section className="home-about">
                    <div className="home-about-info">
                        <span className="home-about-info-subtitle subtitle">About Us</span>
                        <h2>WITH PASSION AND HEART AND SOUL</h2>
                        <p className='paragraph'>Seit 2008 setzen wir uns dafür ein, allen unseren Gästen ein unvergessliches kulinarisches Erlebnis zu bieten. Der älteste Gewölbekeller im Kanton Aargau verleiht unserem Restaurant eine ganz besondere Atmosphäre und wir legen grossen Wert auf hervorragenden Service und ausgezeichnete Qualität der Speisen und Getränke. </p>
                        <Button urlRedirection={'/aboutus'} text={'learn more'}/>
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
                    <SwiperHome/>
                </section>
                <section className="home-events">
                    <div className="home-events-top-responsive">
                        <span className='subtitle'>EVENTS</span>
                        <h2>KULINARISCHE HIGHLIGHTS</h2>
                        <p className="paragraph">We present new specialties, organize unforgettable events and look forward to welcoming you in person soon.</p>
                                <Button urlRedirection='/events' text={'learn more'}/>
                    </div>
                    <div className="home-events-top">
                        <div className="home-events-image-left">
                            <img src="/other-images/cops.webp" alt="image-food" />
                        </div>
                        <div className="home-events-image-right">
                            <img src="/other-images/food-prepraing.webp" alt="image-food" />
                        </div>
                    </div>
                    <div className="home-events-middle">
                        <span className='subtitle'>EVENTS</span>
                        <h2><span>KULINARISCHE</span><span>HIGHLIGHTS</span></h2>
                    </div>
                    <div className="home-events-bottom">
                        <div className="home-events-image-left">
                            <img src="/other-images/bottles-wine.webp" alt="image-food"/>
                        </div>
                        <div className="home-events-text-right">
                            <div className="home-events-text-right-group">                            
                                <p className="paragraph">We present new specialties, organize unforgettable events and look forward to welcoming you in person soon.</p>
                                <Button urlRedirection='/events' text={'learn more'}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='home-clients'>
                    <h2 className="home-clients-title">OUR CUSTOMERS</h2>
                    <hr className='home-clients-line'/>
                    <SwiperClients/>
                </section>
                <section className="home-banner">
                    <div className="home-banner-group home-banner-group-left">
                        <img src="/banner-images/chef-prepraring.webp" alt="image about food" className="home-banner-group-img" />
                        <img src="/banner-images/chef-with-people.webp" alt="image about food" className="home-banner-group-img" />
                        <img src="/banner-images/people-restaurant.webp" alt="image about food" className="home-banner-group-img" />
                        <img src="/banner-images/gourmet.webp" alt="image about food" className="home-banner-group-img" />
                    </div>
                    <section className="home-banner-group home-banner-group-middle">
                        <span className='subtitle'>Delicius</span>
                        <h2 className='home-banner-group-middle-title'><span>AUTHENTIC</span> <span>IMPRESSIONS</span></h2>
                        <hr className='home-banner-group-middle-line'/>                    
                    </section>
                    <div className="home-banner-group home-banner-group-right">
                        <img src="/banner-images/chef-with-wine.webp" alt="image about food" className="home-banner-group-img" />
                        <img src="/banner-images/multiple-plates.webp" alt="image about food" className="home-banner-group-img" />
                        <img src="/banner-images/plates.webp" alt="image about food" className="home-banner-group-img" />
                        <img src="/banner-images/snife.webp" alt="image about food" className="home-banner-group-img" />
                    </div>
                </section>
            </section>
        </>
    );
};

export default Home;