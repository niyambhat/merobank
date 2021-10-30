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

let x=10;
class App extends Component{
  
render(){ 
  return(
    
  <div className="wrapper" id="the-wrap">
  <Header/>
  <MiniHeader/>
  <Intro/>
  <ProductList/>
  <Registeration/>
  <PortfolioList />
  </div>
  )
}
}  

export default App;
