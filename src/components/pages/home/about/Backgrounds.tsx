import React from "react";

const Backgrounds = () => {
  return (
    <div className="atlwh_Full pointer-events-none about_bg">
      <span className="fixed top-0 lrf1 size-full about_overlay1 mix-blend-lighten"></span>
      <div className="fixed lrf1 bottom-[-19vh] lg:bottom-[-6vw] w-full lg:h-[57.3611111111vw] h-full z-[-1]">
        <video
          muted
          loop
          autoPlay
          playsInline
          className="atlwh_Full object-cover"
          src="/videos/about_bg.mp4"
          preload="auto" 
        ></video>
      </div>
      <span className="fixed top-0 w-full lg:h-[59.0277777778vw] h-[90vh] about_overlay2"></span>
      <span className="absolute top-0 w-full lg:h-[59.0277777778vw] h-[90vh] about_overlay2"></span>
    </div>
  );
};

export default Backgrounds;
