import React from 'react';
import '../../App.css';
import './About.css';

export default function About() {
    return (
        <>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <div className='about-container'>
                <h1>ABOUT ME</h1>
                <div className='about-me'>
                    <p>Saya adalah mahasiswa Teknologi Informasi</p>
                    <p>Universitas Gadjah Mada</p>
                </div>
            </div>
        </>
    )
}