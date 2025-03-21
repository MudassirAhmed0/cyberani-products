import React from "react";

interface TitleDesignLineProps {
  gradientLine?: boolean;
}

const TitleDesignLine: React.FC<TitleDesignLineProps> = ({ gradientLine = false }) => {
  return (
    <div className="flex justify-between items-center w-full">
      {gradientLine ? (
        <span className="block w-full h-[1px] button_gradient -scale-x-100 opacity-[0.79]"></span>
      ) : (
        <span className="block w-full h-[1px] bg-white"></span>
      )}
      <span
        className={`${
          gradientLine ? "border-dark-teal" : "border-white"
        } lg:size-sp10 lg:min-w-sp10 size-2.5 min-w-2.5 block border rounded-full`}
      ></span>
    </div>
  );
};

export default TitleDesignLine;
