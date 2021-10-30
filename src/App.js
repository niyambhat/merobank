import './App.css';
import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import Intro from './components/Intro'
import Header from './components/Header'
import MiniHeader from './components/MiniHeader';
import ProductList from './components/ProductList';
import Registeration from './components/Forms/Registeration';
import PortfolioList from './components/Portfolio/PortfolioList';
import Contact from './components/Forms/Contact';
import Toggle from './components/Toggle';
import { useState } from 'react'
import { useContext } from 'react';
import { ThemeContext } from './Context';


const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  console.log(darkMode);
  return(  
  <div className="wrapper" id="the-wrap" style={{
    backgroundColor: darkMode ? "#222" : "white",
    color: darkMode && "white",
  }}>
  <Toggle/>
  <Header/>
  <MiniHeader/>
  <Intro/>
  <ProductList/>
  <Registeration/>
  <PortfolioList />
  <Contact/>
  </div>
  )
}


export default App;
