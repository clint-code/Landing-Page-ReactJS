import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default class Home extends Component {
    render(){
        return(

           <Container fluid className="no-padding">

               <Row>

                   <Col className="banner-image">
                        <img 
                            src="img/banner/masoko-banner.jpg" 
                            alt="soko-banner-img" 
                            className="img-fluid"
                            />
                   </Col>

                   <div className = "overlay"></div>

                   <div className="banner-text">
                            <div className="banner-text-top">
                                <h1 className="text-white text-center">
                                    Art that promises
                                </h1>
                            </div>
                            <div className="banner-text-bottom">
                                <h1 className="text-white text-center">
                                    <span className="large-font">inspiration</span>
                                </h1>
                            </div>

                    </div>

                    <div className="bg-arrow">
                            <a href="#about-contest">
                                <img src="img/icons/dropdown-background.png" alt="arrow" className="img-fluid"/>
                            </a>
                    </div>

               </Row>

           </Container> 
        )
    }

}