import React from 'react';
import './Contact.css';
export default function Contact() {
    return (
        <div className='contact'>
       <div className='form'>
        <form className="contact-form">
        <h1>Contact Me</h1>
        <div className="form-group">
        <label htmlFor="name"></label>
        <input type="text" className="form-control" id="name" placeholder="Enter name" />
        </div>
        <div className="form-group">
        <label htmlFor="email"></label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
        <label htmlFor="message"></label>
        <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <div className="form-group form-check">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
</form>
    
       </div>
        </div>
    );
    }