import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import './notfound.css';
import Footer from '../../Shared/Footer/Footer'

const NotFound = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="notfound_container">
        <div className="notfound_content" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
          <h1 className="notfound_title">Oops!</h1>
          <div className="notfound_404">404</div>
          <Link to="/" className="notfound_btn">Take Me Home</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;