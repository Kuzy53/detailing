import React, { useEffect, useRef } from 'react';
import './BeforeAfterSlider.css';
import Wash2 from './assets/Wash2.png'
import Wash3 from './assets/Wash3.png'


const BeforeAfterSlider1 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const beforeAfterContainer = containerRef.current;
    const before = beforeAfterContainer.querySelector('.bal-before');
    const beforeText = beforeAfterContainer.querySelector('.bal-beforePosition');
    const afterText = beforeAfterContainer.querySelector('.bal-afterPosition');
    const handle = beforeAfterContainer.querySelector('.bal-handle');

    const setContainerWidth = () => {
      beforeAfterContainer.querySelector('.bal-before-inset').style.width = beforeAfterContainer.offsetWidth + 'px';
    };

    window.addEventListener('resize', setContainerWidth);
    setContainerWidth();

    before.style.width = '50%';
    handle.style.left = '50%';

    const handleTouchMove = (e) => {
      let containerWidth = beforeAfterContainer.offsetWidth;
      let currentPoint = e.changedTouches[0].clientX;
      let startOfDiv = beforeAfterContainer.offsetLeft;
      let modifiedCurrentPoint = currentPoint - startOfDiv;

      if (modifiedCurrentPoint > 10 && modifiedCurrentPoint < beforeAfterContainer.offsetWidth - 10) {
        let newWidth = (modifiedCurrentPoint * 100) / containerWidth;
        before.style.width = newWidth + '%';
        afterText.style.zIndex = '1';
        handle.style.left = newWidth + '%';
      }
    };

    const handleMouseMove = (e) => {
      let containerWidth = beforeAfterContainer.offsetWidth;
      let widthChange = e.offsetX;
      let newWidth = (widthChange * 100) / containerWidth;

      if (e.offsetX > 10 && e.offsetX < beforeAfterContainer.offsetWidth - 10) {
        before.style.width = newWidth + '%';
        afterText.style.zIndex = '1';
        handle.style.left = newWidth + '%';
      }
    };

    beforeAfterContainer.addEventListener('touchstart', (e) => {
      beforeAfterContainer.addEventListener('touchmove', handleTouchMove);
    });

    beforeAfterContainer.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', setContainerWidth);
      beforeAfterContainer.removeEventListener('touchmove', handleTouchMove);
      beforeAfterContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="mainSection">


      <div ref={containerRef} id="one" className="bal-container">
        <div className="bal-after">
          <img src={Wash2} alt="After" />
          <div className="bal-afterPosition"></div>
        </div>
        <div className="bal-before">
          <div className="bal-before-inset">
            <img src={Wash3} alt="Before" />
            <div className="bal-beforePosition beforeLabel"></div>
          </div>
        </div>
        <div className="bal-handle">
          <span className="handle-left-arrow"></span>
          <span className="handle-right-arrow"></span>
        </div>
      </div>
      
    </div>
  );
};

export default BeforeAfterSlider1;
