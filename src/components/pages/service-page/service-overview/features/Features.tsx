import Image from "next/image";
import React from "react";
import Feature from "./Feature";
import BackGrounds from "./backgrounds/BackGrounds";
import Content from "./Content";

interface Props {
  features: {
    heading: string;
    desc?: string;
    items: {
      heading: string;
      desc: string;
    }[];
  };
}

const Features = ({ features }: Props) => {
  if (!features) return null;
  return (
    <div className="relative border border-[#fff3]">
      <BackGrounds />
      <div className="flex flex-col lg:flex-row justify-between lg:gap-sp56 gap-16 lg:py-sp140 pt-[140px] pb-[100px] ltr:lg:pl-sp100 rtl:lg:pr-sp100 lg:ltr:pr-0 lg:rtl:pl-0 px-[30px] text-white relative z-[2]">
        {features?.desc ? (
          <Content heading={features?.heading} desc={features?.desc} />
        ) : (
          <div className="lg:w-[unset] w-full">
            <h2
              dangerouslySetInnerHTML={{ __html: features.heading }}
              className="text32 text-white lg:text-start text-center"
            ></h2>
          </div>
        )}
        <div className="flex items-start lg:gap-x-sp20">
          {!features?.desc ? (
            <div className="flex flex-col lg:gap-y-sp64 gap-y-16 lg:min-w-[40.6944444444vw] lg:w-[40.6944444444vw] w-full">
              {features?.items?.map((feature, index) => (
                <Feature key={index} feature={feature} />
              ))}
            </div>
          ) : (
            ""
          )}
          <div className="lg:min-w-sp80 lg:w-sp80 lg:h-[11.25vw] sticky lg:top-sp180 lg:mt-sp32 hidden lg:block flipped">
            <Image
              fill
              src="/images/service-page/indicator.png"
              alt="indicator"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
