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

export const email = "alsmadi.work@gmail.com";

type IconProps = React.ComponentProps<IconType>;

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
    imagen: neom,
    link: "https://www.neom.com",
    title: "Neom (OXAGON)",
    description:
      "A city in neom, oxagon will be a new paradigm where people, industries and technology come together in harmony with nature.",
    internal: true,
  },
  {
    imagen: tamm,
    link: "https://www.tamm.abudhabi/",
    title: "Tamm",
    description:
      "A unified system helping you find Abu Dhabi government services and information",
    internal: true,
  },
  {
    imagen: sta,
    link: "https://www.sta.gov.sa",
    title: "Saudi Tourism Authority",
    description:
      "STA was established to support the growth of the travel and tourism sector by serving the needs of tourism companies and other commercial partners.",
    internal: true,
  },
  {
    imagen: mawani,
    link: "https://mawani.gov.sa/",
    title: "Saudi Ports Authority",
    description:
      "Saudi Ports Authority is a government agency that supervises the ports of Saudi Arabia.",
    internal: true,
  },
  {
    imagen: taadhod,
    link: "https://altaadhod.com/",
    android:
      "https://play.google.com/store/apps/details?id=com.altaadhodgroup.app&hl=en&gl=US",

    ios: "https://apps.apple.com/qa/app/al-taadhod-%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D8%B6%D8%AF/id1486671642",
    title: "Al-Ta'adhod",
    description:
      "Al-Taadhod Mobile application offers you a new experience to buy Gree air conditioner at the best prices in Qatar.",
  },
  {
    imagen: carers,
    link: "https://carers.care/",
    title: "Carers",
    android:
      "https://play.google.com/store/apps/details?id=com.kensoftware.carers&hl=en&gl=US",
    ios: "https://apps.apple.com/jo/app/carers/id1271137642",
    description:
      "Carers is a Home Care Digital Solution that provides reliable, affordable, and secure home care experiences for Care Receivers, Home Care Agencies, and Care Providers.",
  },
  {
    imagen: quds,
    link: "https://qudspaints.com/",
    android:
      "https://play.google.com/store/apps/details?id=com.qudspaints.application",
    ios: "https://apps.apple.com/jo/app/quds-paints/id1586441008",
    title: "Quds Paints",
    description:
      "Quds Paints, established in 1993 in Jordan, started small but has become a key player in the paint industry. They focus on quality, eco-friendly products at fair prices, aiming for customer satisfaction and environmental responsibility.",
  },
  {
    imagen: janah,
    link: "https://janahalaman.com/",
    android: "https://play.google.com/store/apps/details?id=com.janahalaman",
    ios: "https://apps.apple.com/vn/app/janahalaman/id6473704324",
    title: "Janah Al Aman",
    description:
      "A revolutionizing transportation solution in Riyadh, focusing on wheelchair accessibility and family-friendly travel.",
  },
  {
    imagen: caterthumb,
    link: "https://caterthumb.com",
    title: "CaterThumb",
    android: "https://play.google.com/store/apps/details?id=com.caterthump",
    ios: "https://apps.apple.com/us/app/caterthumb/id1668372746",
    description:
      "Cater Thumb is the first end-to-end online SAAS E-procurement solution.",
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
