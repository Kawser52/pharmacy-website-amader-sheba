import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css'
import { faBagShopping, faEye, faSquarePollVertical, faStar } from '@fortawesome/free-solid-svg-icons'
import product1 from '../../../images/Product/product2-fetaured.jpg'
import product2 from '../../../images/Product/product3-fetaured.jpg'
import product3 from '../../../images/Product/product4-fetaured.jpg'
import { Link } from 'react-router-dom';


const Products = ({product}) => {
    const{name, price, rating, condition, offer, img, id} = product || {};
    return (
        <>
        <div className="product-section">
            <div className="products-det border p-2">
                <div className="product-condition d-flex justify-content-between">
                    <span className='condtion'>{condition}</span>
                    <h4 className='percentage'>{offer}</h4>
                </div>
                <div className='product-details text-center'>
                    <img src={img} alt="" className='img-fluid'/>
                    <strong className='rating'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></strong>
                     <Link to={`productdetails/${id}`}><h5 className='product-name'>{name}</h5></Link>
                    <h4 className='product-price'>$<span>{price}</span></h4>
                    <button className='btn btn-success'><FontAwesomeIcon icon={faBagShopping} className='me-2'></FontAwesomeIcon>Add To cart</button>
                         <div className="p-details d-flex justify-content-between mt-3">
                            <Link to={`productdetails/${id}`}><FontAwesomeIcon icon={faEye} className='me-1'></FontAwesomeIcon>Details</Link>
                            <a href=""><FontAwesomeIcon icon={faSquarePollVertical} className='me-1'></FontAwesomeIcon>Ad to WhisList</a>
                         </div>
                    </div>
                 </div>
         </div> 
        </>
    );
};

export default Products;