import React, { useState } from 'react';
import Logo from './assets/Logo.svg';
import Logo1 from './assets/Logo1.svg';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
      document.querySelector('.logo').style.display = isOpen ? 'block' : 'none';
      document.querySelector('.logo1').style.display = isOpen ? 'none' : 'block';
      document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };
  
    const closeMenu = () => {
      setIsOpen(false);
      document.body.style.overflow = 'auto';
      // document.querySelector('.logo1').style.display = isOpen ? 'none' : 'block';
      // document.querySelector('.logo').style.display = isOpen ? 'block' : 'none';
    };
  
    return (
      <header className='header'>
        <div className='header__container'>
          <div className='logo__container'>
            <img src={Logo} alt="Logo" className='logo' />
            <img src={Logo1} alt="Logo1" className='logo1'/>
          </div>
          <div className={`link__container ${isOpen ? 'open' : ''}`}>
            <a href="#services" className='orange__btn' onClick={closeMenu}>Services</a>
            <a href="#reviews" className='orange__btn' onClick={closeMenu}>Reviews</a>
            <a href="#about" className='orange__btn' onClick={closeMenu}>About Us</a>
            <a href="#contact" className='orange__btn' onClick={closeMenu}>Contact</a>
            <a className='mob mob_margin' href="mailto:gtldetal@gmail.com">gtldetal@gmail.com</a>
            <a className='mob' href="tel:+37599944316">+375 99 94 4316</a>
            <p className='mob'>625 W 4th Davenport, IA 52801-1046 USA</p>
          </div>
          <div className='burger' onClick={toggleMenu}>
            <div className={`burger__icon ${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
