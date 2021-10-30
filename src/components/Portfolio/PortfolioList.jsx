import React from 'react'
import Portfolio from './Portfolio'
import {portfo} from '../../data'


function PortfolioList() {

    return (
    <div className="p-l">
        <div className="pl-head">
            <h2>Portfolio</h2>
            <p>View one of my interisting UI/UX Projects.</p>
        </div>
      <div className="main-list"> 
      
      {portfo.map(portfo=>{
              return(
              <Portfolio image={portfo.image}/>
              )})}
       
       </div>
    </div>
    )
}

export default PortfolioList
