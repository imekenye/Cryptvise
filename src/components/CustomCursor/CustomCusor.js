import React, { useEffect, useRef } from 'react';
import s from './custom.module.css';

function CustomCusor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const MouseX = clientX - cursorRef.current.clientWidth / 2;
      const MouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${MouseX}px,${MouseY}px,0)`;
    });
  }, []);
  return <div ref={cursorRef} className={s.custom__cursor} />;
}

export default CustomCusor;
