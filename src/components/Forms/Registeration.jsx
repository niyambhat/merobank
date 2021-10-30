
import React from 'react'
import '../Forms/Registration.css'
import action from './action'

function hideModal(){
    document.getElementById('reg').style.display='none';  
} 


function Registeration() {
    return (
<div id="reg">
   <form className="reg-form">
        <div className="container">
            <h2>Register</h2>
            <span id="close" onClick={hideModal}>x</span>
            <p>Please fill in this form to create an account.</p>
            <hr/>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
            <hr/>
            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
            <input type="submit" className="registerbtn btn btn-primary" value='Register'/>
        </div> 
        
        <div className="container signin">
            <p>Already have an account? <a href="#">Sign in</a>.</p>
        </div>  
    </form>
</div>    
    )
}

export default Registeration
