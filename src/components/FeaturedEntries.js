import React, { Component } from 'react'
import { Container, Row} from 'react-bootstrap';

export default class About extends Component {
    render(){

        return(

            <div id="featured-entries" className="featured-entries-background">

                <Container fluid className="center-content">

                <Row className="links-section justify-content-between">

                    <h2 className="text-white">
                        Featured Entries...
                    </h2>

                    <div className="links d-flex align-items-center justify-content-around">

                        <ul className="d-flex">

                            <li className="link pr-3">
                                <a href="#winners" class="active text-white" data-target="winners">
                                    Winners
                                </a>
                            </li>

                            <li className="link pr-3">
                                <a href="#all-entries" class="text-white" data-target="all-entries">
                                    All Entries
                                </a>
                            </li>

                        </ul>

                    </div>

                    <div className="d-flex align-items-center grid-icon-section" data-toggle="modal"
                        data-target="#more-winners">
                        <a href="#more-winners">

                            <img src="img/icons/grid-icon.png" alt="grid-icon" />

                        </a>
                    </div>

                </Row>

                <Row className="entries-section justify-content-between mt-5 winners" id="#winners">

                    <div className="card single-entry">
                        <div className="winner-profile">
                            <img src="img/entries/user-profile-1.jpg" alt="user-profile-1" className="img-fluid" />
                        </div>
                        <div className="artwork-section">
                            <img src="img/entries/art-entries-1.png" alt="art-entry-1" className="img-fluid" />
                        </div>
                    </div>

                    <div className="card single-entry">
                        <div className="winner-profile">
                            <img src="img/entries/user-profile-1.jpg" alt="user-profile-1" className="img-fluid" />
                        </div>
                        <div className="artwork-section">
                            <img src="img/entries/art-entries-1.png" alt="art-entry-1" className="img-fluid" />
                        </div>
                    </div>

                    <div className="card single-entry">
                        <div className="winner-profile">
                            <img src="img/entries/user-profile-1.jpg" alt="user-profile-1" className="img-fluid" />
                        </div>
                        <div className="artwork-section">
                            <img src="img/entries/art-entries-1.png" alt="art-entry-1" className="img-fluid" />
                        </div>
                    </div>

                    <div className="card single-entry">
                        <div className="winner-profile">
                            <img src="img/entries/user-profile-1.jpg" alt="user-profile-1" className="img-fluid" />
                        </div>
                        <div className="artwork-section">
                            <img src="img/entries/art-entries-1.png" alt="art-entry-1" className="img-fluid" />
                        </div>
                    </div>

                </Row>    

                <Row className="entries-section justify-content-between mt-5 all-entries" id="#all-entries">

                    <div className="owl-carousel entriesContainer">

                    <div className="single-entry-slide">
                        <div className="card single-entry">
                            <div className="winner-profile">
                                <img src="img/entries/user-profile-1.jpg" alt="user-profile-1" className="img-fluid" />
                            </div>
                            <div className="artwork-section">
                                <img src="img/entries/art-entries-1.png" alt="art-entry-1" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div className="single-entry-slide">
                        <div className="card single-entry">
                            <div className="winner-profile">
                                <img src="img/entries/user-profile-1.jpg" alt="user-profile-1" className="img-fluid" />
                            </div>
                            <div className="artwork-section">
                                <img src="img/entries/art-entries-1.png" alt="art-entry-1" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div className="single-entry-slide">
                        <div className="card single-entry">
                            <div className="winner-profile">
                                <img src="img/entries/user-profile-1.jpg" alt="user-profile-1" className="img-fluid" />
                            </div>
                            <div className="artwork-section">
                                <img src="img/entries/art-entries-1.png" alt="art-entry-1" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div className="single-entry-slide">
                        <div className="card single-entry">
                            <div className="winner-profile">
                                <img src="img/entries/user-profile-1.jpg" alt="user-profile-1" className="img-fluid" />
                            </div>
                            <div className="artwork-section">
                                <img src="img/entries/art-entries-1.png" alt="art-entry-1" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div className="single-entry-slide">
                        <div className="card single-entry">
                            <div className="winner-profile">
                                <img src="img/entries/user-profile-2.jpg" alt="user-profile-1" className="img-fluid" />
                            </div>
                            <div className="artwork-section">
                                <img src="img/entries/art-entries-2.png" alt="art-entry-1" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div className="single-entry-slide">
                        <div className="card single-entry">
                            <div className="winner-profile">
                                <img src="img/entries/user-profile-3.jpg" alt="user-profile-1" className="img-fluid" />
                            </div>
                            <div className="artwork-section">
                                <img src="img/entries/art-entries-3.png" alt="art-entry-1" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div className="single-entry-slide">
                        <div className="card single-entry">
                            <div className="winner-profile">
                                <img src="img/entries/user-profile-4.jpg" alt="user-profile-1" className="img-fluid" />
                            </div>
                            <div className="artwork-section">
                                <img src="img/entries/art-entries-4.png" alt="art-entry-1" className="img-fluid" />
                            </div>
                        </div>
                    </div>


                    </div>

                </Row>    

                <div className="modal fade" id="more-winners" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">

                    <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
                        <div className="modal-content modal-content-winners">
                            <div className="modal-header">
                                <h5 className="modal-title text-center">More Winners</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">

                        <div className="owl-carousel allwinnersContainer">

                            <div className="single-entry-slide">
                                    <div className="card single-entry">
                                        <div className="winner-profile">
                                                <img src="img/entries/user-profile-1.jpg" alt="user-profile-1"
                                                    className="img-fluid"/>
                                        </div>

                                        <div className="artwork-section">
                                                <img src="img/entries/art-entries-1.png" alt="art-entry-1"
                                                    className="img-fluid"/>
                                        </div>
                                    </div>
                             </div>

                             <div className="single-entry-slide">
                                    <div className="card single-entry">
                                        <div className="winner-profile">
                                                <img src="img/entries/user-profile-1.jpg" alt="user-profile-1"
                                                    className="img-fluid"/>
                                        </div>

                                        <div className="artwork-section">
                                                <img src="img/entries/art-entries-1.png" alt="art-entry-1"
                                                    className="img-fluid"/>
                                        </div>
                                    </div>
                             </div>

                             <div className="single-entry-slide">
                                    <div className="card single-entry">
                                        <div className="winner-profile">
                                                <img src="img/entries/user-profile-3.jpg" alt="user-profile-1"
                                                    className="img-fluid"/>
                                        </div>

                                        <div className="artwork-section">
                                                <img src="img/entries/art-entries-3.png" alt="art-entry-1"
                                                    className="img-fluid"/>
                                        </div>
                                    </div>
                             </div>

                             <div className="single-entry-slide">
                                    <div className="card single-entry">
                                        <div className="winner-profile">
                                                <img src="img/entries/user-profile-2.jpg" alt="user-profile-1"
                                                    className="img-fluid"/>
                                        </div>

                                        <div className="artwork-section">
                                                <img src="img/entries/art-entries-2.png" alt="art-entry-1"
                                                    className="img-fluid"/>
                                        </div>
                                    </div>
                             </div>

                             <div className="single-entry-slide">
                                    <div className="card single-entry">
                                        <div className="winner-profile">
                                                <img src="img/entries/user-profile-4.jpg" alt="user-profile-1"
                                                    className="img-fluid"/>
                                        </div>

                                        <div className="artwork-section">
                                                <img src="img/entries/art-entries-4.png" alt="art-entry-1"
                                                    className="img-fluid"/>
                                        </div>
                                    </div>
                             </div>

                        </div>

                    </div>


                        </div>
                    </div>

                      

                </div>         

                    <div className="border-section-2">
                        <img src="img/yellow-border.png" alt="" className="img-fluid"/>
                    </div>

                    <div className="bg-arrow">
                        <a href="#recipes">
                            <img src="img/icons/dropdown-background.png" alt="arrow" className="img-fluid"/>
                        </a>
                    </div>     

                 </Container>   

            </div>

            )

        }

    }