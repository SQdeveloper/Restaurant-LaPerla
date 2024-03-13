import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ButtonScrollTop from '../../Components/ButtonScrollTop/ButtonScrollTop';

const RenderComponent = ({component}) => {
    return (
        <>
            <Header/>
            {component}
            <ButtonScrollTop/>
            <Footer/>
        </>
    );
};

export default RenderComponent;