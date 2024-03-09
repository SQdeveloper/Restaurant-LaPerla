import React from 'react';
import './PresentationInfo.css';

const PresentationInfo = ({bgColor='black', subtitle='', firstPartTitle='', secondPartTitle='', thirdPartTitle='', urlImage, child}) => {
    return (
        <section className="presentationInfo" style={{backgroundColor:bgColor}}>
            <span className="subtitle">{subtitle}</span>
            <h2 className='presentationInfo-title'>
                <span>{firstPartTitle}</span>
                <span>{secondPartTitle}</span>
                <span>{thirdPartTitle}</span>
            </h2>
            <aside className='presentationInfo-group'>
                <img src={urlImage} alt="photo about chef" />
                <div className="presentationInfo-group-text">
                    {child}
                </div>
            </aside>
        </section>
    );
};

export default PresentationInfo;