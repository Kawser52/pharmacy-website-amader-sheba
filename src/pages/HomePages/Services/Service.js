import React from 'react';
import './Service.css'
const Service = () => {
    return (
        <div className='service'>
            <div className="container">
                <div className="row">
                    <div className="service-box col-md-4">
                        <h2 className='font-weight-bold'>Pharmacy Store</h2>
                        <p>Erat sociosqu mollis mi lorem sed tincidunt nisi malesuada</p>
                    </div>
                    <div className="service-box col-md-4">
                        <h2 className='font-weight-bold'>Healthy Care</h2>
                        <p>Erat sociosqu mollis mi lorem sed tincidunt nisi malesuada</p>
                    </div>
                    <div className="service-box col-md-4">
                        <h2 className='font-weight-bold'>Medical Center</h2>
                        <p>Erat sociosqu mollis mi lorem sed tincidunt nisi malesuada</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;