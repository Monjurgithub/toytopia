import React from 'react';
import Banner from '../../Shared/Banner';
import Gallery from '../../Shared/Gallery';
import Selectcategory from './Selectcategory';
import PageTitle from '../../Shared/PageTitle';
import ContactUS from './ContactUS';
import User from './User';

const HomePage = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Gallery></Gallery>
            <Selectcategory></Selectcategory>
            <ContactUS></ContactUS>
            <User></User>
        </div>
    );
};

export default HomePage;