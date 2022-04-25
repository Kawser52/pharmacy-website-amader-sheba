import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetials = () => {
    const {productID} = useParams();
    return (
        <div className='container'>
           <div className="row my-5">
               <h3>Product Details Page. {productID}</h3>
           </div>
        </div>
    );
};

export default ProductDetials;