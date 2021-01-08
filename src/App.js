import React, { Component } from 'react';
import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import AboutContest from './components/AboutContest';
import FeaturedEntries from './components/FeaturedEntries';
import Recipes from './components/Recipes';
import Footer from './components/Footer';

class App extends Component {
  render (){

    return (
      <>
      
        <Header></Header>
        <HomeBanner></HomeBanner>
        <AboutContest></AboutContest>
        <FeaturedEntries></FeaturedEntries>
        <Recipes></Recipes>
        <Footer></Footer>

      </>
  
    );

  }
}

export default App;
