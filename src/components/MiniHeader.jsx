import React from 'react'
import './MiniHeader.css'
import M from '../Assets/M.png'

function MiniHeader() {
    return (
        <div>
            <div className="secondary-nav">
                <div className="logo">
                    <img src={M} alt="pop"/>
                </div>
                <ul className="second-nav">
                    <li>Home</li>
                    <li>Products</li>
                    <li>About us</li>
                    <li>Calculator</li>
                </ul>
                <div className="Sign-in">
                <a href="" className="btn-primary">Sign In</a>
                </div> 

            </div>
        </div>
    )
}

export default MiniHeader
