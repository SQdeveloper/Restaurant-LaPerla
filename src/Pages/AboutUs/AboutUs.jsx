import React from 'react';
import HeaderSection from '../../Components/HeaderSection/HeaderSection';
import PresentationInfo from '../../Components/PresentationInfo/PresentationInfo';
import Button from '../../Components/Button/Button';
import './AboutUs.css';

const SectionText = ()=>{
    return(
        <>
            <div className='aboutUs-title'>A PLACE WITH A LONG HISTORY AND A TEAM THAT IS MOTIVATED AND COMMITTED TO AN ENJOYABLE PRESENT AND FUTURE.</div>
            <p className='aboutUs-paragraph'>The heart of the restaurant, the vaulted cellar, is the oldest in the canton of Aargau. It was built in 1743 next to the Aare, an important trade route at the time. In 2008, Dini Hasani founded La Perla and the vaulted cellar became a stylish place for culinary enjoyment.The dedicated kitchen at La Perla transforms classic dishes into innovative new wonders of taste with creativity and great expertise. Dini Hasani and his team look forward to welcoming you to this gastronomic gem on the Aare.</p>
            <Button urlRedirection={'/contact'} text='learn more'/>
        </>
    )
}

const SectionText2 = ()=>{
    return(
        <div className='aboutUs-second-chef-text'>
            <span className='subtitle'>ausbilding</span>
            <h2 className="aboutUs-second-chef-title">OUR FUTURE</h2>
            <p className='aboutUs-second-chef-paragraph'>Professional training is the basis for a successful career. At La Perla, we are committed to providing our apprentices with such training. It's all about enjoying the job and the quality of the work.</p>
            <br></br>
            <p className='aboutUs-second-chef-paragraph'>We currently have vacancies for apprenticeships as a restaurant specialist or restaurant employee from 01.08.2023. You are welcome to send us your application to the following e-mail address: info@laperla-aarburg.ch</p>
        </div>
    )
}

const AboutUs = () => {
    return (
        <section className='aboutUs'>
            <HeaderSection subtitle={'about us'} firstPartTitle={'TRADITION COMBINED'} secondPartTitle={'WITH CREATIVITY'} bgImage='https://www.laperla-aarburg.ch/wp-content/uploads/2023/02/DSC08273-scaled.jpg'/>
            <PresentationInfo bgColor='black' subtitle='OUR HISTORY' firstPartTitle={'LANGE TRADITION'} secondPartTitle={'AND NUMEROUS'} thirdPartTitle={'SATISFIED GUESTS'} child={<SectionText/>} urlImage={'https://www.laperla-aarburg.ch/wp-content/uploads/2023/02/DSC09331-scaled.jpg'}/>
            <div className="aboutUs-contentImage-middle">
                <img src="https://www.laperla-aarburg.ch/wp-content/uploads/2023/02/DSC08305-scaled.jpg" alt="bg-image" className="aboutUs-image-middle" />
            </div>
            <PresentationInfo child={<SectionText2/>} bgColor='white' urlImage='https://www.laperla-aarburg.ch/wp-content/uploads/2023/02/DSC09200-scaled.jpg'/>
        </section>
    );
};

export default AboutUs;