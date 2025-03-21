import React from "react";
import NavigationLink from "./NavigationLink";
import SocialLinks from "./SocialLinks";

interface Props {
  arabic?: boolean;
}

const NavigationLinks = ({ arabic }: Props) => {
  const navigationLinks = [
    {
      title: "Managed Security Operations",
      links: [
        {
          label: "Managed Detection and Response (MDR)",
          link: "/service-page",
        },
        {
          label: "MSOC IT & OT",
          link: "/service-page",
        },
        {
          label: "Cybersecurity Monitoring Services",
          link: "/service-page",
        },
        {
          label: "Brand Protection",
          link: "/service-page",
        },
        {
          label: "Threat Intelligence",
          link: "/service-page",
        },
      ],
    },
    {
      title: "GRC Services",
      links: [
        {
          label: "(GRC) Cybersecurity Strategy",
          link: "/service-page",
        },
        {
          label: "(GRC) Cybersecurity Program",
          link: "/service-page",
        },
        {
          label: "(GRC) Cybersecurity Awareness",
          link: "/service-page",
        },
        {
          label: "(GRC) Cybersecurity Risk Assessment",
          link: "/service-page",
        },
        {
          label: "(GRC) Cybersecurity Compliance Assessment",
          link: "/service-page",
        },
        {
          label: "(GRC) Cybersecurity Maturity Assessment",
          link: "/service-page",
        },
      ],
    },
    {
      title: "Offensive Cybersecurity",
      links: [
        {
          label: "Vulnerability Assessment",
          link: "/service-page",
        },
        {
          label: "Penetration Testing",
          link: "/service-page",
        },
        {
          label: "Source Code Review",
          link: "/service-page",
        },
        {
          label: "Red Teaming",
          link: "/service-page",
        },
        {
          label: "Mobile App Assessment",
          link: "/service-page",
        },
        {
          label: "Web App Assessment",
          link: "/service-page",
        },
      ],
    },
    {
      title: "OT Cybersecurity",
      links: [
        {
          label: "OT GRC",
          link: "/service-page",
        },
        {
          label: "OT Maturity Risk Assessment",
          link: "/service-page",
        },
        {
          label: "OT Penetration Testing",
          link: "/service-page",
        },
        {
          label: "OT Architectural",
          link: "/service-page",
        },
        {
          label: "OT Automated Asset Discovery Solutions",
          link: "/service-page",
        },
        {
          label: "OT DFIR",
          link: "/service-page",
        },
        {
          label: "OT Cybersecurity Program",
          link: "/service-page",
        },
        {
          label: "OT Cybersecurity Projects",
          link: "/service-page",
        },
      ],
    },
    {
      title: "DIIR",
      links: [
        {
          label: "Incident Response Retainer",
          link: "/service-page",
        },
        {
          label: "Compromise Assessment",
          link: "/service-page",
        },
        {
          label: "Tabletop Exercise",
          link: "/service-page",
        },
      ],
    },
    {
      title: "VAR",
      links: [
        {
          label:
            "Elite partnerships with leading Cybersecurity Technology vendors",
          link: "/service-page",
        },
      ],
    },
    {
      title: "Other",
      links: [
        {
          label: "Terms of Use",
          link: (arabic ? "/ar" : "") + "/terms-of-use",
        },
        {
          label: "Privacy Policy",
          link: (arabic ? "/ar" : "") + "/privacy-policy",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-wrap justify-between lg:justify-normal lg:gap-y-sp32 lg:gap-x-[3.05555555556vw] gap-[30px]">
      {navigationLinks.map((navigationLink, index) => (
        <NavigationLink key={index} navigationLink={navigationLink} />
      ))}
      <SocialLinks />
    </div>
  );
};

export default NavigationLinks;
