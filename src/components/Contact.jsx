import React from 'react'
import './Contact.css'
import { useRef } from "react"  //Hook to capture form elements
import emailjs from 'emailjs-com';
import { useState } from 'react'

function Contact() {
const formRef = useRef();
const handleSubmit = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_ssjfmgg', 'template_g39rx3e', formRef.current, 'user_LMohuWGm8AOdOBkxZWjL3')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
}

const [done, setDone] = useState(false);
function myFunction(){
    setDone(false);
}
window.onload = myFunction;


    return (
        <div className="p-l">
        <div className="pl-head">
            <h2>Contact us</h2>
            <p>Contact us if you have any questions.</p>
        </div>
      <div className="mid-wrap"> 
        <div className="l-col">

        </div>
        <div className="r-col">
            <form ref={formRef} onSubmit={handleSubmit}>   
                <input type="text" placeholder="What is your name?" name="user_name"/>
                <input type="text" placeholder="Subject" name="user_subject"/>
                <input type="text" placeholder="Email" name="user_email"/>
                <textarea rows="5" place="Message" name="message"/>
                <button className="btn-primary">Submit</button> 
                {done && "Thank you for your email."}
            </form>
        </div>
      </div>
      </div>
    )
}

export default Contact
