import React, { Component } from 'react'
import { Container, Row, Button} from 'react-bootstrap';

export default class About extends Component {
    render(){

        return(

            <footer className="footer-section">

                <Container fluid>

                    <Row>

                        <div className="flex-grow-1 copyright-text p-5">
                            <p>
                                © 2020 all rights reserved | By <b>SOKO</b>
                            </p>
                        </div>

                        <div className="social-icons-section">

                            <ul className="d-flex p-4 mb-0">

                            <li>
                                <Button className="single-social-icon">
                                    <img src="img/footer/facebook-icon.png" alt="facebook-icon" className="img-fluid" />
                                </Button>
                            </li>

                            <li>
                                <Button className="single-social-icon">
                                    <img src="img/footer/instagram-icon.png" alt="instagram-icon" className="img-fluid" />
                                </Button>
                            </li>

                            <li>
                                <Button className="single-social-icon">
                                    <img src="img/footer/twitter-icon.png" alt="twitter-icon" class="img-fluid" />
                                </Button>
                            </li>

                        </ul>

                    </div>


                    </Row>

                    
                </Container>



            </footer>

        )
     
    }
    
}    