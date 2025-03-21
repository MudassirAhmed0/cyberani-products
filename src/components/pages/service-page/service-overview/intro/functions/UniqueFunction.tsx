import React from "react";
interface Props {
  funtion: { heading: string; desc: string; widthFull?: boolean };
  index: number;
}

const UniqueFunction = ({ funtion, index }: Props) => {
  return (
    <div
      className={`${funtion?.widthFull ? "" : "lg:w-[47.733%]"} w-full flex flex-col lg:gap-y-sp16 gap-y-4`}
    >
      <div className="flex items-center lg:gap-x-sp20 gap-x-4">
        <span className="lg:text48 text-[48px] gradient_text !font-bold">
          {" "}
          {index < 9 && 0}
          <span className="gradient_text">{index + 1}</span>
        </span>
        <div
          className="lg:text24 mtext24 font-medium"
          dangerouslySetInnerHTML={{ __html: funtion.heading }}
        ></div>
      </div>
      <div
        className="lg:text22 mtext22 flex flex-col lg:gap-y-sp16 gap-y-4"
        dangerouslySetInnerHTML={{ __html: funtion.desc }}
      ></div>
    </div>
  );
};

export default UniqueFunction;
