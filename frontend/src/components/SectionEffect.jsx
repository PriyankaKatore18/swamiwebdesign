import React from 'react';
import './SectionEffects.css';

/**
 * Wraps a section with a background effect (animation/video-style).
 * variant: "bento" | "about" | "methodology" | "tech" | "reviews" | "newsletter"
 */
const SectionEffect = ({ variant, children, className = '', ...props }) => {
  return (
    <section className={`section-effect section-effect--${variant} ${className}`.trim()} {...props}>
      <div className="section-effect__bg" aria-hidden />
      <div className="section-effect__content">
        {children}
      </div>
    </section>
  );
};

export default SectionEffect;
