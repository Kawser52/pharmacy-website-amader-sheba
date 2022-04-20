import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './ProductFetch.css'

const ProductFetch = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='proudct-show container'>
            <div className="row">
                <div className="product-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                    ></Products>)
                }
                </div>
            </div>
        </div>
    );
};

export default ProductFetch;