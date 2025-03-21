import React from "react";

interface ContentProps {
  heading: string;
  desc: string;
}

const Content = ({ heading, desc }: ContentProps) => {
  return (
    <div className="flex flex-col lg:gap-y-sp24 gap-y-[14px] lg:w-[48.125vw]">
      <h2
        dangerouslySetInnerHTML={{ __html: heading }}
        className="lg:text32 mtext20 text-white font-medium"
      ></h2>
      <p
        dangerouslySetInnerHTML={{ __html: desc }}
        className="lg:text18 mtext16"
      ></p>
    </div>
  );
};

export default Content;
