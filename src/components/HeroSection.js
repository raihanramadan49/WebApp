import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video1 from '../videos/video-1.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video1} alt="video-beranda" autoPlay loop muted />
            <h1>Hi!</h1>
            <p>Welcome to my personal web!</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                </Button> 
            </div>
        </div>
    )
}

export default HeroSection
