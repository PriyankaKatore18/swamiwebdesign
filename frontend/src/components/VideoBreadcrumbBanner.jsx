import React from "react";
import "./VideoBreadcrumbBanner.css";

const BREADCRUMB_BANNER_IMAGE = "/assets/hero/banner.png";

const VideoBreadcrumbBanner = ({
  breadcrumb,
  heading,
  subtitle,
  videoSrc,
  imageSrc = BREADCRUMB_BANNER_IMAGE,
  height = "default", // "default" | "tall" | "short"
  align = "center", // "center" | "left"
}) => {
  const heightClass =
    height === "tall"
      ? "video-banner--tall"
      : height === "short"
      ? "video-banner--short"
      : "video-banner--default";

  const alignClass =
    align === "left"
      ? "video-banner--align-left"
      : "video-banner--align-center";

  return (
    <section className={`video-banner ${heightClass} ${alignClass}`}>
      <div className="video-banner__background">
        {videoSrc ? (
          <video
            className="video-banner__video"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <>
            <img src={imageSrc} alt="" className="video-banner__image-fallback" aria-hidden />
            <div className="video-banner__gradient-fallback video-banner__gradient-fallback--overlay" />
          </>
        )}
        <div className="video-banner__overlay" />
      </div>

      <div className="video-banner__content">
        {breadcrumb && (
          <p className="video-banner__breadcrumb video-banner__text video-banner__text--delay-1">
            {breadcrumb}
          </p>
        )}

        {heading && (
          <h1 className="video-banner__heading video-banner__text video-banner__text--delay-2">
            {heading}
          </h1>
        )}

        {subtitle && (
          <p className="video-banner__subtitle video-banner__text video-banner__text--delay-3">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default VideoBreadcrumbBanner;

