import React from 'react'
import './Portfolio.css'


function Portfolio(props) {
    return (
        <div className="p-wrap portfolio">
        <div className="p-nav">
            <ul>
                <li>o</li>
                <li>o</li>
                <li>o</li>
            </ul>
        </div> 
        <div className="p-main">
        <img src={props.image} alt='post'/>
        </div>  
        </div>
    )
}

export default Portfolio
