import React from 'react';
import './Homepage.scss';
import HomepagePicture from '../../images/homepage_picture.png';

const Homepage = () => (
    <section className="Homepage container">
        <h1 className="Homepage__title">Welcome to our <span className="Homepage__brand-name">SVI Employee Manager</span></h1>

        <img src={HomepagePicture} alt="Homepage" />
    </section>
);

export default Homepage;