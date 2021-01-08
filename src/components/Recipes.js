import React, { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap';

export default class About extends Component {
    render(){

        return(

            <div id="recipes" className="recipes-background">

                <Container fluid className="center-content recipe-selection-section">

                <div className="recipe-selection">

                    <ul className="d-flex justify-content-center">

                        <li class="single-recipe-selection active-recipe" data-target="chapati" data-toggle="tooltip"
                                data-placement="top" title="Select recipe">
                            <img src="img/recipes/recipe-1.png" alt="recipe-1" class="img-fluid" />
                        </li>

                        <li class="single-recipe-selection" data-target="ugali">
                            <img src="img/recipes/recipe-2.png" alt="recipe-2" class="img-fluid" data-toggle="tooltip"
                                data-placement="top" title="Select recipe" />
                        </li>

                        <li class="single-recipe-selection" data-target="samosa">
                            <img src="img/recipes/recipe-3.png" alt="recipe-3" class="img-fluid" data-toggle="tooltip"
                                data-placement="top" title="Select recipe" />
                        </li>

                        <li class="single-recipe-selection" data-target="mandazi">
                            <img src="img/recipes/recipe-4.png" alt="recipe-4" class="img-fluid" data-toggle="tooltip"
                                data-placement="top" title="Select recipe" />
                        </li>

                     </ul>

                </div>       

                <div className="recipe-filter d-flex justify-content-end">

                    <ul className="d-flex"> 

                        <li class="link pr-3">
                            <a href="#steps" class="active text-white steps" data-target="steps" data-toggle="tooltip"
                                data-placement="top" title="Click here to view steps">
                                Steps
                            </a>
                        </li>

                        <li class="link pr-3">
                            <a href="#ingredients" class="text-white" data-target="ingredients" data-toggle="tooltip"
                                data-placement="top" title="Click here to view ingredients">
                                Ingredients
                            </a>
                        </li>

                    </ul>

                </div> 

                <div className="recipe chapati">

                    <Row>
                        <h2 className="text-white">Butternut Chapati</h2>
                    </Row>

                    <div className="owl-carousel recipeContainer steps" id="#steps">
                 
                        <div className="recipe-slider d-flex">

                            <div className="cnt-recipe-section steps">

                                <div className="d-flex align-items-baseline">

                                    <span className="list-style text-white mr-3">01</span>

                                    <p className="text-white single-recipe">
                                        Mix ¾ of the flour with the boiled butternut (peeled), sugar and cinammon
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="recipe-slider d-flex">

                            <div className="cnt-recipe-section steps">

                                <div className="d-flex align-items-baseline">

                                    <span className="list-style text-white mr-3">02</span>

                                    <p className="text-white single-recipe">
                                        Add cooking oil and water mixed with salt and start kneading
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="recipe-slider d-flex">

                            <div className="cnt-recipe-section steps">

                                <div className="d-flex align-items-baseline">

                                    <span className="list-style text-white mr-3">03</span>

                                    <p className="text-white single-recipe">
                                        Knead until the dough becomes tough and does not stick to the hands then cover
                                        with a foil and set aside for 10 minutes
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="recipe-slider d-flex">

                            <div className="cnt-recipe-section steps">

                                <div className="d-flex align-items-baseline">

                                    <span className="list-style text-white mr-3">04</span>

                                    <p className="text-white single-recipe">
                                    Roll the dough until flat and spread some oil on it
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="recipeContainer ingredients" id="#ingredients">

                        <div className="recipe-slider d-flex">

                        <Col md = {6} className = "cnt-recipe-section">

                        <h2 className="text-white">For Date Filing:</h2>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">01</span>

                                <p className="text-white single-recipe">
                                    Soko Home Baking flour</p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">02</span>
                                <p className="text-white single-recipe">
                                    1 tbs sugar
                                </p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">01</span>

                                <p className="text-white single-recipe">
                                    Soko Home Baking flour</p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">02</span>
                                <p className="text-white single-recipe">
                                    1 tbs sugar
                                </p>
                            </div>

                        </Col>

                        <Col md = {6} className = "cnt-recipe-section">

                            <h2 className="text-white">Dough and assembly:</h2>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">01</span>

                                <p className="text-white single-recipe">
                                    Soko Home Baking flour</p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">02</span>
                                <p className="text-white single-recipe">
                                    1 tbs sugar
                                </p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">01</span>

                                <p className="text-white single-recipe">
                                    Soko Home Baking flour</p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">02</span>
                                <p className="text-white single-recipe">
                                    1 tbs sugar
                                </p>
                            </div>

                        </Col>

                        </div>

                    </div>

                </div>     

                <div className="recipe ugali">

                    <Row>
                        <h2 className="text-white">Ugali Fries</h2>
                    </Row>

                    <div className="owl-carousel recipeContainer steps" id="#steps">
                 
                        <div className="recipe-slider d-flex">

                            <div className="cnt-recipe-section steps">

                                <div className="d-flex align-items-baseline">

                                    <span className="list-style text-white mr-3">01</span>

                                    <p className="text-white single-recipe">
                                        Mix ¾ of the flour with the boiled butternut (peeled), sugar and cinammon
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="recipe-slider d-flex">

                            <div className="cnt-recipe-section steps">

                                <div className="d-flex align-items-baseline">

                                    <span className="list-style text-white mr-3">02</span>

                                    <p className="text-white single-recipe">
                                        Add cooking oil and water mixed with salt and start kneading
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="recipe-slider d-flex">

                            <div className="cnt-recipe-section steps">

                                <div className="d-flex align-items-baseline">

                                    <span className="list-style text-white mr-3">03</span>

                                    <p className="text-white single-recipe">
                                        Knead until the dough becomes tough and does not stick to the hands then cover
                                        with a foil and set aside for 10 minutes
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="recipe-slider d-flex">

                            <div className="cnt-recipe-section steps">

                                <div className="d-flex align-items-baseline">

                                    <span className="list-style text-white mr-3">04</span>

                                    <p className="text-white single-recipe">
                                    Roll the dough until flat and spread some oil on it
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="recipeContainer ingredients" id="#ingredients">

                        <div className="recipe-slider d-flex">

                        <Col md = {6} className = "cnt-recipe-section">

                        <h2 className="text-white">For Date Filing:</h2>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">01</span>

                                <p className="text-white single-recipe">
                                    Soko Home Baking flour</p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">02</span>
                                <p className="text-white single-recipe">
                                    1 tbs sugar
                                </p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">01</span>

                                <p className="text-white single-recipe">
                                    Soko Home Baking flour</p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">02</span>
                                <p className="text-white single-recipe">
                                    1 tbs sugar
                                </p>
                            </div>

                        </Col>

                        <Col md = {6} className = "cnt-recipe-section">

                            <h2 className="text-white">Dough and assembly:</h2>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">01</span>

                                <p className="text-white single-recipe">
                                    Soko Home Baking flour</p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">02</span>
                                <p className="text-white single-recipe">
                                    1 tbs sugar
                                </p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">01</span>

                                <p className="text-white single-recipe">
                                    Soko Home Baking flour</p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">02</span>
                                <p className="text-white single-recipe">
                                    1 tbs sugar
                                </p>
                            </div>

                        </Col>

                        </div>

                    </div>

                </div>   
                
                <div className="recipe samosa">

                    <Row>
                        <h2 className="text-white">Samosa</h2>
                    </Row>

                    <div className="owl-carousel recipeContainer steps" id="#steps">
                 
                        <div className="recipe-slider d-flex">

                            <div className="cnt-recipe-section steps">

                                <div className="d-flex align-items-baseline">

                                    <span className="list-style text-white mr-3">01</span>

                                    <p className="text-white single-recipe">
                                        Mix ¾ of the flour with the boiled butternut (peeled), sugar and cinammon
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="recipe-slider d-flex">

                            <div className="cnt-recipe-section steps">

                                <div className="d-flex align-items-baseline">

                                    <span className="list-style text-white mr-3">02</span>

                                    <p className="text-white single-recipe">
                                        Add cooking oil and water mixed with salt and start kneading
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="recipe-slider d-flex">

                            <div className="cnt-recipe-section steps">

                                <div className="d-flex align-items-baseline">

                                    <span className="list-style text-white mr-3">03</span>

                                    <p className="text-white single-recipe">
                                        Knead until the dough becomes tough and does not stick to the hands then cover
                                        with a foil and set aside for 10 minutes
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="recipe-slider d-flex">

                            <div className="cnt-recipe-section steps">

                                <div className="d-flex align-items-baseline">

                                    <span className="list-style text-white mr-3">04</span>

                                    <p className="text-white single-recipe">
                                    Roll the dough until flat and spread some oil on it
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="recipeContainer ingredients" id="#ingredients">

                        <div className="recipe-slider d-flex">

                        <Col md = {6} className = "cnt-recipe-section">

                        <h2 className="text-white">For Date Filing:</h2>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">01</span>

                                <p className="text-white single-recipe">
                                    Soko Home Baking flour</p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">02</span>
                                <p className="text-white single-recipe">
                                    1 tbs sugar
                                </p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">01</span>

                                <p className="text-white single-recipe">
                                    Soko Home Baking flour</p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">02</span>
                                <p className="text-white single-recipe">
                                    1 tbs sugar
                                </p>
                            </div>

                        </Col>

                        <Col md = {6} className = "cnt-recipe-section">

                            <h2 className="text-white">Dough and assembly:</h2>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">01</span>

                                <p className="text-white single-recipe">
                                    Soko Home Baking flour</p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">02</span>
                                <p className="text-white single-recipe">
                                    1 tbs sugar
                                </p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">01</span>

                                <p className="text-white single-recipe">
                                    Soko Home Baking flour</p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">02</span>
                                <p className="text-white single-recipe">
                                    1 tbs sugar
                                </p>
                            </div>

                        </Col>


                        </div>


                    </div>

                </div>

                <div className="recipe mandazi">

                    <Row>
                        <h2 className="text-white">Mandazi</h2>
                    </Row>

                    <div className="owl-carousel recipeContainer steps" id="#steps">
                 
                        <div className="recipe-slider d-flex">

                            <div className="cnt-recipe-section steps">

                                <div className="d-flex align-items-baseline">

                                    <span className="list-style text-white mr-3">01</span>

                                    <p className="text-white single-recipe">
                                        Mix ¾ of the flour with the boiled butternut (peeled), sugar and cinammon
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="recipe-slider d-flex">

                            <div className="cnt-recipe-section steps">

                                <div className="d-flex align-items-baseline">

                                    <span className="list-style text-white mr-3">02</span>

                                    <p className="text-white single-recipe">
                                        Add cooking oil and water mixed with salt and start kneading
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="recipe-slider d-flex">

                            <div className="cnt-recipe-section steps">

                                <div className="d-flex align-items-baseline">

                                    <span className="list-style text-white mr-3">03</span>

                                    <p className="text-white single-recipe">
                                        Knead until the dough becomes tough and does not stick to the hands then cover
                                        with a foil and set aside for 10 minutes
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="recipe-slider d-flex">

                            <div className="cnt-recipe-section steps">

                                <div className="d-flex align-items-baseline">

                                    <span className="list-style text-white mr-3">04</span>

                                    <p className="text-white single-recipe">
                                    Roll the dough until flat and spread some oil on it
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="recipeContainer ingredients" id="#ingredients">

                        <div className="recipe-slider d-flex">

                        <Col md = {6} className = "cnt-recipe-section">

                        <h2 className="text-white">For Date Filing:</h2>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">01</span>

                                <p className="text-white single-recipe">
                                    Soko Home Baking flour</p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">02</span>
                                <p className="text-white single-recipe">
                                    1 tbs sugar
                                </p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">01</span>

                                <p className="text-white single-recipe">
                                    Soko Home Baking flour</p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">02</span>
                                <p className="text-white single-recipe">
                                    1 tbs sugar
                                </p>
                            </div>

                        </Col>

                        <Col md = {6} className = "cnt-recipe-section">

                            <h2 className="text-white">Dough and assembly:</h2>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">01</span>

                                <p className="text-white single-recipe">
                                    Soko Home Baking flour</p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">02</span>
                                <p className="text-white single-recipe">
                                    1 tbs sugar
                                </p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">01</span>

                                <p className="text-white single-recipe">
                                    Soko Home Baking flour</p>
                            </div>

                            <div className="d-flex align-items-baseline">
                                <span className="list-style text-white mr-3">02</span>
                                <p className="text-white single-recipe">
                                    1 tbs sugar
                                </p>
                            </div>

                        </Col>


                        </div>


                    </div>

                </div>      

                </Container>



            </div>

        )

    }   

}    