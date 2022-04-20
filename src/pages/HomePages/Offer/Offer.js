import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import offerimage1 from '../../../images/Product/bn_img_12.jpg'
import './Offer.css'

const Offer = () => {
    return (
        <>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6">
                             <div className='offer-image'>
                                <span className='text'>From $0.99</span>
                                <p className='offer-title'>Breathable</p>
                                <p className='offer-percent'>Face Mask</p>
                                <button className='btn btn-success'>Shop now <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon></button>
                             </div>
                    </div>
                    <div className="col-md-6">
                             <div className='offer-image extra'>
                                <span className='text'>From $0.99</span>
                                <p className='offer-title'>Covid 19 pack</p>
                                <p className='offer-percent'>Get it now 45% Off</p>
                                <button className='btn btn-success'>Shop now <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon></button>
                             </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Offer;