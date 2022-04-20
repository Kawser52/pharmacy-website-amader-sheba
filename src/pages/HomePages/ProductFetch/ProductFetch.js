import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const ProductFetch = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])
    return (
        <div>
              {
                    products.map(product => <Products
                        key={service.id}
                        product={service}
                    ></Products>)
                }
        </div>
    );
};

export default ProductFetch;