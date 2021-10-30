import React from 'react'
import '../components/Header.css'


function showModal(){
    document.getElementById('reg').style.display='block'; 
} 

function Header() {
    return (
        <div>
            <div className="navigation">
                <nav>
                    <ul className="main-nav">
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Locate us</a></li>
                        <li><a href="#" id='trigger-form' onClick={showModal}>Register</a></li>
                    </ul>                   
                </nav>
            </div>
        </div>
    )
}

export default Header
