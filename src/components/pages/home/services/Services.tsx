"use client";
import React, { useEffect, useRef, useState } from "react";
import LinkBtn from "@/components/common/link-buttons/LinkBtn";
import Content from "./Content";
import Service from "./Service";

interface ServiceItem {
  img: string;
  title: string;
  desc: string;
  link: string;
}

interface Props {
  arabic?: boolean;
}

const Services: React.FC<Props> = ({ arabic }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<"below" | "above" | "in-view">(
    "below"
  );
  const services: ServiceItem[] = [
    {
      img: "/images/home/services/1.jpeg",
      title: "Managed Security Operations",
      desc: "Experience around-the-clock network visibility, proactive threat intelligence, and automated endpoint detection.",
      link: (arabic ? "/ar" : "") + "/services/mdr",
    },
    {
      img: "/images/home/services/2.jpeg",
      title: "GRC Services",
      desc: "Ensure lasting enterprise resilience with expert audits and industry-specific compliance certifications.",
      link: (arabic ? "/ar" : "") + "/services/grc-cybersecurity-strategy",
    },
    {
      img: "/images/home/services/3.jpeg",
      title: "Offensive Cybersecurity",
      desc: "Proactively identify and address vulnerabilities with scanning and pen testing services.",
      link:
        (arabic ? "/ar" : "") + "/services/offensive-vulnerability-assessment",
    },
    {
      img: "/images/home/services/4.jpeg",
      title: "OT Cybersecurity",
      desc: "Protect your operational infrastructure with specialised engineering, pen testing, assessment, and incident response services.",
      link: (arabic ? "/ar" : "") + "/services/ot-grc",
    },
    {
      img: "/images/home/services/5.jpeg",
      title: "DFIR",
      desc: "Minimise downtimes and restore IT system integrity with a 24/7 monitoring and response.",
      link: (arabic ? "/ar" : "") + "/services/dfir-incident-response-retainer",
    },
    {
      img: "/images/home/services/6.jpeg",
      title: "VAR",
      desc: "Elite partnerships with leading Cybersecurity Technology vendors.",
      link: (arabic ? "/ar" : "") + "/services/var-elite-partnerships",
    },
  ];
  useEffect(() => {
    const ctaVideo = document.querySelector<HTMLElement>(".ctaVideo");
    const aboutBg = document.querySelector<HTMLElement>(".about_bg");

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top >= viewportHeight) {
        setPosition("below");
        if (ctaVideo && aboutBg) {
          ctaVideo.style.opacity = "0";
          aboutBg.style.opacity = "1";
        }
      } else if (rect.bottom <= 0) {
        setPosition("above");
        if (ctaVideo && aboutBg) {
          ctaVideo.style.opacity = "1";
          aboutBg.style.opacity = "0";
        }
      } else {
        setPosition("in-view");
        if (ctaVideo && aboutBg) {
          ctaVideo.style.opacity = "0";
          aboutBg.style.opacity = "1";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial state check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(position);
  }, [position]);

  return (
    <section
      ref={sectionRef}
      className="bg-white relative z-[2] lg:py-sp120 pt-[135px] flex flex-col items-center lg:gap-y-sp48 gap-y-12"
    >
      <Content />
      <div
        data-aos="fade-up"
        className="lg:myContainer w-full flex lg:gap-sp20 gap-5 px-5 sm:px-[4.8vw] lg:px-0 lg:overflow-hidden lg:whitespace-normal whitespace-nowrap overflow-auto hideScroll"
      >
        {services.map((service, index) => (
          <Service
            service={service}
            key={index}
            index={index}
            arabic={arabic}
          />
        ))}
      </div>
      <div data-aos="fade" className="myContainer flex justify-center">
        <LinkBtn
          text="Read More"
          link={(arabic ? "/ar" : "") + "/our-services"}
          black
          arabic={arabic}
        />
      </div>
    </section>
  );
};

export default Services;
