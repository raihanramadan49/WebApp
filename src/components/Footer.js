import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          SOCIAL MEDIA
        </p>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <a class='social-icon-link instagram' href='https://www.instagram.com/raihanrhm_/' target='_blank'
            aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a class='social-icon-link github' href='https://github.com/raihanramadan49' target='_blank'
            aria-label='Github'
            >
              <i class='fab fa-github' />
            </a>
            <a class='social-icon-link linkedin' href='https://www.linkedin.com/in/raihanrhm/' target='_blank'
            aria-label='Linkedin'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a class='social-icon-link dribbble' href='https://dribbble.com/raihan1st' target='_blank'
            aria-label='Dribbble'
            >
              <i class='fab fa-dribbble' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;