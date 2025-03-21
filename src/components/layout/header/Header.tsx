"use client";
import useLangSwitcher from "@/hooks/useLangSwitcher";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import DropDown from "./dropdown/DropDown";
import useResponsivness from "@/hooks/useResponsivness";
import useLenisScroll from "@/hooks/useLenis";
import { useAos } from "@/hooks/useAos";

interface NavigationLink {
  lable: string;
  link: string;
  dropDown?: Array<{
    category: string;
    subCategories: Array<{
      title: string;
      desc?: string;
      link: {
        label: string;
        link: string;
      };
    }>;
  }>;
}

interface HeaderProps {
  arabic: boolean;
  blackHeader: boolean;
}

export const Header: React.FC<HeaderProps> = ({ arabic, blackHeader }) => {
  // const { changeLocale } = useLangSwitcher();
  // const dropDownRef = useRef<HTMLDivElement | null>(null);
  // const pathname = usePathname();
  // const { isDesktop, isMobile, isTablet } = useResponsivness();
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [isFixed, setIsFixed] = useState(false);

  // const navigationLinks: NavigationLink[] = [
  //   {
  //     lable: "About Cyberani",
  //     link: (arabic ? "/ar" : "") + "/about",
  //   },
  //   {
  //     lable: "Our Services",
  //     link: (arabic ? "/ar" : "") + "/our-services",
  //     dropDown: [
  //       {
  //         category: "Managed Security Operations",
  //         subCategories: [
  //           {
  //             title: "Managed Detection and Response (MDR)",
  //             desc: "Cyberani's MDR services offer 24/7 cyber threat hunting, detection, and rapid response",
  //             link: {
  //               label: "Explore MDR",
  //               link: (arabic ? "/ar" : "") + "/services/mdr",
  //             },
  //           },
  //           {
  //             title: "MSOC IT & OT",
  //             desc: "Level up your IT and OT security with Cyberani",
  //             link: {
  //               label: "Explore Managed IT/OT SOC",
  //               link: (arabic ? "/ar" : "") + "/services/msoc",
  //             },
  //           },
  //           {
  //             title: "Cybersecurity Monitoring Services",
  //             desc: "Around-the-clock monitoring of networks and endpoints",
  //             link: {
  //               label: "Explore Cybersecurity Monitoring",
  //               link:
  //                 (arabic ? "/ar" : "") +
  //                 "/services/cybersecurity-monitoring-services",
  //             },
  //           },
  //           {
  //             title: "Brand Protection",
  //             desc: "Isolate impersonation assaults from impacting your reputation",
  //             link: {
  //               label: "Explore Brand Protection",
  //               link: (arabic ? "/ar" : "") + "/services/brand-protection",
  //             },
  //           },
  //           {
  //             title: "Threat Intelligence",
  //             desc: "Stay ahead of cybercriminals with precise threat intelligence",
  //             link: {
  //               label: "Explore Threat Intelligence",
  //               link: (arabic ? "/ar" : "") + "/services/threat-intelligence",
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         category: "GRC Services",
  //         subCategories: [
  //           {
  //             title: "(GRC) Cybersecurity Strategy",
  //             desc: "Strengthen your cyber resilience with a solid cybersecurity strategy.",
  //             link: {
  //               label: "Explore Cybersecurity Strategy",
  //               link:
  //                 (arabic ? "/ar" : "") +
  //                 "/services/grc-cybersecurity-strategy",
  //             },
  //           },
  //           {
  //             title: "(GRC) Cybersecurity Program",
  //             desc: "Streamline your cybersecurity functions.",
  //             link: {
  //               label: "Explore Cybersecurity Program",
  //               link:
  //                 (arabic ? "/ar" : "") + "/services/grc-cybersecurity-program",
  //             },
  //           },
  //           {
  //             title: "(GRC) Cybersecurity Awareness",
  //             desc: "Equip your employees with cybersecurity awareness.",
  //             link: {
  //               label: "Explore Cybersecurity Awareness",
  //               link:
  //                 (arabic ? "/ar" : "") +
  //                 "/services/grc-cybersecurity-awareness",
  //             },
  //           },
  //           {
  //             title: "(GRC) Cybersecurity Risk Assessment",
  //             desc: "Identify your cyber risks to enhance your cyber defenses.",
  //             link: {
  //               label: "Explore Cybersecurity Risk Assessment",
  //               link:
  //                 (arabic ? "/ar" : "") +
  //                 "/services/grc-cybersecurity-risk-assessment",
  //             },
  //           },
  //           {
  //             title: "(GRC) Cybersecurity Compliance Assessment",
  //             desc: "Comply with cybersecurity standards and regulations.",
  //             link: {
  //               label: "Explore Compliance Assessment",
  //               link:
  //                 (arabic ? "/ar" : "") + "/services/grc-compliance-assessment",
  //             },
  //           },
  //           {
  //             title: "(GRC) Cybersecurity Maturity Assessment",
  //             desc: "Take your cybersecurity posture to the next level.",
  //             link: {
  //               label: "Explore Cybersecurity Maturity Assessment",
  //               link:
  //                 (arabic ? "/ar" : "") +
  //                 "/services/grc-cybersecurity-maturity-assessment",
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         category: "Offensive Cybersecurity",
  //         subCategories: [
  //           {
  //             title: "Vulnerability Assessment",
  //             desc: "Advanced vulnerability scanning to ensure proactive defense.",
  //             link: {
  //               label: "Explore Vulnerability Assessment",
  //               link:
  //                 (arabic ? "/ar" : "") +
  //                 "/services/offensive-vulnerability-assessment",
  //             },
  //           },
  //           {
  //             title: "Penetration Testing",
  //             desc: "Fortify your IT environment with real-world attack preparedness.",
  //             link: {
  //               label: "Explore Penetration Testing",
  //               link:
  //                 (arabic ? "/ar" : "") +
  //                 "/services/offensive-penetration-testing",
  //             },
  //           },
  //           {
  //             title: "Source Code Review",
  //             desc: "Advanced code assessment and analysis.",
  //             link: {
  //               label: "Explore Source Code Review",
  //               link:
  //                 (arabic ? "/ar" : "") +
  //                 "/services/offensive-source-code-review",
  //             },
  //           },
  //           {
  //             title: "Red Teaming",
  //             desc: "Simulated cyber attacks to test your cybersecurity posture.",
  //             link: {
  //               label: "Explore Red Teaming",
  //               link: (arabic ? "/ar" : "") + "/services/offensive-red-teaming",
  //             },
  //           },
  //           {
  //             title: "Mobile App Assessment",
  //             desc: "Mitigate mobile app weaknesses with expert review and assessment.",
  //             link: {
  //               label: "Explore Mobile App Assessment",
  //               link:
  //                 (arabic ? "/ar" : "") +
  //                 "/services/offensive-mobile-app-assessment",
  //             },
  //           },
  //           {
  //             title: "Web App Assessment",
  //             desc: "Mitigate web app vulnerabilities with expert review and assessment.",
  //             link: {
  //               label: "Explore Web App Assessment",
  //               link:
  //                 (arabic ? "/ar" : "") +
  //                 "/services/offensive-web-app-assessment",
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         category: "OT Cybersecurity ",
  //         subCategories: [
  //           {
  //             title: "OT GRC",
  //             desc: "Protect critical systems and achieve peak compliance.",
  //             link: {
  //               label: "Explore OT GRC",
  //               link: (arabic ? "/ar" : "") + "/services/ot-grc",
  //             },
  //           },
  //           {
  //             title: "OT Maturity Risk Assessment",
  //             desc: "Enhance the defense maturity of your industrial systems.",
  //             link: {
  //               label: "Explore OT Risk Assessment",
  //               link:
  //                 (arabic ? "/ar" : "") +
  //                 "/services/ot-maturity-risk-assessment",
  //             },
  //           },
  //           {
  //             title: "OT Penetration Testing",
  //             desc: "Safeguard your industrial system with real-world attack preparedness.",
  //             link: {
  //               label: "Explore OT Penetration Testing",
  //               link:
  //                 (arabic ? "/ar" : "") + "/services/ot-penetration-testing",
  //             },
  //           },
  //           {
  //             title: "OT Architectural",
  //             desc: "Protect your critical systems against cyber attacks.",
  //             link: {
  //               label: "Explore OT Architectural",
  //               link: (arabic ? "/ar" : "") + "/services/ot-architectural",
  //             },
  //           },
  //           {
  //             title: "OT Automated Assets Discovery Solutions",
  //             desc: "Gain full control over your OT assets.",
  //             link: {
  //               label: "Explore OT Automated Assets Discovery",
  //               link:
  //                 (arabic ? "/ar" : "") + "/services/ot-auto-assets-discovery",
  //             },
  //           },
  //           {
  //             title: "OT DFIR",
  //             desc: "Restore industrial operations and find the root cause of intrusions.",
  //             link: {
  //               label: "Explore OT DFIR",
  //               link: (arabic ? "/ar" : "") + "/services/ot-dfir",
  //             },
  //           },
  //           {
  //             title: "OT Cybersecurity Program",
  //             desc: "Streamline your industrial systems operations.",
  //             link: {
  //               label: "Explore OT Cybersecurity Program",
  //               link:
  //                 (arabic ? "/ar" : "") + "/services/ot-cybersecurity-program",
  //             },
  //           },
  //           {
  //             title: "OT Cybersecurity Projects",
  //             desc: "Incorporate your industrial systems aspects in OT Projects.",
  //             link: {
  //               label: "Explore OT Cybersecurity Projects",
  //               link:
  //                 (arabic ? "/ar" : "") + "/services/ot-cybersecurity-projects",
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         category: "DFIR ",
  //         subCategories: [
  //           {
  //             title: "Incident Response Retainer",
  //             desc: "Subscription-based support led by experts to ensure cyber resilience.",
  //             link: {
  //               label: "Explore Incident Response Retainer",
  //               link:
  //                 (arabic ? "/ar" : "") +
  //                 "/services/dfir-incident-response-retainer",
  //             },
  //           },
  //           {
  //             title: "Compromise Assessment",
  //             desc: "Minimize impact of data breaches.",
  //             link: {
  //               label: "Explore Compromise Assessment",
  //               link:
  //                 (arabic ? "/ar" : "") +
  //                 "/services/dfir-compromise-assessment",
  //             },
  //           },
  //           {
  //             title: "Tabletop Exercise",
  //             desc: "Fine-tune your incident response with expert guidance.",
  //             link: {
  //               label: "Explore Tabletop Exercise",
  //               link:
  //                 (arabic ? "/ar" : "") + "/services/dfir-tabletop-exercise",
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         category: "VAR ",
  //         subCategories: [
  //           {
  //             title:
  //               "Elite partnerships with leading Cybersecurity Technology vendors",
  //             link: {
  //               label: "Read More",
  //               link:
  //                 (arabic ? "/ar" : "") + "/services/var-elite-partnerships",
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     lable: "Careers",
  //     link: (arabic ? "/ar" : "") + "/careers",
  //   },
  //   {
  //     lable: "Media Center",
  //     link: (arabic ? "/ar" : "") + "/media-center",
  //   },
  // ];
  useLenisScroll();
  useAos({ once: true });

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const shouldFix = window.scrollY > window.innerHeight;
  //     setIsFixed(shouldFix);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // function toggleSidebar() {
  //   if (!isDesktop) {
  //     const body = document.querySelector("body");
  //     if (body) {
  //       body.classList.toggle("active");
  //       setIsSidebarOpen(!isSidebarOpen);
  //     }
  //   }
  // }

  // const toggleDropDownMob = (fromSubcategory?: boolean) => {
  //   if (!isDesktop && dropDownRef.current) {
  //     const dropDownEl = dropDownRef.current;
  //     const wrapperEl = dropDownEl.querySelector<HTMLElement>(".wrapper"); // Explicitly type the querySelector result
  //     if (!wrapperEl) return;

  //     const wrapperElHeight = wrapperEl.clientHeight;
  //     const dropDownIndicatorEl =
  //       document.querySelector<HTMLElement>(".dropDownIndicator"); // Explicitly type the querySelector result

  //     if (fromSubcategory && dropDownEl.classList.contains("active")) {
  //       dropDownEl.style.maxHeight = `${wrapperElHeight}px`;
  //     } else {
  //       if (dropDownEl.classList.contains("active")) {
  //         dropDownEl.style.maxHeight = `0`;
  //         if (dropDownIndicatorEl) {
  //           dropDownIndicatorEl.style.transform = "rotate(0deg)";
  //         }
  //         dropDownEl.classList.remove("active");
  //       } else {
  //         dropDownEl.style.maxHeight = `${wrapperElHeight}px`;
  //         if (dropDownIndicatorEl) {
  //           dropDownIndicatorEl.style.transform = "rotate(-180deg)";
  //         }
  //         dropDownEl.classList.add("active");
  //       }
  //     }
  //   }
  // };

  return <div></div>;
};
