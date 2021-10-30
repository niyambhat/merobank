import React from 'react'
import '../components/intro.css'
import Me from '../Assets/Profile.jpg'

function intro() {
    return (
        <div className="i">
            <div className="i-left">
                <h2>Future of Banking</h2>
                <h1 className="i-intro">WELOCOME TO MEROBANK</h1>
                <p>A conceptual banking application</p>
            </div>
            <div className="i-right">
                <img src={Me} className="i-img" alt="post"/>
            </div>
        </div>
    )
}

export default intro
