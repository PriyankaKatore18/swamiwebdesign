import React from 'react';
import './WhyChooseVisual.css';

const orbitMetrics = [
  { label: 'SEO', className: 'why-choose-visual__metric--seo', delay: '0s' },
  { label: 'Speed', className: 'why-choose-visual__metric--speed', delay: '0.35s' },
  { label: 'Mobile', className: 'why-choose-visual__metric--mobile', delay: '0.7s' },
  { label: 'Leads', className: 'why-choose-visual__metric--leads', delay: '1.05s' },
];

const WhyChooseVisual = () => {
  return (
    <div className="why-choose-visual" aria-hidden="true">
      <div className="why-choose-visual__glow" />
      <div className="why-choose-visual__orbit why-choose-visual__orbit--outer" />
      <div className="why-choose-visual__orbit why-choose-visual__orbit--inner" />

      <div className="why-choose-visual__dashboard">
        <div className="why-choose-visual__browser-bar">
          <span className="why-choose-visual__dot" />
          <span className="why-choose-visual__dot" />
          <span className="why-choose-visual__dot" />
          <span className="why-choose-visual__browser-pill">Rank + Convert</span>
        </div>

        <div className="why-choose-visual__dashboard-body">
          <span className="why-choose-visual__line why-choose-visual__line--lg" />
          <span className="why-choose-visual__line" />
          <span className="why-choose-visual__line why-choose-visual__line--sm" />

          <div className="why-choose-visual__chart" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      {orbitMetrics.map((metric) => (
        <div key={metric.label} className={`why-choose-visual__metric ${metric.className}`}>
          <span style={{ animationDelay: metric.delay }}>{metric.label}</span>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseVisual;
