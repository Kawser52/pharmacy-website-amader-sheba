import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetials = () => {
    const {productID} = useParams();
    return (
        <div className='container'>
           <h1 className='text-center'>This is Detials page. {productID}</h1>
        </div>
    );
};

export default ProductDetials;