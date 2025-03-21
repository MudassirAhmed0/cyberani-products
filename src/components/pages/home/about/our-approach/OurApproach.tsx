import React from "react";
import Approach from "./Approach";
import json1 from "@/../public/jsons/JSON-04.json";
import json2 from "@/../public/jsons/JSON-05.json";
import json3 from "@/../public/jsons/JSON-06.json";

const OurApproach = () => {
  return (
    <div>
      <h2 data-aos="fade-up" className="text-center text39">
        Our Approach
      </h2>
      <div className="flex justify-center lg:justify-between flex-wrap lg:gap-sp48 gap-[100px] lg:mt-sp60 mt-[100px]">
        <Approach
          heading={`Efficient Monitoring and <span>Detection</span>`}
          desc=" We employ sophisticated SIEM, SOAR, UEBA, and threat intelligence tools
        to proactively identify and prevent unauthorised intrusions, data
        breaches, and operational disruptions."
          json={json1}
        />
        <Approach
          heading={`Vigilance Against Emerging  <span>Threats</span>`}
          desc=" We leverage the power of artificial intelligence to keep abreast of new threats in the digital space, such as data sprawls, shadow AI, and other vulnerabilities in AI-powered security systems."
          json={json2}
          translate="lg:translate-y-sp100"
        />
        <Approach
          heading={`Utmost  <span>Compliance</span>`}
          desc=" Our services ensure stringent compliance with the KSA National Cybersecurity Authority, ISO, SAMA, and Aramco requirements."
          json={json3}
          translate="lg:translate-y-sp180"
        />
      </div>
    </div>
  );
};

export default OurApproach;
