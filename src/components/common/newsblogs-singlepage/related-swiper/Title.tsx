import React from "react";
import TitleDesignLine from "../../TitleDesignLine";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <div className="myContainer flex flex-col items-center lg:items-start">
      <div className="flex flex-col items-start">
        <h2
          dangerouslySetInnerHTML={{ __html: title }}
          className={`lg:text32 mtext32 font-medium lg:pb-sp10 pb-5`}
        ></h2>

        <TitleDesignLine gradientLine />
      </div>
    </div>
  );
};

export default Title;
