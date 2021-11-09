import React from 'react';
import '../../App.css';
import './Contact.css';
import { ButtonWA } from '../ButtonWA';
import video3 from '../../videos/video-3.mp4';

export default function Contact() {
    return (
        <>
            <video src={video3} alt="video-contact" autoPlay loop muted />
            <div className='contact-container'>
                <h1>CONTACT ME NOW</h1>
                <div className='hero-btns'>
                <ButtonWA className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    <i class='fab fa-whatsapp' />
                    WHATSAPP ME
                </ButtonWA> 
            </div>
            </div>
        </>
    )
}