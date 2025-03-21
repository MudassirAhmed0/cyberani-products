import LinkBtn from "@/components/common/link-buttons/LinkBtn";
import Image from "next/image";
import React from "react";
interface Props {
  arabic?: boolean;
}
const WhoWeAre: React.FC<Props> = ({ arabic }) => {
  return (
    <div className="flex flex-col items-center text-center lg:gap-y-sp56 gap-y-[56px] lg:w-[56.9444444444vw] mx-auto">
      <div className="flex flex-col items-center lg:gap-y-sp48 gap-y-[32px]">
        <div
          data-aos="fade"
          className="relative lg:size-sp160 size-[120px] lg:mb-[unset] mb-[16px]"
        >
          <Image fill alt="play" className="flipped" src="/gifs/who.gif" />
        </div>
        <h2 data-aos="fade-up" className="text36">
          Who We Are
        </h2>
        <div
          data-aos="fade-down"
          className="lg:text22 mtext18 flex flex-col lg:gap-y-sp20 gap-y-5"
        >
          <p>
            Cyberani by Aramco Digital is a leading cybersecurity company,
            offering a wide range of cybersecurity services aimed at protecting
            the digital environment of organizations from{" "}
            <span className="font-bold">cyber threats</span>.
          </p>
          <p>
            Our Security Operations Centre provides unmatched protection to our
            clients’ IT and OT systems and networks to ensure business
            continuity and cyber resilience.
          </p>
        </div>
      </div>
      <div data-aos="fade" className="w-full lg:w-[unset]">
        <LinkBtn
          text={"Read More"}
          link={(arabic ? "/ar" : "") + "/about"}
          arabic={arabic}
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
