import ComponentMapper from "@/components/ComponentMapper/ComponentMapper";
import Layout from "@/components/layout/Index";
import { newsCards } from "@/components/pages/media-center/news-blogs-container/NewsBlogsContainer";
import getStaticMetaData from "@/utils/seo/getStaticMetaData";
import { link } from "fs";
import { features, title } from "process";
// import Layout from '@/components/layout/Layout';

// const

const data: { [key: string]: { component_handel: string; content?: any }[] } = {
  about: [
    {
      component_handel: "common/subpage-hero/SubPageHero",
      content: {
        heading: "Fostering Secure Future",
        desc: "Explore state-of-the-art SOC services powered by 100% Saudi calibres.",
        banner: {
          src: "/images/about/hero.jpg",
        },
        breadcrumbs: [{ text: "About Cyberani" }],
      },
    },
    {
      component_handel: "pages/about/Pioneering",
      content: {
        title: `Pioneering Cyber Resilience with Two  <span class="text-bright-teal">SOC Sites</span>`,
        desc: ` <p>
              At Cyberani, we are dedicated to safeguarding the digital
              frontiers of industry leaders and government agencies. Founded
              with the vision to set the standard for cyber resilience, our
              mission is crystal clear: to ensure steady protection for our
              client assets and operations with next-generation preventive and
              responsive cybersecurity services. We are committed to delivering
              next-generation cybersecurity services that ensure steady
              protection and regulatory compliance for industry leaders and
              government authorities alike.
            </p>
            <p>
              Cyberani offers a comprehensive suite of proactive and reactive
              services to prevent, detect, and mitigate cybersecurity threats.
              Leveraging AI-powered tools and the deep expertise of our
              cybersecurity professionals, we provide both proactive and
              reactive services tailored to the unique needs of our clients,
              ensuring a resilient IT ecosystem and robust cyber readiness. We
              strive to ensure a secure digital future where our clients can
              operate with confidence, knowing their assets and operations are
              shielded from cyberattacks.
            </p>`,
        image: {
          src: "/images/about/pioneering/banner.jpg",
          alt: "banner",
        },
      },
    },
    {
      component_handel: "pages/about/DigitalDefense",
      content: {
        title: `Empowering <span class="text-bright-teal">Digital Defense</span> in Saudi Arabia and 
              Beyond.`,
        desc: `<p  >
            Cyberani is an Aramco Digital company playing a vital role in Saudi
            Arabia&apos;s national security and setting new standards in digital
            defense, ensuring protection and prosperity of current and future
            generations.
          </p>`,
        image: {
          src: "/images/about/digital-defense/aramco.svg",
          alt: "banner",
        },
        link: {
          text: "Visit Website",
          link: "",
        },
      },
    },
    {
      component_handel: "pages/about/stats/Stats",
      content: {
        title: `    Why Your Business Needs a <span class="text-bright-teal">Cybersecurity 
            Partner</span>.`,
        stats: [
          {
            title: "62%",
            description:
              "<p>COf KSA business leaders see modernised cyberinfrastructure as their top investment concern</p>",
          },
          {
            title: "29.9Million",
            description:
              "<p>Total cost of data breaches for organisations in the Middle East</p>",
          },
          {
            title: "1.13Million",
            description:
              "<p>Average operational savings from AI-powered cybersecurity services</p>",
          },
        ],
      },
    },
    {
      component_handel: "pages/about/our-values/OurValues",
      content: {
        title: `Our Values`,
        cards: [
          {
            img: "/images/about/our-values/1.svg",
            title: "Excellence",
            desc: "We strive to deliver superior service quality and efficiency, being a cybersecurity provider of choice for clients across various industries.",
          },
          {
            img: "/images/about/our-values/2.svg",
            title: "Reliability",
            desc: "We guarantee high availability and precision in every aspect of our operations.",
          },
          {
            img: "/images/about/our-values/3.svg",
            title: "Resilience",
            desc: "We maintain a forward-looking approach, ensuring our services always remain at the forefront of cybersecurity.",
          },
          {
            img: "/images/about/our-values/4.svg",
            title: "Integrity",
            desc: "We operate transparently and openly, ensuring every interaction with our clients is built on trust, compliance, and awareness. ",
          },
        ],
      },
    },
    {
      component_handel: "pages/about/our-approach/OurApproach",
      content: {},
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "our-services": [
    {
      component_handel: "common/subpage-hero/SubPageHero",
      content: {
        heading: "Step Up to a New Level of Cyber Resilience",
        desc: "Explore how our next-generation services can protect your assets and business operations.",
        banner: {
          video: true,
          src: "/videos/about_hero.mp4",
        },
        showCaseVideo: "/videos/hero_showcase_home.mp4",
        breadcrumbs: [{ text: "Our Services" }],
      },
    },

    {
      component_handel: "pages/our-services/soc-services/SocServices",
      content: {},
    },
    {
      component_handel: "pages/our-services/browse-services/BrowseServices",
      content: {},
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  careers: [
    {
      component_handel: "common/subpage-hero/SubPageHero",
      content: {
        heading: "Join Cyberani",
        desc: "Welcoming workplace that encourages teamwork and advance your career improvement.",
        banner: {
          src: "/images/careers/hero.jpeg",
        },
        breadcrumbs: [{ text: "Careers" }],
      },
    },

    {
      component_handel: "pages/careers/benefits/Benefits",
      content: {},
    },
    {
      component_handel: "pages/careers/ApplyNow",
      content: {},
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "media-center": [
    {
      component_handel: "common/subpage-hero/SubPageHero",
      content: {
        heading: "Explore our news and announcements",
        banner: {
          src: "/images/media-center/hero.jpeg",
        },
        breadcrumbs: [{ text: "Media Center" }],
      },
    },

    {
      component_handel:
        "pages/media-center/news-blogs-container/NewsBlogsContainer",
      content: {
        link: "/media-center/news-single-page",
      },
    },
    {
      component_handel:
        "pages/media-center/news-blogs-container/NewsBlogsContainer",
      content: {
        fromBlogs: true,
        link: "/media-center/blogs-single-page",
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "news-single-page": [
    {
      component_handel: "common/newsblogs-singlepage/container/Container",
      content: {},
    },
    {
      component_handel:
        "common/newsblogs-singlepage/related-swiper/RelatedSwiper",
      content: {
        title: `Related <span class='text-bright-teal'>News</span>`,
        newsCard: true,
        data: newsCards,
      },
    },
  ],
  "blogs-single-page": [
    {
      component_handel: "common/newsblogs-singlepage/container/Container",
      content: {},
    },
    {
      component_handel:
        "common/newsblogs-singlepage/related-swiper/RelatedSwiper",
      content: {
        title: `Related <span class='text-bright-teal'>Blogs</span>`,
        newsCard: true,
        data: newsCards,
      },
    },
  ],
  "terms-of-use": [
    {
      component_handel: "pages/terms-of-use/container/Container",
      content: {},
    },
  ],
  "privacy-policy": [
    {
      component_handel: "pages/privacy-policy/Container",
      content: {},
    },
  ],
  // SERVICE PAGES STARTING
  // Managed Security Operations
  mdr: [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` Managed Detection and Response (MDR) Service`,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "MDR" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: ` Protect your enterprise against cyber threats with round-the-clock
            <span class="text-bright-teal">infrastructure security</span> `,
          desc: ` In the age of AI, cyber threats evolve with alarming speed. To
          safeguard business continuity, enterprises ‘fight fire with fire’ by
          leveraging innovative solutions to identify and contain cyber threats
          before they wreak havoc. Cyberani&apso;s Managed Detection and
          Response (MDR) service equips your organisation with round-the-clock
          cybersecurity protection, optimising threat detection & response
          times. Our team ensures proactive prevention, detection, containment,
          and response to cyber threats.`,
          functions: [
            {
              heading: "Round-the-Clock Cybersecurity Protection",
              desc: "Our experts ensure 24/7 monitoring of your digital environment to detect and respond to threats in real time, ensuring threats are identified and mitigated proactively.",
            },
            {
              heading: "Prioritisation and Threat Hunting",
              desc: "Our MDR team excels in identifying and prioritising cyber threats, employing advanced analytics to hunt down potential security breaches before they escalate.",
            },
            {
              heading: "Investigation and Remediation",
              desc: "Upon detection, we conduct thorough investigations to understand the scope and impact of the threat, followed by swift remediation actions to neutralise it, ensuring minimal disruption to your operations.",
            },
            {
              heading: "Proactive Defence",
              desc: "Leveraging insights gained from incidents, we continuously refine our security strategies to prevent future threats, enhancing your organisation’s resilience against cyberattacks.",
            },
          ],
          functionHeading: ` Managed Detection and Response (MDR) Service
            <span class="text-bright-teal">Functions</span> `,
        },
        features: {
          heading: ` Managed Detection and Response (MDR) Service
            <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Advanced Endpoint Detection and Response (EDR)",
              desc: "Our EDR tools automate the detection and response process at the endpoint level, providing immediate containment of threats and safeguarding your network's integrity.",
            },
            {
              heading: "Threat Intelligence Feeds",
              desc: "We integrate high-quality cyber threat intelligence into our operations, enabling real-time security monitoring, identifying threats, and avoiding potential MDR action gaps against attacks.",
            },
            {
              heading: "Integrated Security Stack",
              desc: "Our security stack seamlessly includes firewalls, SIEM, vulnerability scanners, and endpoint protection, unifying your cybersecurity systems, all working together for enhanced security.",
            },
            {
              heading: "Advanced Digital Forensics",
              desc: "In the event of a security breach, our forensic analysis capabilities allow deep-dive investigations into incidents, uncovering root causes and facilitating effective countermeasures.",
            },
            {
              heading: "Customized Security Protocols",
              desc: "Our tailored protection suite applies to your unique security needs, ensuring proactive security enforcement that mitigates risk against evolving cyber threats.",
            },
          ],
        },
        useCasesData: {
          heading: ` Use <span class="text-bright-teal">Cases</span>`,
          items: [
            {
              title: "Education",
              desc: `Universities store vast amounts of sensitive student information, including personal details and academic records, which may be a target of advanced persistent threats (APT). Leveraging our Managed Detection and Response service, institutions can benefit from an AI-powered anomaly detection framework that identifies unusual network patterns and activates response protocols, isolating the threat, preventing data exfiltration, and enabling the university to strengthen its defences against future attacks.`,
            },
            {
              title: "Telecommunications",
              desc: "Telecommunication providers handle massive volumes of data traffic, facing constant threats from cybercriminals aiming to disrupt services or steal sensitive customer data. Our 24/7 monitoring and threat detection capabilities identify intrusions early on, with our MDR experts conducting thorough investigations to trace the attack's pathway and contain the threat, reducing time-to-detect (TTD) and time-to-respond (TTR) to cyber threats to a matter of minutes.",
            },
          ],
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  msoc: [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: `MSOC IT & OT`,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "MDR" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: `Experience effortless, real-time digital protection with advanced
            <span class="text-bright-teal">cybersecurity tool</span> `,
          desc: `In 2024, organisations in the Middle East and Africa will invest $238 billion in cybersecurity infrastructure and talent. Powered by AI and next-generation monitoring and incident response technologies, Cyberani's Managed Security Operations Centre (MSOC) ensures your enterprise remains one step ahead of attackers and spending sprees, providing peace of mind without the overhead of continuous staff training or infrastructure upgrades.`,
          functions: [
            {
              heading: "Round-the-Clock Cybersecurity Protection",
              desc: "Our MSOC toolkit provides 24/7 monitoring of your digital environment to detect and respond to threats in real time, ensuring threats are identified and mitigated before they impact your operations.",
            },
            {
              heading: "Incident Analysis and Prevention",
              desc: "We use precise vulnerability and compromise assessment scanners to identify the attack vectors and data breaches, ensuring a proactive and high-readiness security posture for your enterprise.",
            },
            {
              heading: "Threat Detection and Incident Response",
              desc: "Our MSOC identifies potential intrusions and swiftly orchestrates a response to contain and neutralise threats, minimising downtime and safeguarding data integrity.",
            },
          ],
          functionHeading: ` MSOC IT & OT Service
            <span class="text-bright-teal">Functions</span> `,
        },
        features: {
          heading: ` MSOC IT & OT Service
            <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Automated Identification, Response, and Recovery",
              desc: "Our Managed Security Operations Centre employs a sophisticated SOAR platform to collect evidence, back up data, disable network access, and power down the infrastructure as needed.",
            },
            {
              heading: "Integrated Security Stack",
              desc: "MSOC toolkit includes firewalls, SIEMs, vulnerability scanners, endpoint protection solutions, and IPS/IDS systems, all working in concert to fortify your cybersecurity posture.",
            },
            {
              heading: "Customised Security Protocols",
              desc: "Understanding that each organisation has unique security needs, we tailor our Managed Cybersecurity services to align with your specific risk profile, regulatory requirements, and business objectives.",
            },
            {
              heading: "Expert Analyst Team",
              desc: "Our SOC is supervised by seasoned cybersecurity professionals with the expertise to interpret AI-generated alerts, conduct in-depth analyses, and formulate strategic incident response plans.",
            },
          ],
        },
        useCasesData: {
          heading: ` Use <span class="text-bright-teal">Cases</span>`,
          items: [
            {
              title: "Manufacturing",
              desc: `Manufacturers are at risk of cyber espionage and sabotage, which could lead to theft of proprietary designs and disruption of manufacturing processes.  Cyberani MSOC provides an integrated view of cybersecurity threats across production facilities and third-party suppliers. The service's advanced threat detection capabilities identify attempts to infiltrate the network or compromise industrial control systems, ensuring steady business continuity.`,
            },
            {
              title: "Finance",
              desc: `Banks face the dual challenge of protecting their global financial operations from cyberattacks while complying with international banking regulations. With Cyberani Managed Security Operations Centre, banks can benefit from 24/7 oversight of IT infrastructure. Our service employs AI-powered analytics to detect early signs of financial malware and insider threats. The rapid incident response mechanism ensures that any breach is contained swiftly, minimising losses and maintaining the integrity of customer data.`,
            },
          ],
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "cybersecurity-monitoring-services": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: `Cybersecurity Monitoring Services `,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "MDR" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: `Safeguard your information systems from
            <span class="text-bright-teal">bad actors </span> `,
          desc: `Digital environment of every organization constantly faces myriad forms of cyberthreats. As digitalization of business operations expands exponentially to cater to the increasing needs of populations, the attack surface also expands in proportion. This provides cybercriminals with a wider arena to launch cyberattacks and experiment with novel attack vectors. Cyberani is here to help you protect your organization’s connected environment from the known and unknown threats by leveraging its advanced cybersecurity monitoring capabilities.  `,
          functions: [
            {
              heading: "Initial Setup",
              desc: "First, Cyberani evaluates the client’s digital environment and implements the initial setup to collect logs from network and endpoints. It involves integrating the monitoring tool (SIEM) with the client’s existing systems, including networks, endpoints, and cloud services. During this phase, we also configure alert thresholds and monitoring rules based on the client’s specific risk profile.",
            },
            {
              heading: "Log Monitoring",
              desc: `Cyberani’s Security Operations Center (SOC) analysts continuously monitor client’s event logs by utilizing our state-of-the art SIEM platform. The SIEM generates alert when a suspicious event occurs, and our SOC analysts analyze the nature of the event to determine its severity and report to the customer. `,
            },
          ],
          functionHeading: ` Cybersecurity Monitoring Services
            <span class="text-bright-teal">Functions</span> `,
        },
        features: {
          heading: ` Cybersecurity Monitoring Services
            <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Real-time Threat Detection",
              desc: "We continuously monitor network traffic and endpoints to identify and alert on potential threats and anomalies as they occur.",
            },
            {
              heading: "Incident Response Guidelines",
              desc: "We provide clients with guidelines for responding to detected incidents, thereby enabling them to quickly contain and mitigate security breaches.",
            },
            {
              heading: "Periodic Reports",
              desc: "We create periodic reports on the monitoring activities by summarizing key operational parameters like the number of logs of interest, events, alerts, notifications to client, etc. The reports provide clients with actionable insights into their security posture.  ",
            },
          ],
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "brand-protection": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: `Brand Protection Service `,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "MDR" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: `Stay safe from impersonation assaults by utilizing <span class='text-bright-teal'>brand protection services</span>`,
          desc: `Even the most unsophisticated assailants can easily execute brand impersonation attacks, which can be extremely costly. By registering a domain that is similar to yours and tricking your employees, customers, and partners into visiting their cloned site, cybercriminals can swiftly pilfer personal information, credentials, and money. </br> Cyberani provides a sophisticated brand protection service that prevents threats to your brand and secures your reputation.`,
          functions: [
            {
              heading: "Technical Support Team",
              desc: "Brand impersonators may pose as members of the technical support team for existing user accounts in order to take login information and hack the account.",
            },
            {
              heading: "E-commerce",
              desc: "E-commerce websites are vulnerable to impersonation due to their ability to access confidential customer information, such as credit card numbers, and their dependence on internet-based transactions.",
            },
            {
              heading: "Job Offer",
              desc: "Brand impersonators take advantage of job seekers who are very careful about their emails and eager to reach to chances. The victim experiences a sense of urgency as a result of impersonating a potential employer during the recruitment process.",
            },
            {
              heading: "Social Media",
              desc: "Impersonators can make fake social media accounts that look like your brand in order to get your customers and steal their information.",
            },
          ],
          functionHeading: `Types of Brand Impersonation Attacks`,
        },
        features: {
          heading: `How Can Cyberani Help with Brand Protection?`,
          desc: `Brand impersonators take advantage of job seekers who are very careful about their emails and eager to react to chances. The victim experiences a sense of urgency as a result of impersonating a potential employer during the recruitment process.`,
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "threat-intelligence": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: `Cybersecurity Threat Intelligence `,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "Threat Intelligence" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: `Stay ahead of cybercriminals with precise
            <span class="text-bright-teal">threat intelligence</span> `,
          desc: `Cyberani’s cybersecurity threat intelligence service involves gathering, analyzing, and utilizing information about potential or existing threats to our client’s digital security. We combine human expertise with advanced threat intelligence platforms to provide insights into the identity of bad actors, attack methods, targets, etc., to help our clients proactively prepare for and defend against cyberattacks.`,
          functions: [
            {
              heading: "Data Collection",
              desc: "We gather information from threat databases, open-source intelligence (OSINT), dark web monitoring, and client’s internal logs. This data provides insights into threat actor profiles, indicators of compromise (IOCs) and ongoing cyberattack trends.",
            },
            {
              heading: "Threat Analysis",
              desc: "Our cyber threat intel team use advanced analytical tools to process the collected data to identify patterns and understand tactics, techniques, and procedures (TTPs) used by threat actors. They also assess the potential impact of threats on the client’s environment.",
            },
            {
              heading: "Intelligence Reporting",
              desc: "As part of the service, Cyberani provides clients with regular reports and real-time alerts on identified threats, potential risks, and recommended actions, by tailoring to the clients’ industry and specific threat landscape.",
            },
          ],
          functionHeading: ` Threat Intelligence Service
            <span class="text-bright-teal">Functions</span> `,
        },
        features: {
          heading: ` Threat Intelligence Service
            <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Threat Intelligence Platforms",
              desc: "The threat intelligence platforms (TIPs) that we use to deliver the service aggregate and analyze threat data from various sources. The TIPs are capable of collecting, correlating, and prioritizing threat information.",
            },
            {
              heading: "Dark Web Monitoring Tools",
              desc: "These tools used by our threat intel team provide insights into potential threats emerging from the dark web.",
            },
            {
              heading: "Real-time Threat Alerts",
              desc: "Our threat intel service offers the capability of real-time notifications of emerging threats and indicators of compromise (IOCs). This helps clients to respond quickly to potential security incidents.",
            },
          ],
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  // Managed Security Operations
  // Governance, Risk and Compliance (GRC)
  "grc-cybersecurity-strategy": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` (GRC) Cybersecurity Strategy `,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "(GRC)" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: `Strengthen your cyber resilience through
            <span class="text-bright-teal">cybersecurity strategy</span> `,
          desc: `The evolving cybersecurity threat landscape necessitates taking novel approaches to foiling cyber threats. An effective cybersecurity strategy plays a pivotal role in facing challenges posed by bad actors. Cyberani works with our clients to develop practical cybersecurity strategies that provide them with the necessary directions to take to build cyber resilient organizations.  `,
          functions: [
            {
              heading: "Security Posture Evaluation ",
              desc: "As the first step in developing a cybersecurity strategy, we evaluate the client’s current cyber risk situation to understand the security posture. This includes reviewing the organization’s processes, cyber threats, and cybersecurity practices. ",
            },
            {
              heading: "Strategy Development",
              desc: "The results of the posture evaluation provide the basis for formulating the cybersecurity strategy. While developing the cybersecurity strategy, we consider the regulatory compliance requirements as well as the security goals of the client. The cybersecurity strategy that we develop outlines a clear roadmap for implementing the initiatives that are identified as the key pillars for the organization’s cybersecurity defense. ",
            },
          ],
          functionHeading: ` (GRC) Cybersecurity Strategy Service
            <span class="text-bright-teal">Functions</span> `,
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "grc-cybersecurity-program": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: `(GRC) Cybersecurity Program Development`,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "(GRC)" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: `Streamline your
            <span class="text-bright-teal">cybersecurity function</span> `,
          desc: `A well-built cybersecurity program will provide your organization with the required guidelines to conduct cybersecurity operations effectively. A robust cybersecurity program is a prerequisite for building a cyber-resilient organization. Cyberani develops cybersecurity programs for our clients by aligning with NCA standards and NIST Cybersecurity Framework. The cybersecurity programs that we develop will not only meet your present needs but also provide you with a scalable cybersecurity foundation to accommodate your organization’s future needs.`,
          functions: [
            {
              heading: "Information Gathering",
              desc: "The first step in our process of cybersecurity program development is information gathering. To accomplish this, we hold discussions with client’s stakeholders and review relevant organizational documentation to gather required information. This information helps us to have a clear understanding of the environment and discover the current security culture within the organization.",
            },
            {
              heading: "Program Development",
              desc: "Next, we analyze the information gathered and determine the components that are to be incorporated into the cybersecurity program of the client.  Then we create the necessary documentation that would serve as the foundation of the client’s cybersecurity program. The documents are developed by taking into consideration the regulatory requirements as well as the client’s security objectives.",
            },
          ],
          functionHeading: `(GRC) Cybersecurity Program  Service
            <span class="text-bright-teal">Functions</span> `,
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "grc-cybersecurity-awareness": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: `(GRC) Cybersecurity Awareness Service`,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "(GRC)" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: `Equip your people with
            <span class="text-bright-teal">cybersecurity awareness</span> `,
          desc: `Awareness plays a critical role in maintaining the digital security of any organization. Approximately 90 percent of all data breaches are caused by human errors. Since human error is one of the weakest links in cybersecurity, effective cybersecurity awareness is inevitable to safeguard organizations against cyberattacks. Cyberani’s cybersecurity awareness service is aimed at building and implementing an effective awareness program tailored to the specific needs of your organization. `,
          functions: [
            {
              heading: "Cybersecurity Awareness Program",
              desc: "Cyberani develops a comprehensive cybersecurity awareness program that aligns with your organization’s cybersecurity goals. This program will serve as the basis for all the awareness activities that will be conducted in your organization. ",
            },
            {
              heading: "Cybersecurity Awareness Campaign",
              desc: "We deliver cybersecurity awareness campaigns focusing on the most relevant topics with special focus on the emerging cyber threats. These campaigns provide the executives and employees in your organization with the required knowledge and skills to safeguard against a wide range of cyberattacks.",
            },
          ],
          functionHeading: `(GRC) Cybersecurity Awareness Service
            <span class="text-bright-teal">Functions</span> `,
        },
        features: {
          heading: ` GRC) Cybersecurity Awareness Service
            <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Awareness Assessment",
              desc: "As the first step before building a cybersecurity awareness program or campaign delivery, we conduct an awareness assessment. The outcome of the assessment provides insights into the current cybersecurity culture that exists in your organization. ",
            },
            {
              heading: "Awareness Documentation",
              desc: "We develop Cybersecurity Awareness Policy and Cybersecurity Awareness Framework documentation tailored to the specific needs and compliance requirements of your organization. The policy and framework documentation provides you with guidance on managing your organization’s cybersecurity awareness activities. ",
            },
            {
              heading: "Awareness Materials",
              desc: "Cyberani develops tailored cybersecurity awareness materials to be used in campaigns/workshops. The awareness materials include email templates, brochures, posters, presentation slides, etc. Additionally, we also offer cloud-based awareness platforms by collaborating with our technology partners. ",
            },
          ],
        },
      },
    },

    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "grc-cybersecurity-risk-assessment": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: `(GRC) Cybersecurity Risk Assessment `,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "(GRC)" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: `Identify cyber risks to enhance your
            <span class="text-bright-teal">cyber defenses</span> `,
          desc: `Cyberani offers cybersecurity risk assessments based on ISO27005 standards to identify, analyze, and evaluate the cybersecurity risks that affect information technology (IT) environment of organizations. The outcome of our cybersecurity risk assessment informs you about your organization’s current cybersecurity risk status. Moreover, our cybersecurity risk assessment report also provides recommendations to improve your security measures. `,
          functions: [
            {
              heading: "Risk Discovery",
              desc: "Understanding the organizational environment is key to determining the specific cyber risks posed by various threat actors. To obtain a clear picture of your organization’s cybersecurity implementation, we take an inventory of your available cybersecurity documentation and interact with key organizational stakeholders. This provides us with a clear insight into the risks facing your organization, which in turn allows us to determine the risk severity levels.",
            },
            {
              heading: "Risk Analysis",
              desc: "In the risk analysis phase, we take a deep dive into the information and insights we obtained from the Discovery phase and build a strategic cybersecurity risk register that covers the key aspects of the information assets and operations. The risk register provides a description of the risk, impact, likelihood of its happening, and recommended mitigation actions.  ",
            },
          ],
          functionHeading: `(GRC) Cybersecurity Risk Assessment Service
            <span class="text-bright-teal">Functions</span> `,
        },
      },
    },

    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "grc-compliance-assessment": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: `(GRC) Cybersecurity Compliance Assessment  `,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "(GRC)" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: `We help you to achieve compliance with cybersecurity
            <span class="text-bright-teal">standards and regulations. </span> `,
          desc: `Every responsible organization needs to ensure that its cyber defenses comply with relevant regulatory standards. This not only helps the organization to protect its digital assets and operations from cyber-attacks but also saves it from financial losses that could arise from legal proceedings against it in case an adverse cyber incident occurs. Cyberani offers compliance assessment service based on NCA standards, SAMA Cyber Security Framework, Saudi Aramco cybersecurity standards, etc. `,
          functions: [
            {
              heading: "Cybersecurity Controls Evaluation",
              desc: "One of the key components of compliance assessment is the evaluation of the extent of implementation of cybersecurity controls in your organization. This is done by collecting evidence of the implemented cybersecurity controls. ",
            },
            {
              heading: "Evidence Analysis",
              desc: "As the next step, we analyze the evidence collected to map to the relevant regulatory controls. The outcome from the analysis informs you about any gaps existing in your cyber defenses as well as areas for improvement.",
            },
          ],
          functionHeading: `(GRC) Cybersecurity Compliance Assessment Service
            <span class="text-bright-teal">Functions</span> `,
        },
      },
    },

    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "grc-cybersecurity-maturity-assessment": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: `(GRC) Cybersecurity Maturity Assessment   `,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "(GRC)" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: `Take your IT cybersecurity maturity to the
            <span class="text-bright-teal">next level </span> `,
          desc: `As cyberattacks are on the rise globally, organizations are seeking ways and means of protecting their information technology (IT) assets and systems from cybercriminals. The only way forward is to strengthen cyber defenses encompassing the entire organizational operations. Assessing cybersecurity maturity is the important step that an organization can take to elevate its maturity to the desired level. Cyberani offers cybersecurity maturity assessment against NIST (National Institute of Standards and Technology)  and SAMA (Saudi Arabian Monetary Authority) standards. `,
          functions: [
            {
              heading: "Information Gathering",
              desc: "Prior to conducting maturity assessment, we engage with client’s stakeholders to obtain relevant information and documentation related to the cybersecurity measures implemented in the organization. ",
            },
            {
              heading: "Analysis and Reporting",
              desc: "We take a systematic approach to analyzing the information gathered to ensure that the assessment result provides a true picture of the client’s cybersecurity maturity. ",
            },
          ],
          functionHeading: `(GRC) Cybersecurity Maturity Assessment Service
            <span class="text-bright-teal">Functions</span> `,
        },
      },
    },

    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],

  // Governance, Risk and Compliance (GRC)
  // Offensive Cybersecurity
  "offensive-mobile-app-assessment": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` Mobile App Assessment`,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "Offensive Cybersecurity" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: ` Identify and mitigate mobile app vulnerabilities with expert
            <span class="text-bright-teal">assessment services</span> `,
          desc: `Mobile apps have become integral to business operations, ensuring convenience and accessibility for customers and businesses alike. Today’s sophisticated attackers take app phishing and adware to a whole new level, using the power of AI to create ever more persuasive messages to steal personal information. As a cybersecurity leader, you can proactively identify and patch vulnerabilities to safeguard sensitive user data with Cyberani's advanced mobile app security testing service.`,
          functions: [
            {
              heading: "Thorough Security Profile Assessment",
              desc: "We perform a detailed analysis of your mobile applications’ security profile to detect and mitigate potential attack vectors before malicious actors can exploit them.",
            },
            {
              heading: "Comprehensive Analysis and Mitigation",
              desc: "Our specialists thoroughly evaluate all identified security risks, assess their scope and impact, and offer feasible preventive recommendations for remediation.",
            },
          ],
          functionHeading: ` Mobile App Assessment Service
            <span class="text-bright-teal">Functions</span> `,
        },
        features: {
          heading: ` Mobile App Assessment Service
            <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Expert Manual Review and AI-Powered Scanning",
              desc: "Our advanced Security Operations Centre employs a toolkit of manual methods and best-in-class vulnerability scanners to proactively detect and mitigate security flaws in mobile environments.",
            },
            {
              heading: "All-encompassing Vulnerability Scanning",
              desc: "We assess mobile applications against a range of threats, including malware, third-party APIs, data breaches, authentication and credentials weaknesses, encryption vulnerabilities, jailbreaking, and unpatched vulnerabilities.",
            },
            {
              heading: "Actionable Mitigation Framework",
              desc: "Our experts deliver a smartphone app security analysis report, capturing a complete breakdown of identified issues and prioritised recommendations for steady resilience.",
            },
          ],
        },
        useCasesData: {
          heading: ` Use <span class="text-bright-teal">Cases</span>`,
          items: [
            {
              title: "Enhanced Mobile Banking Security",
              desc: "Cyberani's Mobile App Assessment service can proactively identify vulnerabilities within the banking app's authentication process, protecting it against data breaches and unauthorised access. By assessing and fortifying the app against potential threats, the bank can safeguard sensitive financial information, maintain customer trust, and comply with SAMA regulations.",
            },
            {
              title: "Securing Patient Data on Mobile Health Apps",
              desc: "Our expert services can help enhance patient data privacy and security. The service identifies vulnerabilities that could expose patient information to cyber threats, including encryption and authentication weaknesses. By prioritising the protection of these services in their cybersecurity strategy, healthcare organisations can ensure the continuity of care and compliance with the Personal Data Protection Law in the KSA.",
            },
          ],
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "offensive-web-app-assessment": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` Web App Assessment`,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "Offensive Cybersecurity" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: ` Safeguard your enterprise’s
              <span class="text-bright-teal">web applications</span> `,
          desc: `Web resources rank among the top three most frequently attacked assets in the Middle East, with criminals leveraging web vulnerabilities to steal user data. With the increasing popularity of shadow
  AI tools, web applications are even more vulnerable to defacement and DDoS attacks by hacktivists. As a cybersecurity expert, you can ‘fight fire with fire’ by using advanced web assessment technologies to identify vulnerabilities in your infrastructure.`,
          functions: [
            {
              heading: "Proactive Threat Identification",
              desc: "Our assessment service includes a preventive analysis of your organisation’s web applications to identify and patch security flaws, safeguarding your web infrastructure against breaches and service disruptions.",
            },
            {
              heading: "Comprehensive Analysis and Mitigation",
              desc: "We thoroughly evaluate all identified security risks, assess their scope and impact, and offer actionable technical and governance recommendations for remediation.",
            },
          ],
          functionHeading: ` Web App Assessment Service
              <span class="text-bright-teal">Functions</span> `,
        },
        features: {
          heading: ` Web App Assessment Service
              <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Expert Manual Review and AI-Powered Scanning",
              desc: "Our advanced Security Operations Centre matches industry expertise with best-in-class vulnerability scanners to proactively detect and mitigate security flaws in enterprise web environments.",
            },
            {
              heading: "Multimodal Approach",
              desc: "We employ automated assessment techniques to examine a range of threats to your web applications, including denial-of-service (DDoS) attacks, SQL injection, cross-site scripting (XSS), authentication weaknesses, malware, and ransomware.",
            },
            {
              heading: "Risk Assessment and Recommendations",
              desc: "Our experts produce a comprehensive assessment report documenting the discovered risks and a prioritised list of preventative measures.",
            },
          ],
        },
        useCasesData: {
          heading: ` Use <span class="text-bright-teal">Cases</span>`,
          items: [
            {
              title: "Customer Data Protection",
              desc: "E-commerce platforms handle sensitive customer data, including payment information, making them prime targets for cyberattacks like SQL injection or cross-site scripting. Cyberani web assessment experts can identify vulnerabilities within the payment process, ensuring secure transactions and protecting both the business and its customers from data breaches and financial fraud.",
            },
            {
              title: "Online Learning Platforms",
              desc: "Web-based education portals store vast amounts of student data and provide access to critical learning resources. A web assessment can pinpoint security weaknesses, safeguard the platform against unauthorised access and data leakages, and ensure the continuity and integrity of the educational process.",
            },
          ],
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "offensive-vulnerability-assessment": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` Vulnerability Assessment`,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "Offensive Cybersecurity" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: ` Ensure proactive defence for every business asset with advanced
            <span class="text-bright-teal">vulnerability scanning services</span> `,
          desc: `Vulnerability exploitation is the second most common cyberattack vector across organisations globally. Given that intelligent automation and remote office solutions depend upon a pipeline of data, the entire data pipeline – from ingestion to storage to processing – is vulnerable to adversarial attacks. Cyberany Security Operations Centre (SOC) includes vulnerability assessment services that help ensure steady cyber preparedness in all elements and processes of your digital infrastructure.`,
          functions: [
            {
              heading: "Proactive Threat Identification",
              desc: "Our vulnerability testing services enable preventive identification and patching of security flaws in the infrastructure, safeguarding it against traditional and emerging vectors of vulnerability exploitation, such as Log4Net, ProxyNotShell, and other types of malware and ransomware.",
            },
            {
              heading: "Risk Analysis and Improvement",
              desc: "We provide a thorough evaluation of all identified security vulnerabilities, assessing their potential for exploitation, and offer practical technical and governance recommendations for remediation.",
            },
          ],
          functionHeading: ` Vulnerability Assessment Service
            <span class="text-bright-teal">Functions</span> `,
        },
        features: {
          heading: ` Vulnerability Assessment Service
            <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Preventive Entry Point Identification",
              desc: "Our team employs best-in-class advanced scanners to identify attack vectors long before they become evident.",
            },
            {
              heading: "Universal Scanning Platform",
              desc: "We identify security vulnerabilities across all your network services, cloud infrastructure, web applications, APIs, mobile devices (including IoT), containers, and other systems and resources.",
            },
            {
              heading: "Multi-Method Assessment Regime",
              desc: "Our scanning comprises asset discovery, prioritisation, and vulnerability scanning, complemented by a results analysis performed by our experts.",
            },
          ],
        },
        useCasesData: {
          heading: ` Use <span class="text-bright-teal">Cases</span>`,
          items: [
            {
              title: "Personal Data Protection",
              desc: "Healthcare institutions, financial organisations, and telecommunications companies employ Our vulnerability testing services to secure sensitive personal data in accordance with the KSA privacy regulations, such as the Personal Data Protection Law (PDPL) and the Telecommunications and Information Technology Act. Vulnerability assessment is crucial for safeguarding electronic record systems, customer management applications, and other vital infrastructure.",
            },
            {
              title: "Digitisation and Fixed Asset Management",
              desc: "For businesses transitioning to a fully remote, ‘work from home’ model, vulnerability assessment is integral to their business continuity. Although routine penetration testing of cloud infrastructure can uncover potential attack vectors, supplementing it with regular vulnerability assessments adds an even thicker layer of security. Our vulnerability testing service helps ensure smooth and resilient enterprise digitisation across industries.",
            },
          ],
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "offensive-source-code-review": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` Source Code Review`,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "Offensive Cybersecurity" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: ` Discover potential cyber vulnerabilities before release with advanced
            <span class="text-bright-teal">assessment & analytics</span> `,
          desc: `In 2023, over 95% of organisations in the KSA were targeted by cyberattacks.  With Shadow AI tools enhancing the sophistication of ransomware, enterprise software developers should take proactive measures already at the development stage. Our Source Code Review Service helps detect and rectify security and design flaws before product release.`,
          functions: [
            {
              heading: "Proactive Identification of Attack Vectors",
              desc: "Our source code security analysis identifies a range of potential security weaknesses, enabling proactive steps to protect user data and safeguard the overall user experience.",
            },
            {
              heading: "Comprehensive Analysis and Mitigation",
              desc: "We thoroughly evaluate the scope and impact of identified source code security flaws and offer actionable recommendations for remediation.",
            },
          ],
          functionHeading: ` Source Code Review Service
            <span class="text-bright-teal">Functions</span> `,
        },
        features: {
          heading: ` Source Code Review Service
            <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Integrated Code Assessment",
              desc: "Our advanced Security Operations Centre matches industry expertise with best-in-class AI-powered static analysis scanners to ensure no stone is left unturned.",
            },
            {
              heading: "Multidimensional Approach",
              desc: "We assess several potential issues attackers could exploit, including authentication flaws, data leakages, hardcoded data, input validation problems, SQL injection, and Cross-Site Scripting (XSS).",
            },
            {
              heading: "Quality Improvement Framework",
              desc: "Our experts provide a detailed report on each vulnerability discovered and suggest actionable recommendations.",
            },
          ],
        },
        useCasesData: {
          heading: ` Use <span class="text-bright-teal">Cases</span>`,
          items: [
            {
              title: "Intellectual Property Protection for Startups",
              desc: "Source code often contains proprietary algorithms and unique functionalities that constitute a competitive advantage and are considered intellectual property. Our Source Code Review service can identify and address vulnerabilities that could lead to unauthorised access or theft of technological know-how. By securing the source code, technology startups can prevent exploitation by competitors or cybercriminals, safeguarding their innovations and maintaining their market position.",
            },
            {
              title: "Patient Data Protection in HealthTech",
              desc: "With the sensitive nature of medical data, it is crucial that electronic health records (EHR) systems are impervious to threats like SQL injection and Cross-Site Scripting (XSS). Our review process uncovers hidden vulnerabilities within the application's source code, allowing developers to implement robust security measures to safeguard protected health information.",
            },
          ],
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "offensive-penetration-testing": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` Penetration Testing Service in Saudi Arabia`,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "Offensive Cybersecurity" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: ` Fortify your digital infrastructure with real-world
            <span class="text-bright-teal">attack preparedness</span> `,
          desc: `Over 110 cybersecurity threats were detected in Saudi Arabia in 2022, with breaches across the region costing 1.7x the global average. As ever-expanding attack surfaces characterise today’s enterprises, cybersecurity leaders must keep abreast of the emerging threats and cyberattack vectors. Our penetration testing service enables KSA and MENA businesses to act on their IT system vulnerabilities before they can be exploited. `,
          functions: [
            {
              heading: "Readiness Against Cybersecurity Threats",
              desc: "Our experts follow a rigorous and comprehensive methodology to mimic a range of real-world cyberattacks – from the traditional to the sophisticated – against your IT systems.",
            },
            {
              heading: "Addressing New and Known Security Flaws",
              desc: "We identify security flaws from scratch, or we can verify any infrastructure vulnerabilities you may already be aware of.",
            },
            {
              heading: "Risk Analysis and Improvement",
              desc: "We deliver a comprehensive assessment of all identified security vulnerabilities, followed by actionable technical and governance recommendations for proactive resolution.",
            },
          ],
          functionHeading: ` Penetration Testing Service
            <span class="text-bright-teal">Functions</span> `,
        },
        features: {
          heading: ` Penetration Testing Service
            <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Seamless Security Enhancement",
              desc: "Our approach merges the expertise of manual operations conducted by our specialists with the efficiency of industry-tested tools within our Security Operations Centre.",
            },
            {
              heading: "Complex, Customised Protection",
              desc: "We use a cluster of methods and sophisticated tools to identify unique entry points in the infrastructure, assessing its susceptibility to specific threats, including malware, ransomware, phishing, and data breaches.",
            },
            {
              heading: "Multistep Security Assessment",
              desc: "Our expert penetration testing service covers a range of on-prem and cloud-based enterprise infrastructure, including hardware, software, web and mobile apps, all devices, network and physical penetration, and social engineering.",
            },
            {
              heading: "Real-World Scenarios for Latest Attack Vectors",
              desc: "We employ next-generation solutions that emulate sophisticated novel cyberattack vectors: from AI phishing to data sprawl and shadow AI. ",
            },
          ],
        },
        useCasesData: {
          heading: ` Use <span class="text-bright-teal">Cases</span>`,
          items: [
            {
              title: "Workforce Optimisation",
              desc: "70% of executives in EMEA and LATAM recognise talent shortage as a barrier to cyber resilience. Cyberani’s penetration testing service directly addresses this gap by offering comprehensive assessments that simulate the latest cyberattack strategies. Our approach optimises resource allocation, enabling your existing teams to focus on strategic defence enhancements while we uncover and prioritise vulnerabilities to fortify your network against real-world threats.",
            },
            {
              title: "Third-Party Threat Assessment",
              desc: "Many enterprises integrate third-party services, APIs, and applications into their digital infrastructure. Conducting penetration tests on these external tools allows organisations to identify potential security gaps that criminals might exploit. Cyberani’s targeted approach to pen testing ensures that your operation's critical components remain secure against the evolving landscape of cyber threats.",
            },
          ],
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "offensive-red-teaming": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` Red Teaming`,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "Offensive Cybersecurity" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: ` Uncover your organization’s hidden
            <span class="text-bright-teal">security weaknesses </span> `,
          desc: `Sophisticated cyberattacks are on the rise today which involve ransomware, supply chain breaches, nation-state attacks, etc. Bad actors utilize advanced techniques to bypass existing cyber defenses. This situation necessitates proactive steps to identify vulnerabilities before they are exploited. Cyberani offers Red Teaming service that involves simulated cyberattacks to rigorously test the security of clients’ digital environment.`,
          functions: [
            {
              heading: "Reconnaissance and Planning",
              desc: "Cyberani’s Red Team experts conduct extensive research and gather intelligence on the target organization to identify potential attack vectors and devise a detailed attack plan. ",
            },
            {
              heading: "Execution and Exploitation",
              desc: "During the next stage, the Red Team carries out simulated attacks using the attack plan and attempts to bypass security controls, exploit vulnerabilities, and achieve specific objectives, such as data exfiltration or system compromise.",
            },
            {
              heading: "Reporting and Debriefing",
              desc: "After the operation, the Red Team provides a detailed report outlining the vulnerabilities discovered, the methods used, and recommendations for remediation, followed by a debriefing session to discuss findings and improvements.",
            },
          ],
          functionHeading: ` Red Teaming Service
            <span class="text-bright-teal">Functions</span> `,
        },
        features: {
          heading: ` Red Teaming Service
            <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Realistic Attack Simulation",
              desc: "Cyberani’s Red Teaming mimics real-world cyberattacks by using tactics, techniques, and procedures (TTPs) used by actual adversaries to test an organization’s defenses under true-to-life conditions. ",
            },
            {
              heading: "Identification of Vulnerabilities",
              desc: "Our Red Teaming service identifies and exploits vulnerabilities across all layers of the organization, including technical, physical, and human aspects to uncover security gaps that might be overlooked by standard assessments.",
            },
            {
              heading: "Enhancement of Incident Response",
              desc: "Cyberani’s Red Teaming service helps improve the organization’s incident response capabilities by challenging existing processes and providing insights into how well the security team can respond to and mitigate an attack. ",
            },
          ],
        },
        useCasesData: {
          heading: ` Use <span class="text-bright-teal">Cases</span>`,
          items: [
            {
              title: "Critical Infrastructure Protection",
              desc: "Red Teaming is crucial for organizations that manage critical infrastructure or sensitive customer data to identify vulnerabilities that could be exploited by sophisticated attackers. ",
            },
            {
              title: "Post-Breach Analysis",
              desc: "After a cyber incident, Red Teaming can be used to simulate the original attack vector and assess the organization’s current defenses, ensuring that vulnerabilities exploited in the breach have been fully remediated and that the organization is better prepared to prevent similar attacks in the future.",
            },
          ],
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  // Offensive Cybersecurity

  // OT Security

  "ot-grc": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` OT GRC`,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "OT Security" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: ` Protect critical infrastructure and achieve peak compliance with bespoke
              <span class="text-bright-teal">GRC strategies</span> `,
          desc: `The rise of Industry 4.0 has contributed to enhanced operational efficiency for many organisations in the Middle East and beyond. Yet, the shift to IoT and smart factory models has escalated the cost of cyber incidents and led to increasingly stringent regulations. </br></br>

  Cyberani's OT-specific Governance, Risk, and Compliance (GRC) service is designed to offer comprehensive oversight across your organisation's OT infrastructure, aligning with essential regulatory requirements and industry standards.`,
          functions: [
            {
              heading: "Compliance and Risk Assessment",
              desc: "We thoroughly evaluate your OT cyber risk landscape, identifying vulnerabilities and assessing their potential impact on your organisation to develop a resilient cybersecurity posture in line with local and international industry standards, such as NCA OTCC, ISA/IEC62443, and NIST-SP 800.",
            },
            {
              heading: "Maturity Assessment",
              desc: "Our certified auditors utilise a range of tools to evaluate the cybersecurity capabilities and readiness of your industrial control systems (ICS) and other infrastructure elements in line with the Cybersecurity Capability Model (C2M2) methodology.",
            },
            {
              heading: "Technical Procedures Development",
              desc: "We apply our cybersecurity and industry expertise to develop relevant and lasting technical protocols that align with your plant’s operational objectives, ensuring that your cybersecurity efforts are coordinated, efficient, and effective.",
            },
          ],
          functionHeading: ` OT GRC Service
              <span class="text-bright-teal">Functions</span> `,
        },
        features: {
          heading: ` OT GRC Service
              <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Advanced Threat Detection and Prevention",
              desc: "Our experts utilise a low-code security orchestration, automation and response (SOAR) platform to ingest alerts across ICS for a range of industries in Saudi Arabia.",
            },
            {
              heading: "Multilevel Impact Analysis",
              desc: "We employ SIEM and SOAR to identify and assess attack vectors in various potential infrastructure endpoints, including ICS, computers, equipment, and networks.",
            },
            {
              heading: "Universal Threat Intelligence",
              desc: "Our specialists identify security vulnerabilities and cybersecurity compliance gaps across all your enterprise services, cloud infrastructure, web applications, APIs, IoT, containers, and other systems and resources.",
            },
          ],
        },
        useCasesData: {
          heading: ` Use <span class="text-bright-teal">Cases</span>`,
          items: [
            {
              title: "Energy",
              desc: "Safeguarding the power grid against cyber threats is crucial to ensure uninterrupted electricity supply. Cyberani OT GRC service plays a pivotal role in enhancing the cybersecurity posture of power utilities. By conducting comprehensive compliance assessments against ISA/IEC62443 and NIST-SP 800 standards, our risk management analysis and maturity assessments proactively identify gaps in the security framework of the power grid's control systems, ensuring lasting operational resilience.",
            },
            {
              title: "Manufacturing",
              desc: "Our OT GRC services enable lasting strategies to assess and improve the cybersecurity maturity of IoT devices and production lines. By evaluating the plant's adherence to NCA OTCC standards and developing specific technical procedures, Cyberani ensures efficient and secure production processes. Our risk assessment and compliance services enable manufacturers to maintain a high level of operational safety, protecting critical industrial processes against disruptions.",
            },
          ],
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "ot-maturity-risk-assessment": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` OT Maturity Risk Assessment`,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "OT Security" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: ` Enhance the cyber defense maturity of your
            <span class="text-bright-teal">OT systems </span> `,
          desc: `Conducting a C2M2 (Cybersecurity Capability Maturity Model) maturity assessment of OT systems in critical infrastructure is crucial for identifying the strengths and weaknesses in cybersecurity practices. It provides a structured approach to evaluating the current cybersecurity posture, guiding improvements, and ensuring that OT systems are resilient against cyber threats. Cyberani offers OT maturity assessments by leveraging C2M2 framework to help enhance our clients’ OT cybersecurity maturity levels. `,
          functions: [
            {
              heading: "Discovery Phase",
              desc: "During the Discovery Phase, we gather information regarding the organization’s systems documentation as well as cybersecurity policies and procedures. This includes but is not limited to risk management procedures, incident response protocols, data protection strategies, and user access controls.",
            },
            {
              heading: "Assessment and Reporting",
              desc: "In this phase, we review the submitted documents and supporting evidence to identify gaps in the implemented cybersecurity measures. The results of the review will then be captured in a detailed report with specific and actionable recommendations to overcome the identified gaps and achieve a higher maturity level.",
            },
          ],
          functionHeading: ` OT Maturity Risk Assessment Service
            <span class="text-bright-teal">Functions</span> `,
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "ot-penetration-testing": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` OT Penetration Testing`,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "OT Security" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: ` Safeguard your critical enterprise infrastructure with real-world attack preparedness and expert
              <span class="text-bright-teal">assessment services</span> `,
          desc: `Vulnerabilities in industrial control systems (ICS) and operational technology (OT) are on the rise, with the former experiencing a 50% increase over the last decade. Given that intelligent process automation and industrial systems depend upon a pipeline of data, implementing proactive security measures is imperative. Our advanced pen testing and vulnerability assessment services help ensure the preparedness of industrial control systems and technology against cyberattacks.`,
          functions: [
            {
              heading: "Proactive Threat Identification",
              desc: "Our vulnerability testing services enable preventive identification and patching of security flaws in the infrastructure and ICS, safeguarding it against traditional and emerging vectors of vulnerability exploitation, such as malware, ransomware, IoT botnets, DDoS attacks, and cloud vulnerabilities.",
            },
            {
              heading: "Testing Existing Cybersecurity Measures",
              desc: "We simulate real-world cyberattack scenarios on your industrial systems, identifying vulnerabilities that could be exploited by malicious actors and pinpointing weaknesses in your enterprise security posture.",
            },
            {
              heading: "Risk Analysis and Improvement",
              desc: "Our experts conduct a thorough evaluation of all identified security vulnerabilities, assess their potential for exploitation, and offer practical technical and governance recommendations for remediation.",
            },
          ],
          functionHeading: ` OT Penetration Testing Service
              <span class="text-bright-teal">Functions</span> `,
        },
        features: {
          heading: ` OT Penetration Testing Service
              <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Preventive Entry Point Identification",
              desc: "Our advanced Security Operations Centre employs best-in-class scanners to identify attack vectors long before they become evident.",
            },
            {
              heading: "Universal Scanning Platform",
              desc: "We identify security vulnerabilities across all your network services, cloud infrastructure, web applications, APIs, mobile devices (including IoT), containers, and other systems and resources.",
            },
            {
              heading: "Multi-Method Assessment Regime",
              desc: "Our scanning toolkit comprises asset discovery, prioritisation, and vulnerability scanning, complemented by a results analysis performed by our experts.",
            },
            {
              heading: "Detailed Security Reporting",
              desc: "Following our assessments, we provide an in-depth report outlining identified vulnerabilities, their potential impact, and actionable steps for mitigation.",
            },
          ],
        },
        useCasesData: {
          heading: ` Use <span class="text-bright-teal">Cases</span>`,
          items: [
            {
              title: "Public Services",
              desc: "Our PTVA services can unveil critical vulnerabilities within the SCADA systems that manage water treatment facilities. Our detailed report and subsequent remediation guidance ensure the utility can safeguard its critical infrastructure against potential cyberattacks, maintaining public health and safety.",
            },
            {
              title: "Manufacturing",
              desc: "We identify and assess risks and vulnerabilities surrounding the integration of IoT devices into production lines, providing a clear path to securing the manufacturing process against disruptions. ",
            },
          ],
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "ot-architectural": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` OT Architectural `,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "OT Security" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: `Protect critical OT systems against cyberattacks`,
          desc: `The operation of critical industrial infrastructures relies on complex operational technology (OT) systems that are a target of cyberattacks. A flawless cybersecurity architecture is crucial to the stable operation of OT systems. Our OT cybersecurity architecture assessment helps clients to identify the weak areas in the security of their OT systems and take corrective measures to enhance the security flaws.`,
          functions: [
            {
              heading: "Design Review",
              desc: "To perform OT cybersecurity architecture review, we gather network diagrams, system architecture layouts, and security policies. The review focuses on network segmentation, communication flows, authentication methods, security controls, etc., to find out any gaps in the OT system design. ",
            },
            {
              heading: "Reporting",
              desc: "After the review, we will prepare a report outlining the findings of the OT cybersecurity architectural assessment. The report will provide details on the identified gaps and their potential impact on operations. Moreover, we will also provide prioritized recommendations for remediation based on the relevant standards like IEC 622443. ",
            },
          ],
          functionHeading: ` OT Architectural  Service
              <span class="text-bright-teal">Functions</span> `,
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "ot-auto-assets-discovery": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` OT Automated Assets Discovery Solutions `,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "OT Security" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: `Gain full control over all your Operational Technology
              <span class="text-bright-teal">(OT) assets </span> `,
          desc: `Maintaining an accurate asset inventory offers a wide range of benefits, including cost savings, improved security, compliance adherence, and better decision-making. It is a critical component of effective asset management, which can lead to increased efficiency and competitiveness for organizations. Cyberani offers OT Asset Discovery Solutions which help to optimize resource allocation, reduce risks, and make informed decisions related to operational technology assets.`,
          functions: [
            {
              heading: "Solution Design",
              desc: "First, we will analyze the network design and propose the best design for the Asset Discovery Solution. Once the proposed design is approved by the client, our engineers will install the necessary hardware or software to fulfill the requirement.",
            },
            {
              heading: "Asset Discovery",
              desc: "The next step is performing the asset discovery activity by using automated asset identification tools and manual methods. Once this activity is completed, we will develop a comprehensive asset inventory.",
            },
          ],
          functionHeading: ` OT Automated Assets Discovery Solutions Service
              <span class="text-bright-teal">Functions</span> `,
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "ot-dfir": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` OT Digital Forensics and Incident Response (DFIR) Services`,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "OT Security" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: ` Restore industrial operations, find the root cause of OT intrusions, and ensure business continuity with advanced expertise and Security
                <span class="text-bright-teal">Operations Centre tools</span> `,
          desc: `Industrial control systems are among the primary targets for cyberattacks. The increasing availability and sophistication of Shadow AI tools make infrastructure intrusions all the more costly, with the average cyberattack cost on organisations in the UAE and KSA reaching $6.53 million in 2020.</br></br>

  With Cyberani’s AI-powered Security Operations Centre toolkit, you can minimise the impact of cyber threats on OT, ensuring steady operational efficiency for your facilities.`,
          functions: [
            {
              heading: "Around-the-clock Recovery Support",
              desc: "Our Security Operations Centre provides 24/7, on-demand support to identify indicators of compromise (IoS) and respond to intrusions and other cybersecurity incidents, ensuring minimal interruptions to industrial control systems (ICS).",
            },
            {
              heading: "Reverse Engineering and Digital Forensics Analysis",
              desc: "We swiftly decipher the sequence of events and the nature of malware to understand the enabling factors that helped make the attack possible.",
            },
            {
              heading: "Information Retrieval and Recovery",
              desc: "Our Security Information and Event Management (SIEM) software (part of SOC) enables quick restoration of processes to ensure business continuity.",
            },
            {
              heading: "Active Containment",
              desc: "We utilise various tools and methodologies to quickly isolate threats and reduce their impact on critical ICS operations.",
            },
            {
              heading: "Incident Response Management Framework",
              desc: "Our OT DFIR service helps develop lasting security incident response, recovery, and evidence management policies to prevent future cyber incidents.",
            },
          ],
          functionHeading: ` OT DFIR Service
                <span class="text-bright-teal">Functions</span> `,
        },
        features: {
          heading: ` OT DFIR Service
                <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Advanced Threat Detection and Prevention",
              desc: "Our low-code security orchestration, automation and response (SOAR) platform enables automated ingestion of alerts from all assets in your infrastructure.",
            },
            {
              heading: "Multilevel Impact Analysis",
              desc: "We employ both SIEM and SOAR to identify and assess attack vectors in various endpoints, including computers, mobile devices, and networks.",
            },
            {
              heading: "Automated Response and Recovery",
              desc: "Our SOAR platform orchestrates a range of security and networking tools to collect evidence, back up data, disable access, and power down the infrastructure as needed.",
            },
          ],
        },
        useCasesData: {
          heading: ` Use <span class="text-bright-teal">Cases</span>`,
          items: [
            {
              title: "Energy",
              desc: "Our ICS DFIR services can strengthen power utility infrastructure against sophisticated cyberattacks targeting SCADA systems. By implementing rigorous forensic analysis and incident response strategies, we ensure the integrity of power grids, preventing widespread outages and maintaining energy security.",
            },
            {
              title: "Manufacturing",
              desc: "Cyberani OT incident response experts help manufacturing facilities recover from ransomware attacks that threaten to halt production. Our rapid response and recovery solutions minimise downtime and secure manufacturing ICS against a range of threats, safeguarding productivity and profitability.",
            },
          ],
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "ot-cybersecurity-program": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` OT Cybersecurity Program`,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "OT Security" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: `Streamline your
              <span class="text-bright-teal">cybersecurity function</span> `,
          desc: `A well-built cybersecurity program will provide your organization with the required guidelines to conduct cybersecurity operations effectively. A robust cybersecurity program is a prerequisite for building a cyber-resilient organization.  Cyberani develops cybersecurity programs for our clients by aligning with NCA standards and NIST Cybersecurity Framework.   The cybersecurity programs that we develop will not only meet your present needs but also provide you with a scalable cybersecurity foundation to accommodate your organization’s future needs.`,
          functions: [
            {
              heading: "Information Gathering",
              desc: "The first step in our process of cybersecurity program development is information gathering. To accomplish this, we hold discussions with client’s stakeholders and review relevant organizational documentation to gather required information. This information helps us to have a clear understanding of the environment and discover the current security culture within the organization.",
            },
            {
              heading: "Program Development",
              desc: "Next, we analyze the information gathered and determine the components that are to be incorporated into the cybersecurity program of the client.  Then we create the necessary documentation that would serve as the foundation of the client’s cybersecurity program. The documents are developed by taking into consideration the regulatory requirements as well as the client’s security objectives.",
            },
          ],
          functionHeading: ` OT Cybersecurity Program Service
              <span class="text-bright-teal">Functions</span> `,
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "ot-cybersecurity-projects": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` OT Cybersecurity Projects`,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "OT Security" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: `Incorporate cybersecurity aspects in
              <span class="text-bright-teal">OT systems projects </span> `,
          desc: `OT systems are a main target of cyberattacks, which can disrupt operations, cause physical damage, and result in safety hazards. Incorporating the necessary OT cybersecurity aspects in the early phases of project development helps protect the OT systems in critical facilities against cyber breaches.  `,
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  // OT Security

  // DFIR
  "dfir-incident-response-retainer": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` Incident Response Retainer `,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "IR Retainer Hours" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: ` Build cyber resilience with expert-led,
              <span class="text-bright-teal">subscription-based support</span> `,
          desc: `85% of KSA organisations experienced an increase in cyberattacks that disrupt business operations. Given the high stakes of profits and reputation from data breaches, maintaining strategic oversight of your IT systems is crucial. Ensure the security and reliability of your cyber infrastructure with our Security Operations Centre (SOC), offered through a retainer-model Service Level Agreement (SLA).`,
          functions: [
            {
              heading: "Incident Response Preparation",
              desc: "Our digital forensics and cyber attack response specialists establish a proactive framework and procedures to identify vulnerabilities in your IT system, security tools, and data structures.",
            },
            {
              heading: "Collective Response Planning",
              desc: "We work closely with your team to develop lasting strategies for a coordinated and effective response against a range of threats.",
            },
            {
              heading: "Incident Triage and Classification",
              desc: "Our SOC classifies the nature and severity of the threat, directing resources for swift mitigation.",
            },
            {
              heading: "Active Response",
              desc: "We utilise various tools and methodologies to quickly isolate threats and reduce their impact on systems and data.",
            },
          ],
          functionHeading: ` Incident Response Retainer Service
              <span class="text-bright-teal">Functions</span> `,
        },
        features: {
          heading: ` Incident Response Retainer Service
              <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Flexible Pricing Models",
              desc: "We offer SLAs based on a convenient retainer model, ranging from 80 to 200 hours, with a customised selection of services.",
            },
            {
              heading: "Comprehensive Incident Management",
              desc: "Our retainer model covers a complete suite of on-demand incident response, compromise assessment, and tabletop exercise services tailored to your enterprise needs.",
            },
            {
              heading: "Swift Data Retrieval and Process Recovery",
              desc: "We enable quick restoration of compromised data and damaged infrastructure with advanced Security Information and Event Management (SIEM) software.",
            },
            {
              heading: "24/7 Incident Response Assistance",
              desc: "Our SOC enables  around-the-clock support to identify, respond, and mitigate breaches and other cybersecurity incidents, ensuring minimal business interruptions.",
            },
          ],
        },
        useCasesData: {
          heading: ` Use <span class="text-bright-teal">Cases</span>`,
          items: [
            {
              title: "Manufacturing",
              desc: `Our incident response services enable manufacturing firms to safeguard their product designs and proprietary manufacturing processes. Through continuous monitoring and rapid response, we ensure that intellectual property remains secure against industrial espionage, maintaining the firm's competitive advantage.`,
            },
            {
              title: "Retail",
              desc: "The comprehensive service portfolio can ensure that e-commerce platforms are resilient against attacks like DDoS, which can disrupt sales and erode customer trust. Our expertise in incident response preparation and active response mechanisms helps retailers quickly recover from such incidents, minimising downtime and financial losses",
            },
          ],
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "dfir-compromise-assessment": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` Compromise Assessment `,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "Compromise Assessment" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: ` Minimise the impact of data breaches and enhance your security posture with
                <span class="text-bright-teal">advanced tools</span> `,
          desc: `On average, it takes companies 5.5 days to detect and contain cyber incidents. As Shadow AI tools and malware become more accessible and advanced, hackers are able to exfiltrate data within hours, executing attacks faster than targets can mount a response. </br></br>

  Our advanced expertise and precise assessment toolkit enable quick identification of indicators of compromise (IoCs), enhancing incident response capabilities and safeguarding key enterprise data.`,
          functions: [
            {
              heading: "Post-Breach Analysis",
              desc: "We collect and investigate forensic data in network traffic, logs, and other endpoints to assess and validate the extent of any cyber incident and pinpoint remaining threats.",
            },
            {
              heading: "Proactive Infrastructure Enhancement",
              desc: "Our cybersecurity experts utilise our Security Operations Centre (SOC) toolkit to determine the attacker’s methods and intent, building an actionable roadmap to prevent future cyber incidents.",
            },
          ],
          functionHeading: ` Compromise Assessment Service
                <span class="text-bright-teal">Functions</span> `,
        },
        features: {
          heading: ` Compromise Assessment Service
                <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Automated Compromise Detection",
              desc: "Our Security Operations Centre employs best-in-class scanners to detect and assess IoCs and suspicious activities to determine whether a system or network has been hacked or compromised.",
            },
            {
              heading: "Universal Scanning Platform",
              desc: "We identify potential security breaches across all your network services, cloud infrastructure, web applications, APIs, mobile devices (including IoT), containers, and other systems and resources.",
            },
          ],
        },
        useCasesData: {
          heading: ` Use <span class="text-bright-teal">Cases</span>`,
          items: [
            {
              title: "Legal",
              desc: `Our experts can detect unauthorised access to sensitive client information in a law firm's document management system. By employing advanced forensic methods, we identify the breach's source, extent, and specific compromised documents. Leveraging the service's root cause analysis feature, we pinpoint the origins of the breach and provide clients with prioritised recommendations to prevent future incidents, thereby ensuring the confidentiality of client data.`,
            },
            {
              title: "Healthcare",
              desc: `We employ best-in-class threat identification methods to detect anomalies indicating a compromise, such as unusual access patterns or changes in file integrity within a hospital's electronic health records (EHR) system. The process ensures the hospital not only remediates the current threat but also strengthens its defences against future attacks, aligning with data privacy regulations such as the KSA Personal Data Protection Law.`,
            },
          ],
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  "dfir-tabletop-exercise": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` Tabletop Exercise `,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          { text: "Tabletop Exercise" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: ` Fine-tune your incident response strategy with real-life training scenarios and
                <span class="text-bright-teal">expert guidance</span> `,
          desc: `Only 30% of enterprise leaders in EMEA and LATAM conduct regular security incident simulations or red-team exercises, leaving their organisations vulnerable to emerging cybersecurity threats.
  Tabletop exercises in cybersecurity simulate real-world attacks to evaluate an organisation's response capabilities to a cybersecurity incident.  Our specialists employ up-to-date threat intelligence to construct customised attack scenarios, strengthening your IR strategy with the lessons learned.`,
          functions: [
            {
              heading: "Response Preparedness Assessment",
              desc: "We use expert assessment methodologies to identify strengths and weaknesses in your organisation’s decision-making processes to pinpoint critical areas of improvement so that your team is not caught off-guard during an actual cyberattack.",
            },
            {
              heading: "Internal Compliance Evaluation",
              desc: "Our cyber incident simulations help determine how your documented operational, technical, and executive procedures are reflected in practice.",
            },
            {
              heading: "Strategic Enhancement",
              desc: "We provide actionable recommendations to advance your enterprise’s incident response strategy based on your team’s performance and infrastructure resilience.",
            },
          ],
          functionHeading: ` Tabletop Exercise Service
                <span class="text-bright-teal">Functions</span> `,
        },
        features: {
          heading: ` Tabletop Exercise Service
                <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Comprehensive Review of Procedures",
              desc: "We utilise our best-in-class vulnerability scanners and industry expertise to assess your enterprise’s security documentation, tools, and capabilities, including various security policies and an incident response plan.",
            },
            {
              heading: "Interactive Roleplay Scenarios",
              desc: "Our threat intelligence specialists conduct interviews with key stakeholders across various departments to clarify their roles in responding to a cyber incident and engage them in the simulation.",
            },
            {
              heading: "Modern and Classic Threat Simulations",
              desc: "We employ technical and non-technical methods to mimic a wide range of traditional and novel incident scenarios, including advanced evasive attacks, manipulation of AI-powered tools, social engineering, malware, ransomware, and DDoS attacks. ",
            },
          ],
        },
        useCasesData: {
          heading: ` Use <span class="text-bright-teal">Cases</span>`,
          items: [
            {
              title: "Malware Phishing",
              desc: "In this scenario, a cyberattack is initiated by a seemingly innocuous email attachment opened by an employee. This exercise rigorously tests the organisation's incident response capabilities from the moment the malicious payload is detected: isolating the infected systems, analysing the malware's behaviour, identifying the data at risk, and executing a communication strategy with stakeholders.",
            },
            {
              title: "SQL Injection",
              desc: "During a routine system upgrade, a hidden SQL injection vulnerability is exploited, granting unauthorised access to a database containing sensitive customer information. Our experts employ sophisticated methods to test the organisation's readiness to swiftly identify the breach, secure affected databases, prevent further data leakage, and communicate effectively with stakeholders to manage the situation.",
            },
          ],
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  // DFIR

  // VAR
  "var-elite-partnerships": [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` Elite partnerships with leading Cybersecurity Technology vendors `,
        breadCrumbs: [
          {
            text: "Our Services",
            link: "our-services",
          },
          {
            text: "Elite partnerships with leading Cybersecurity Technology vendors",
          },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: ` Advanced cybersecurity solutions with greater return on
                <span class="text-bright-teal">investment (ROI)</span> `,
          desc: `Cyberani has established partnerships with leading cybersecurity technology vendors from around the globe. This allows us to offer our clients top-notch cybersecurity tools to address their different security needs. As a value-added reseller (VAR), we bring you a wide range of cybersecurity solutions and technologies that address your organization's security needs by covering the following cybersecurity solutions categories:
  <ul>
    <li>Cloud Security</li>
    <li>Network Security</li>
    <li>Endpoint Security</li>
    <li>Data Security</li>
    <li>Zero-Trust Security</li>
    <li>SIEM Solution</li>
  </ul>
  `,
        },
      },
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
  // VAR

  //Product Pages
  cylnx: [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: `  <img
              src="/images/service-page/banners/logos/1.svg"
              alt="hero-title"
              class="ltr:mr-[1.66666666667vw] rtl:ml-[1.66666666667vw] lg:h-[3.125vw] h-[38px] object-contain"
            />   Next-gen Secure Connectivity`,
        src: "/images/service-page/banners/product1.png",
        logo: true,
        breadCrumbs: [
          {
            text: "CyProducts",
            link: "cylnx",
          },
          { text: "CyLnx" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: `<span class="text-bright-teal">Tunnel-less</span> SaaS solution that embraces a zero-trust model. Built to accelerate and secure organizations’ connectivity demands.
             `,
          desc: `In today's fast-paced world, enterprises are adopting distributed and cloud technologies, which bring its own set of connectivity challenges.  </br> </br>
  With an increase in cyber risks, enterprises must prioritize secure connections to protect their cloud infrastructure. Introducing our cutting-edge product “CyLnx” built to accelerate and secure organizations’ connectivity demands in the era of digital revolution.`,

          content2: {
            title: ` What’s different in CyLnx?`,
            desc: `CyLnx is a secure smart routing solution that replaces the 90s IPsec technology by providing a secure tunnel-free technology with no performance impact only better security and performance in return.`,
          },
          functions: [
            {
              heading:
                "<span class='lg:text22 mtext22'><strong>Zero Trust model</strong> <span class='font-normal'>, where verification is required for every access request</span></span>",
            },
            {
              heading:
                "<span class='lg:text22 mtext22'><strong>Adaptive Encryption</strong> <span class='font-normal'>, guarantees the highest level of data security and protecting sensitive information</span></span>",
            },
            {
              heading:
                "<span class='lg:text22 mtext22'><strong>Fine-grained segmentation</strong> <span class='font-normal'>, enables precise control of network access, enhancing security and optimizing performance</span></span>",
            },
            {
              heading:
                "<span class='lg:text22 mtext22'><strong>Supports various compliance standards</strong> <span class='font-normal'>, to meet regulatory requirements</span></span>",
            },
            {
              heading:
                "<span class='lg:text22 mtext22'><strong>Serves multi-cloud approach</strong> <span class='font-normal'>, by facilitating seamless access to various cloud services</span></span>",
            },
            {
              heading:
                "<span class='lg:text22 mtext22'><strong>Subscription-based model</strong> <span class='font-normal'>, with no capital expenditure (CAPEX), ensuring flexibility and minimal initial investment</span></span>",
            },
          ],
          functionHeading: ` What else ? `,
          functionDesc: `This solution offers tailor-made features to your business environment, including`,
        },
        features: {
          heading: ` CyLnxService 
            <span class="text-bright-teal">Features</span>`,
          items: [
            {
              heading: "Zero Trust model",
              desc: "Where verification is required for every access request.",
            },
            {
              heading: "Full Encryption",
              desc: "Guarantees the highest level of data security and protecting sensitive information.",
            },
            {
              heading: "Supports various compliance standards",
              desc: "To meet regulatory requirements.",
            },
            {
              heading: "Serves multi-cloud approach",
              desc: "By facilitating seamless access to various cloud services.",
            },
            {
              heading: "Subscription-based model",
              desc: "With no capital expenditure (CAPEX), ensuring flexibility and minimal initial investment.",
            },
            {
              heading: "Cylnx",
              desc: "Offered as SaaS solution delivered by Cyberani, designed to streamline operational efficiency for our clients. By managing the underlying hardware, software updates and network management, Cyberani alleviates the necessity for extensive in-house technical expertise and significantly reduces capital expenditures associated with network infrastructure. This allows our clients to focus their resources on core business activities, enhancing productivity and profitability.",
            },
          ],
        },
        useCasesData: {
          heading: ` Use <span class="text-bright-teal">Cases</span>`,
          versusData: {
            title: "Product VS Other Technology",
            desc: "All other technologies in the market rely on tunnel routing protocols even the ones claiming to be “tunnel-less” except for our solution. ",
          },
          items: [
            {
              title: "IoT (Internet of Things) Connectivity",
              desc: "CyLnx is used to securely connect IoT devices across distributed environments.",
            },
            {
              title: "SD-WAN (Software-Defined Wide Area Network)",
              desc: "CyLnx is used in SD-WAN deployments to optimize network performance and security.",
            },
            {
              title: "SDBranch",
              desc: "Deploy CyLnx in branch offices to unify networking and security under a single, software-defined architecture.",
            },

            {
              title: "Multi-Cloud Networking",
              desc: "CyLnx connects different cloud environments seamlessly.",
            },
            {
              title: "Disaster recovery",
              desc: "CyLnx dynamic routing and real-time monitoring capabilities lead to an efficient disaster recovery.",
            },
          ],
        },
      },
    },
  ],
  cymark: [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` <img
              src="/images/service-page/banners/logos/2.svg"
              alt="hero-title"
              class="ltr:mr-[1.66666666667vw] rtl:ml-[1.66666666667vw] lg:h-[3.125vw] h-[38px] object-contain"
            />   More than just a watermark`,
        src: "/images/service-page/banners/product2.png",
        logo: true,
        breadCrumbs: [
          {
            text: "CyProducts",
            link: "cymark",
          },
          { text: "CyMark" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: ` How <span class="text-bright-teal">CyMark</span>  Enhances Security?
             `,
          desc: `CyMark is an innovative watermark solution to protect your organization against sensitive data leaks and unauthorized distribution of information. It is more than just a watermark. 
</br></br>
CyMark embeds a unique watermark that is cryptographically linked to the user allowing you to trace the source of any leaks and the time of that picture or snapshot being taken or document shared without exposing your username schema or IPs/MAC Addresses. 
</br></br>
The solution is designed to be tamper-proof, watermark cannot be removed or disabled.`,
        },
        features: {
          heading: ` CyMarkService 
            <span class="text-bright-teal">Features</span>`,
          items: [
            {
              bigHeading: true,
              heading: "01",
              desc: "Machine and User Identities Cryptography",
            },
            {
              bigHeading: true,
              heading: "02",
              desc: "Real-time Leakage Tracking",
            },
            {
              bigHeading: true,
              heading: "03",
              desc: "Multi-Platform Support",
            },
            {
              bigHeading: true,
              heading: "04",
              desc: "Multi-layer Watermark",
            },
            {
              bigHeading: true,
              heading: "05",
              desc: "Cloud or On-Premises Policy Servers",
            },
            {
              bigHeading: true,
              heading: "06",
              desc: "Supports Customization",
            },
          ],
        },
        useCasesData: {
          heading: ` Use <span class="text-bright-teal">Cases</span>`,
          versusData: {
            title: "Product VS Other Technology",
            desc: "All other technologies in the market rely on tunnel routing protocols even the ones claiming to be “tunnel-less” except for our solution. ",
          },
          items: [
            {
              title: "01",
              desc: "Organizations with remote employees can implement the software to ensure that sensitive data remains secure while working from home.",
            },
            {
              title: "02",
              desc: "Using CyMark will ensure your compliance with NCA's sub-control 2-4-1-1 for DCC",
            },
            {
              title: "03",
              desc: "During virtual meetings, sensitive information may be shared. The solution can display watermarks on shared screens and participant webcams.",
            },
            {
              title: "04",
              desc: "Software development companies can use watermarks to protect source code and proprietary algorithms shared during collaborations or client presentations.",
            },
            {
              title: "05",
              desc: "Organizations can monitor and prevent internal threats by tracking unauthorized access and potential data leaks by employees.",
            },
          ],
        },
      },
    },
  ],
  cycomm: [
    {
      component_handel: "pages/service-page/hero/Hero",
      content: {
        title: ` <img
              src="/images/service-page/banners/logos/3.svg"
              alt="hero-title"
              class="ltr:mr-[1.66666666667vw] rtl:ml-[1.66666666667vw] lg:h-[3.125vw] h-[38px] object-contain"
            />    Saudi Secure Communication Platform`,
        src: "/images/service-page/banners/product3.png",
        logo: true,
        breadCrumbs: [
          {
            text: "CyProducts",
            link: "cycomm",
          },
          { text: "CyComm" },
        ],
      },
    },
    {
      component_handel: "pages/service-page/service-overview/ServiceOverview",
      content: {
        intro: {
          title: `Revolutionizing Secure Communication in  <span class="text-bright-teal">Saudi Arabia</span>
             `,
          desc: `CyComm is a secure communication platform providing military-grade, mission-critical secured applications along with proprietary hardware for mobile and laptop devices. Hosted in our Saudi Cloud, CyComm ensures that all communications remain within the Kingdom, offering unparalleled security and control.`,

          functions: [
            {
              heading:
                "<span class='lg:text24 mtext24 text-gray font-bold'>Audio and Video Calls</span>",
              desc: `<p> <span class='text-bright-teal font-bold'>High-Quality Communication:</span> Provide crystal-clear audio and video for one-to-one and group calls, with minimal latency even in low-bandwidth scenarios.</p>
           <p> <span class='text-bright-teal font-bold'>Client-Server End-to-End Encryption:</span> Calls must be fully encrypted to prevent unauthorized access and ensure privacy.</p>
           <p> <span class='text-bright-teal font-bold'>Cross-Platform Compatibility:</span> Ensure consistent functionality across desktop and mobile devices.</p>`,
            },
            {
              heading:
                "<span class='lg:text24 mtext24 text-gray font-bold'>Messaging</span>",
              desc: `<p> <span class='text-bright-teal font-bold'>Real-Time Chat:</span> Enable secure instant messaging for individuals and groups, with synchronized chat histories across devices.</p>
           <p> <span class='text-bright-teal font-bold'>File and Media Sharing:</span> Support encrypted sharing of files, images, videos, and other media, ensuring the integrity and confidentiality of transferred data.</p>
           <p> <span class='text-bright-teal font-bold'>Location Sharing:</span> Allow secure, optional sharing of user locations for enhanced collaboration in field operations.</p>
           <p> <span class='text-bright-teal font-bold'>Message Retention Policies:</span> Include customizable options for message expiry and retention, with server-side enforcement.</p>`,
            },
            {
              heading:
                "<span class='lg:text24 mtext24 text-gray font-bold'>[Real-time] Collaboration</span>",
              desc: `<p> <span class='text-bright-teal font-bold'>Secure Collaboration:</span> Allow users to securely share their screens during calls or meetings, ensuring that only authorized participants can view the shared content.</p>
           <p> <span class='text-bright-teal font-bold'>Quality and Performance:</span> Deliver high-resolution screen sharing with low latency for a seamless experience.</p>
           <p> <span class='text-bright-teal font-bold'>Granular Controls:</span> Provide presenters with options to control access, pause sharing, or restrict visibility to specific applications or windows.</p>`,
            },
            {
              heading:
                "<span class='lg:text24 mtext24 text-gray font-bold'>User Management</span>",
              desc: `<p> <span class='text-bright-teal font-bold'>Granular Role-Based Access Control:</span> Allow administrators to assign roles with varying levels of permissions, such as user, moderator, and administrator roles.</p>
           <p> <span class='text-bright-teal font-bold'>Session Management:</span> Enable real-time monitoring and control of active sessions, including the ability to terminate sessions if necessary.</p>
           <p> <span class='text-bright-teal font-bold'>User Segregation:</span> Implement multitenant architecture to ensure strict segregation of users between departments or organizations, with fully customizable Visibility Rules.</p>`,
            },
            {
              heading:
                "<span class='lg:text24 mtext24 text-gray font-bold'>Group Communication</span>",
              desc: `<p> <span class='text-bright-teal font-bold'>Multiparty Audio and Video Calls:</span> Support high-capacity group calls with customizable bandwidth configurations to face different usage scenarios.</p>
           <p> <span class='text-bright-teal font-bold'>Group Chats:</span> Provide persistent and secure group messaging with files, media, and location sharing.</p>`,
            },
            {
              heading:
                "<span class='lg:text24 mtext24 text-gray font-bold'>User Interface and Experience</span>",
              desc: `<p> <span class='text-bright-teal font-bold'>Intuitive Design:</span> Deliver a user experience similar to popular consumer-grade applications, ensuring ease of adoption with minimal training.</p>
           <p> <span class='text-bright-teal font-bold'>Customizability:</span> Allow customization of the user interface to reflect organizational branding or customer preferences.</p>
           <p> <span class='text-bright-teal font-bold'>Mobile Optimization:</span> Provide fully functional mobile clients optimized for smartphones and tablets.</p>`,
            },
            {
              heading:
                "<span class='lg:text24 mtext24 text-gray font-bold'>Additional Features for Enhancing Confidentiality and Integrity</span>",
              desc: `<p> <span class='text-bright-teal font-bold'>Authentication Layer:</span><br/> Require users to authenticate for all communication activities, ensuring authorized access.</p>
         <p> <span class='text-bright-teal font-bold'>Security Logs:</span><br/> Maintain secure logs of communication events for compliance and auditing purposes.</p>
         <p> <span class='text-bright-teal font-bold'>Auditing Option:</span><br/> Possibility to enable auditing features for audio/video calls.</p>
         <p> <span class='text-bright-teal font-bold'>Data Integrity Checks:</span><br/> Use cryptographic methods (e.g., SHA-256) to ensure that all transferred data remains unaltered.</p>`,
              widthFull: true,
            },
          ],
          uniqueFuction: true,
          functionHeading: ` Product <span class='text-bright-teal'>Features</span> `,
        },
        features: {
          heading: ` Product <span class="text-bright-teal">VS</span>  Other Technology 
            `,
          desc: `Fully Localized in the Kingdom: Unlike other technologies, CyComm guarantees that all data and communications stay within Saudi Arabia, providing unmatched security and compliance with local regulations.`,
        },
        useCasesData: {
          heading: ` Use <span class="text-bright-teal">Cases</span>`,

          items: [
            {
              title: "Government and Military Communications",
              desc: "Secure and reliable communication for sensitive government and military operations.",
            },
            {
              title: "Healthcare",
              desc: "Ensures the confidentiality and integrity of patient information during telemedicine consultations.",
            },
            {
              title: "Corporate Communications",
              desc: "Protects corporate data and communications from cyber threats.",
            },
            {
              title: "Financial Services",
              desc: "Safeguards financial transactions and communications against cyber attacks.",
            },
          ],
        },
      },
    },
  ],

  // SERVICE PAGES ENDING

  "contact-us": [
    {
      component_handel: "common/subpage-hero/SubPageHero",
      content: {
        heading: "Fortify Your Digital Infrastructure",
        desc: "Elevate your cybersecurity posture with our next-generation services.",
        banner: {
          src: "/images/contact-us/hero.jpg",
        },
        breadcrumbs: [{ text: "Contact Us" }],
      },
    },
    {
      component_handel: "pages/contact-us/locations/Locations",
      content: {},
    },
    {
      component_handel: "common/contact/Contact",
      content: {},
    },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[]; locale: string }>;
}) {
  const { slug } = await params;
  const finalSlug = slug[slug.length - 1];

  const pages = new Map([
    ["about", "About"],
    ["our-services", "Our Services"],
    ["careers", "Careers"],
    ["media-center", "Media Center"],
    ["news-single-page", "News"],
    ["blogs-single-page", "Blogs"],
    ["terms-of-use", "Terms of Use"],
    ["privacy-policy", "Privacy Policy"],
    ["contact-us", "Contact Us"],
    ["mdr", "Managed Detection and Response (MDR)"],
    ["msoc", "MSOC IT & OT"],
    ["cybersecurity-monitoring-services", "Cybersecurity Monitoring Services"],
    ["brand-protection", "Brand Protection"],
    ["threat-intelligence", "Threat Intelligence"],
    ["grc-cybersecurity-strategy", "(GRC) Cybersecurity Strategy"],
    ["grc-cybersecurity-program", "(GRC) Cybersecurity Program"],
    ["grc-cybersecurity-awareness", "(GRC) Cybersecurity Awareness"],
    [
      "grc-cybersecurity-risk-assessment",
      "(GRC) Cybersecurity Risk Assessment",
    ],
    ["grc-compliance-assessment", "(GRC) Cybersecurity Compliance Assessment"],
    [
      "grc-cybersecurity-maturity-assessment",
      "(GRC) Cybersecurity Maturity Assessment",
    ],
    ["offensive-vulnerability-assessment", "Vulnerability Assessment"],
    ["offensive-penetration-testing", "Penetration Testing"],
    ["offensive-source-code-review", "Source Code Review"],
    ["offensive-red-teaming", "Red Teaming"],
    ["offensive-mobile-app-assessment", "Mobile App Assessment"],
    ["offensive-web-app-assessment", "Web App Assessment"],
    ["ot-grc", "OT GRC"],
    ["ot-maturity-risk-assessment", "OT Maturity Risk Assessment"],
    ["ot-penetration-testing", "OT Penetration Testing"],
    ["ot-architectural", "OT Architectural"],
    ["ot-auto-assets-discovery", "OT Automated Assets Discovery Solutions"],
    ["ot-dfir", "OT DFIR"],
    ["ot-cybersecurity-program", "OT Cybersecurity Program"],
    ["ot-cybersecurity-projects", "OT Cybersecurity Projects"],
    ["dfir-incident-response-retainer", "Incident Response Retainer"],
    ["dfir-compromise-assessment", "Compromise Assessment"],
    ["dfir-tabletop-exercise", "Tabletop Exercise"],
    [
      "var-elite-partnerships",
      "Elite partnerships with leading Cybersecurity Technology vendors",
    ],
    // Product Pages
    ["cylnx", "cylnx"],
    ["cymark", "cymark"],
    ["cycomm", "cycomm"],
  ]);

  const title = pages.get(finalSlug) || "Cyberani";

  return getStaticMetaData({
    title: `${title} | Cyberani`,
    description:
      "Cyberani is a leading cybersecurity provider in Saudi Arabia, offering state-of-the-art SOC services powered by 100% Saudi calibres.",
    isRobotFollow: false,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[]; locale: string }>;
}) {
  const { slug, locale } = await params;
  const isAr = locale == "ar";
  const finalSlug = slug[slug.length - 1];
  const pages = [
    "about",
    "our-services",
    "careers",
    "media-center",
    "news-single-page",
    "blogs-single-page",
    "terms-of-use",
    "privacy-policy",
    "contact-us",
    "mdr",
    "msoc",
    "cybersecurity-monitoring-services",
    "brand-protection",
    "threat-intelligence",
    "grc-cybersecurity-strategy",
    "grc-cybersecurity-program",
    "grc-cybersecurity-awareness",
    "grc-cybersecurity-risk-assessment",
    "grc-compliance-assessment",
    "grc-cybersecurity-maturity-assessment",
    "offensive-vulnerability-assessment",
    "offensive-penetration-testing",
    "offensive-source-code-review",
    "offensive-red-teaming",
    "offensive-mobile-app-assessment",
    "offensive-web-app-assessment",
    "ot-grc",
    "ot-maturity-risk-assessment",
    "ot-penetration-testing",
    "ot-architectural",
    "ot-auto-assets-discovery",
    "ot-dfir",
    "ot-cybersecurity-program",
    "ot-cybersecurity-projects",
    "dfir-incident-response-retainer",
    "dfir-compromise-assessment",
    "dfir-tabletop-exercise",
    "var-elite-partnerships",
    // Product Pages
    "cylnx",
    "cymark",
    "cycomm",
  ];
  const isBlack = [
    "news-single-page",
    "blogs-single-page",
    "terms-of-use",
    "privacy-policy",
  ].includes(finalSlug.toLocaleLowerCase());
  console.log(isAr);
  return (
    // FIXME: slugs array need to be handeld
    pages.includes(finalSlug.toLocaleLowerCase()) ? (
      <Layout blackHeader={isBlack} arabic={isAr}>
        <ComponentMapper
          content={data[finalSlug][0].content}
          components={data[finalSlug]}
          arabic={isAr}
        />
      </Layout>
    ) : (
      <div>notFound</div>
    )
  );
}
