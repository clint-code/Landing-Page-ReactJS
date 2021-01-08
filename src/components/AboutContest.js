import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default class About extends Component {
    render(){

        return(
            <div id="about-contest">
                <Container fluid>

                    <Row className="center-content">

                        <Col md = {5} className = "img-slide">

                            <div className="img-section">

                                <img className="img-fluid" src="img/about-contest/happy-baker.png" alt="happy-baker"/>

                            </div>
                        
                        </Col>

                        <Col md = {7} className = "slide-section">

                        <div class="owl-carousel slideContainer">

                            <div className="single-slider">

                                <div className="cnt-description-section">

                                    <h2 className="text-white">About the Contest</h2>
                                    <p className="text-white">Many masters of their craft are recognized as masters because
                                        of
                                        their dedication to the craft. When we look at them, what we are appreciating is
                                        the
                                        fact that they have taken something and done it so well that they have turned it
                                        into an art form.</p>

                                </div>

                            </div>

                            <div className="single-slider">

                                <div className="cnt-description-section">

                                    <h2 className="text-white">About the Contest</h2>
                                    <p className="text-white">In turn their excellence guarantees that their output will
                                        always
                                        be of the highest quality, to the benefit of those who receive it. This is <em
                                            className="focus-text">The art that promises.</em></p>

                                </div>

                            </div>

                            <div className="single-slider">

                                <div className="cnt-description-section">

                                    <h2 className="text-white">About the Contest</h2>
                                    <p className="text-white"> Our SOKO Flour products have been sourced, sorted and
                                        prepared
                                        with such dedication, effort and commitment that you receive the finest, and
                                        tastiest meals for your home. </p>

                                </div>


                            </div>


                        </div>



                        <div class="flour-powder-art-section">
                            <img class="img-fluid" src="img/flour-powder-art.png" alt="flour-powder-art"/>
                        </div>
                        
                        </Col>

                    </Row>

                <div className="border-section">
                    <img src="img/yellow-border.png" alt="" class="img-fluid" />
               </div>

                <div className="bg-arrow-2">
                    <a href="#featured-entries">

                        <img src="img/icons/dropdown-background.png" alt="arrow" class="img-fluid" />

                    </a>
                </div>

                </Container>

            </div>

        )

        }

    }