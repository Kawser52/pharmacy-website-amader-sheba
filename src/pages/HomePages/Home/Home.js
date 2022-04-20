import React from 'react';
import Offer from '../Offer/Offer';
import ProductFetch from '../ProductFetch/ProductFetch';
import Products from '../Products/Products';
import ProductSlider from '../ProductSlider/ProductSlider';
import Service from '../Services/Service';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Service></Service>
            <ProductSlider></ProductSlider>
            <div className="container">
                <div className="row">
                <span class="line">
                        <h2><span>Cold & Fever</span></h2>
                </span>
                </div>
            </div>
            <ProductFetch></ProductFetch>
            <div className="container">
                <div className="row">
                <span class="line">
                        <h2><span>Vitamins & Minerals</span></h2>
                </span>
                </div>
            </div>
            <ProductFetch></ProductFetch>
            <div className="container">
                <div className="row">
                <span class="line">
                        <h2><span>Special offers</span></h2>
                </span>
                </div>
            </div>
            <Offer></Offer>
           
        </div>
    );
};

export default Home;