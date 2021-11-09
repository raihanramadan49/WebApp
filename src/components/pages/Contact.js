import React from 'react';
import '../../App.css';
import './Contact.css';
import { Button } from '../Button';

export default function Contact() {
    return (
        <>
            <video src='/videos/video-3.mp4' autoPlay loop muted />
            <div className='contact-container'>
                <h1>CONTACT ME NOW</h1>
                <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    WHATSAPP ME
                </Button> 
            </div>
            </div>
        </>
    )
}