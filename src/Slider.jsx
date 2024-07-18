import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './App.css';

const Slider = () => {
    const slides = [
      "I always love how my car looks after visiting you. You consistently maintain high standards of cleanliness and order",
      "I’ve been using detailing services for several years now and am impressed every time. The team not only makes my car shine but also offers practical advice on maintenance. Highly recommend!",
      "I’m thrilled with the results! My car looks like it just rolled out of the showroom. Thanks to the team for the high-quality polishing and protective coating.",
    ];
  
    return (
        <>
        <h1 className='rew'>Reviews</h1>
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          interval: 3000,
          gap: '1rem',
          perPage: 3,
          perMove: 1,
          breakpoints: {
            768: {
              perPage: 1, // На мобильных устройствах по одной карточке
            },
            1024: {
              perPage: 2, // На планшетах по две карточки
            }
          }
        }}
      >
        {slides.map((text, index) => (
          <SplideSlide key={index}>
            <div className="slide">{text}</div>
          </SplideSlide>
        ))}
      </Splide>
      </>
    );
  };
  
  export default Slider;
