import React from "react";

interface Props {
  feature: { heading: string; desc: string; bigHeading?: boolean };
}

const Feature = ({ feature }: Props) => {
  return (
    <div className="lg:p-sp24 lg:pt-sp72 border20 p-6 pt-[72px] relative lg:sticky lg:top-[9vw] bg-[#01284F]">
      <span className="atlwh_Full border-2 border-transparent gradient_border border20 pointer-events-none"></span>
      <div className="relative z-[2] flex flex-col lg:gap-y-[0.97222222222vw] gap-y-[14px]">
        <h5
          className={`${feature?.bigHeading ? " lg:text48 mtext26 font-[700]" : "lg:text20 mtext20 font-medium"}`}
        >
          {feature.heading}
        </h5>
        <span className="h-[1px] w-full min-h-[1px] min-w-full button_gradient relative z-[2]"></span>
        <p className="lg:text16 mtext16">{feature.desc}</p>
      </div>
    </div>
  );
};

export default Feature;
