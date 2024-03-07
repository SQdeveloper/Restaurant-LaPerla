import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const RenderComponent = ({component}) => {
    return (
        <>
            <Header/>
            {component}
            <Footer/>
        </>
    );
};

export default RenderComponent;