import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start bg-light text-muted">
            <section className="p-3">
                <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        <i className="fas fa-gem me-3"></i>Company name
                    </h6>
                    <p>
                        Amader Sheba hocche ekta ecommerece website jekhane pharmacy er jekono product home delivary kora hoi. Sulov mulle pacchen je kono dhoren pharmacy product.
                    </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Products Category
                    </h6>
                    <p>
                        <a href="#!" className="text-reset">Cold</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Medicine</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Pain</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Fevar</a>
                    </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Useful links
                    </h6>
                    <p>
                        <a href="#!" className="text-reset">Pricing</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Settings</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Orders</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Help</a>
                    </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Contact
                    </h6>
                    <p><i className="fas fa-home me-3"></i> Rajshahi, Rajshahi Cour-6203, Bangladesh</p>
                    <p>
                        <i className="fas fa-envelope me-3"></i>
                        info@amadersheba.com
                    </p>
                    <p><i className="fas fa-phone me-3"></i> + 01762-54554</p>
                    <p><i className="fas fa-print me-3"></i> + 01842-58741</p>
                    </div>
                </div>
                </div>
            </section>
            <div className="text-center p-4 border-top">
                © 2022 Copyright:
                <a className="text-reset fw-bold" href="https://amadersheba.com/">amadersheba.com</a>
            </div>
            </footer>
        </>
    );
};

export default Footer;