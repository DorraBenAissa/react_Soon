import React, { useState, useEffect, useRef } from "react";
import "./../assets/css/odometer.css"; // le style pour l'animation

function Odometer({ value }) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        },
        { threshold: 0.5 } // déclenche quand 50% du composant est visible
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, [hasStarted]);
  
    useEffect(() => {
      if (!hasStarted) return;
  
      let start = 0;
      const steps = 50;
      const increment = value / steps;
      const interval = 30;
  
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, interval);
  
      return () => clearInterval(timer);
    }, [hasStarted, value]);
  
    return (
      <span ref={ref} className="odometer">
        {count}
      </span>
    );
  }
  
  export default Odometer;