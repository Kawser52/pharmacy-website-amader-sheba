import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css'
import { faBagShopping, faEye, faSquarePollVertical, faStar } from '@fortawesome/free-solid-svg-icons'
import product1 from '../../../images/Product/product2-fetaured.jpg'
import product2 from '../../../images/Product/product3-fetaured.jpg'
import product3 from '../../../images/Product/product4-fetaured.jpg'


const Products = () => {
  
    return (
        <>
        <div className="product-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                       <div className="products-det border p-2">
                        <div className="product-condition d-flex justify-content-between">
                                <span className='condtion'>New</span>
                                <h4 className='percentage'>-17</h4>
                            </div>
                            <div className='product-details text-center'>
                                <img src={product1} alt="" className='img-fluid'/>
                                <strong className='rating'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></strong>
                                <h5 className='product-name'>{}</h5>
                                <h4 className='product-price'>$<span>26.00</span></h4>
                                <button className='btn btn-success'><FontAwesomeIcon icon={faBagShopping} className='me-2'></FontAwesomeIcon>Add To cart</button>
                                <div className="p-details d-flex justify-content-between mt-3">
                                   <a href=""><FontAwesomeIcon icon={faEye} className='me-1'></FontAwesomeIcon>Details</a>
                                   <a href=""><FontAwesomeIcon icon={faSquarePollVertical} className='me-1'></FontAwesomeIcon>Ad to WhisList</a>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="col-md-3">
                       <div className="products-det border p-2">
                        <div className="product-condition d-flex justify-content-between">
                                <p>New</p>
                                <h4 className='percentage'>-17</h4>
                            </div>
                            <div className='product-details text-center'>
                                <img src={product3} alt="" className='img-fluid'/>
                                <strong className='rating'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></strong>
                                <h5 className='product-name'>Cetirizine 12mg Film-coated Tablets</h5>
                                <h4 className='product-price'>$<span>26.00</span></h4>
                                <button className='btn btn-success'><FontAwesomeIcon icon={faBagShopping} className='me-2'></FontAwesomeIcon>Add To cart</button>
                                <div className="p-details d-flex justify-content-between mt-3">
                                   <a href=""><FontAwesomeIcon icon={faEye} className='me-1'></FontAwesomeIcon>Details</a>
                                   <a href=""><FontAwesomeIcon icon={faSquarePollVertical} className='me-1'></FontAwesomeIcon>Ad to WhisList</a>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="col-md-3">
                       <div className="products-det border p-2">
                        <div className="product-condition d-flex justify-content-between">
                                <p>New</p>
                                <h4 className='percentage'>-17</h4>
                            </div>
                            <div className='product-details text-center'>
                                <img src={product2} alt="" className='img-fluid'/>
                                <strong className='rating'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></strong>
                                <h5 className='product-name'>Natural Elixir For Perfect Skin</h5>
                                <h4 className='product-price'>$<span>26.00</span></h4>
                                <button className='btn btn-success'><FontAwesomeIcon icon={faBagShopping} className='me-2'></FontAwesomeIcon>Add To cart</button>
                                <div className="p-details d-flex justify-content-between mt-3">
                                   <a href=""><FontAwesomeIcon icon={faEye} className='me-1'></FontAwesomeIcon>Details</a>
                                   <a href=""><FontAwesomeIcon icon={faSquarePollVertical} className='me-1'></FontAwesomeIcon>Ad to WhisList</a>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="col-md-3">
                       <div className="products-det border p-2">
                        <div className="product-condition d-flex justify-content-between">
                                <p>New</p>
                                <h4 className='percentage'>-17</h4>
                            </div>
                            <div className='product-details text-center'>
                                <img src={product3} alt="" className='img-fluid'/>
                                <strong className='rating'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></strong>
                                <h5 className='product-name'>Alvedon® Film-coated tablet 500 mg 26 pieces</h5>
                                <h4 className='product-price'>$<span>26.00</span></h4>
                                <button className='btn btn-success'><FontAwesomeIcon icon={faBagShopping} className='me-2'></FontAwesomeIcon>Add To cart</button>
                                <div className="p-details d-flex justify-content-between mt-3">
                                   <a href=""><FontAwesomeIcon icon={faEye} className='me-1'></FontAwesomeIcon>Details</a>
                                   <a href=""><FontAwesomeIcon icon={faSquarePollVertical} className='me-1'></FontAwesomeIcon>Ad to WhisList</a>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    );
};

export default Products;