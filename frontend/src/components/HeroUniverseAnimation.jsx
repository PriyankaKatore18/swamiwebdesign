import React, { useEffect, useRef } from 'react';
import './HeroUniverseAnimation.css';

const CENTER_IMAGE = '/assets/hero/center-design.png';

const OrbitDots = ({ count, className }) => (
  <>
    {Array.from({ length: count }).map((_, i) => {
      const angle = (360 / count) * i;
      return (
        <div
          key={i}
          className={className}
          style={{
            transform: `rotate(${angle}deg) translateY(-50%)`,
          }}
        />
      );
    })}
  </>
);

const HeroUniverseAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const stars = Array.from({ length: 80 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.5 + Math.random() * 1.5,
      twinkle: Math.random() * Math.PI * 2,
      speed: 0.002 + Math.random() * 0.004,
    }));

    const draw = () => {
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      stars.forEach((s) => {
        s.twinkle += s.speed;
        const alpha = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(s.twinkle));
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="hero-universe" aria-hidden>
      <canvas ref={canvasRef} className="hero-universe__stars" />
      <div className="hero-universe__earth-wrap">
        {/* Inner orbit with small circles */}
        <div className="hero-universe__orbit hero-universe__orbit--1">
          <OrbitDots count={6} className="hero-universe__orbit-dot hero-universe__orbit-dot--inner" />
        </div>
        {/* Outer orbit with small circles */}
        <div className="hero-universe__orbit hero-universe__orbit--2">
          <OrbitDots count={8} className="hero-universe__orbit-dot hero-universe__orbit-dot--outer" />
        </div>
        {/* Center: website designing image */}
        <div className="hero-universe__center">
          <img src={CENTER_IMAGE} alt="Web design" className="hero-universe__center-img" />
        </div>
      </div>
      <div className="hero-universe__glow" />
    </div>
  );
};

export default HeroUniverseAnimation;
