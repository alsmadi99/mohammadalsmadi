import {
  carers,
  caterthumb,
  taadhod,
  neom,
  tamm,
  sta,
  quds,
  janah,
  mawani,
} from "../assets";

import { MdOutlineEmail } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IconType } from "react-icons";
import type { ComponentProps } from "react";

export const email = "alsmadi.work@gmail.com";
export const contactLink = "mailto:alsmadi.work@gmail.com";
export const cvLink = "/Mohammad_Alsmadi_CV.pdf";
export const availability = [
  "Open to Senior/Lead full-time roles",
  "Available for contract and consulting",
  "Timezone: UAE (GMT+4), replies within 24 hours",
];

type IconProps = ComponentProps<IconType>;

export const socials = [
  {
    link: "https://www.linkedin.com/in/alsmadi99",
    icon: (props: IconProps) => <AiFillLinkedin size={23} {...props} />,
    text: "Linkedin",
  },
  {
    link: "https://github.com/alsmadi99",
    icon: (props: IconProps) => <AiFillGithub size={23} {...props} />,
    text: "Github",
  },
  {
    link: `mailto:${email}`,
    icon: (props: IconProps) => <MdOutlineEmail size={23} {...props} />,
    text: "E-Mail",
  },
];

export const github_sponsor_link = "https://github.com/sponsors/alsmadi99";
export const projects = [
  {
    category: "enterprise",
    imagen: neom,
    link: "https://www.neom.com",
    title: "Neom (OXAGON)",
    role: "Senior Software Engineer",
    stack: "React, TypeScript, Node.js",
    impact:
      "Delivered features for high-visibility national-scale initiatives.",
    description:
      "Built secure enterprise web capabilities for cross-functional teams under strict delivery timelines.",
    internal: true,
    confidentiality:
      "Public details are limited due to client confidentiality.",
  },
  {
    category: "enterprise",
    imagen: tamm,
    link: "https://www.tamm.abudhabi/",
    title: "Tamm",
    role: "Senior Software Engineer",
    stack: "React, TypeScript, API integrations",
    impact:
      "Shipped citizen-facing flows in a mission-critical government platform.",
    description:
      "Implemented and maintained service flows used by residents to access government services.",
    internal: true,
    confidentiality:
      "Public details are limited due to client confidentiality.",
  },
  {
    category: "enterprise",
    imagen: sta,
    link: "https://www.sta.gov.sa",
    title: "Saudi Tourism Authority",
    role: "Senior Software Engineer",
    stack: "React, TypeScript, Node.js",
    impact:
      "Improved release reliability by standardizing delivery across teams.",
    description:
      "Built and improved digital experiences supporting tourism services and partner operations.",
    internal: true,
    confidentiality:
      "Public details are limited due to client confidentiality.",
  },
  {
    category: "enterprise",
    imagen: mawani,
    link: "https://mawani.gov.sa/",
    title: "Saudi Ports Authority",
    role: "Senior Software Engineer",
    stack: "React, TypeScript, PostgreSQL",
    impact:
      "Delivered features for logistics-focused workflows in a regulated environment.",
    description:
      "Contributed to digital services that support core port and maritime operations.",
    internal: true,
    confidentiality:
      "Public details are limited due to client confidentiality.",
  },
  {
    category: "mobile",
    imagen: taadhod,
    link: "https://altaadhod.com/",
    android:
      "https://play.google.com/store/apps/details?id=com.altaadhodgroup.app&hl=en&gl=US",

    ios: "https://apps.apple.com/qa/app/al-taadhod-%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D8%B6%D8%AF/id1486671642",
    title: "Al-Ta'adhod",
    role: "Full-Stack/Mobile Engineer",
    stack: "React Native, Node.js",
    impact:
      "Launched cross-platform commerce experiences with production payment flows.",
    description:
      "Built a mobile commerce app for product discovery, checkout, and account management.",
  },
  {
    category: "mobile",
    imagen: carers,
    link: "https://carers.care/",
    title: "Carers",
    android:
      "https://play.google.com/store/apps/details?id=com.kensoftware.carers&hl=en&gl=US",
    ios: "https://apps.apple.com/jo/app/carers/id1271137642",
    role: "Mobile Engineer",
    stack: "React Native, APIs, notifications",
    impact:
      "Delivered a stable app experience for care providers and families.",
    description:
      "Built care workflow features for scheduling, communication, and service delivery.",
  },
  {
    category: "mobile",
    imagen: quds,
    link: "https://qudspaints.com/",
    android:
      "https://play.google.com/store/apps/details?id=com.qudspaints.application",
    ios: "https://apps.apple.com/jo/app/quds-paints/id1586441008",
    title: "Quds Paints",
    role: "Mobile Engineer",
    stack: "React Native, REST APIs",
    impact:
      "Shipped a production app that supports product browsing and order journeys.",
    description:
      "Built a customer mobile app focused on discovery, engagement, and purchasing flows.",
  },
  {
    category: "mobile",
    imagen: janah,
    link: "https://janahalaman.com/",
    android: "https://play.google.com/store/apps/details?id=com.janahalaman",
    ios: "https://apps.apple.com/vn/app/janahalaman/id6473704324",
    title: "Janah Al Aman",
    role: "Mobile Engineer",
    stack: "React Native, mapping, booking APIs",
    impact: "Released accessibility-first transportation booking features.",
    description:
      "Built transportation app features for accessible and family-friendly travel.",
  },
  {
    category: "mobile",
    imagen: caterthumb,
    link: "https://caterthumb.com",
    title: "CaterThumb",
    android: "https://play.google.com/store/apps/details?id=com.caterthump",
    ios: "https://apps.apple.com/us/app/caterthumb/id1668372746",
    role: "Full-Stack/Mobile Engineer",
    stack: "React Native, Node.js, SaaS architecture",
    impact: "Delivered an end-to-end procurement workflow for business users.",
    description:
      "Built a mobile-first SaaS procurement solution from onboarding to purchasing.",
  },
];

export const games = ["League of Legends", "Counter Strike 2", "Rocket League"];

export const contributions = [
  {
    name: "Lichess",
    link: "https://github.com/lichess-org/lila",
    repo: "lichess-org/lila",
  },
  {
    name: "Eslint",
    link: "https://github.com/eslint/eslint.org",
    repo: "eslint/eslint.org",
  },
  {
    name: "Yail",
    link: "https://github.com/programmer-network/yail",
    repo: "programmer-network/yail",
  },
];

export const experiences = [
  {
    name: "Abu Dhabi Social Support Authority",
    link: "https://www.ssa.gov.ae",
    role: "Senior Software Engineer",
    start: "2024-05-15",
    end: null,
  },
  {
    name: "PriceWaterhouseCoopers (PwC)",
    link: "https://www.pwc.com",
    role: "Senior Software Engineer",
    start: "2021-08-01",
    end: "2025-05-08",
  },
  {
    name: "Kensoftware",
    link: "https://www.kensoftware.com",
    role: "Software Engineer",
    start: "2020-08-01",
    end: "2021-08-01",
  },
];

export const buyMeACoffee = "https://www.buymeacoffee.com/smadi";
