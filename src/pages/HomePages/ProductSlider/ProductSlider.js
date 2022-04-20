import React from 'react';
import Slider from "react-slick";
import './ProductSlider.css'
import image1 from '../../../images/h1-banner.jpg'
import image2 from '../../../images/h1-banner-2.jpg'
import image3 from '../../../images/h1-banner-3.jpg'


const ProductSlider = () => {
  const settings = {
     dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
   
        <div className='container py-5'>
        <Slider {...settings}>
            <div className='product-item'>
                <img src={image1} alt="" width={400} height={300} className="img-fluid"/>
            </div>
            <div className='product-item'>
              <img src={image2} alt="" width={400} height={300} className="img-fluid"/>
            </div>
            <div className='product-item'>
              <img src={image3} alt="" width={400} height={300} className="img-fluid"/>
            </div>
            <div className='product-item'>
              <img src={image1} alt="" width={400} className="img-fluid"/>
            </div>
            <div className='product-item'>
              <img src={image2} alt="" width={400} className="img-fluid"/>
            </div>
            <div className='product-item'>
              <img src={image3} alt="" width={400} className="img-fluid"/>
            </div>
            <div className='product-item'>
              <img src={image1} alt="" width={400} className="img-fluid"/>
            </div>
            <div className='product-item'>
              <img src={image2} alt="" width={400} className="img-fluid"/>
            </div>
            <div className='product-item'>
              <img src={image3} alt="" width={400} className="img-fluid"/>
            </div>
          
        </Slider>
        </div>
    </div>
  );
};

export default ProductSlider;