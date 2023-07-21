import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { carers, caterthumb, neom, sta, taadhod, tamm } from "../assets";
import Card from "../components/Card";

export const socials = [
  {
    link: "https://www.linkedin.com/in/smadixd/",
    icon: <AiFillLinkedin size={23} />,
    text: "Linkedin",
  },
  {
    link: "https://github.com/smadixd",
    icon: <AiFillGithub size={23} />,
    text: "Github",
  },
  {
    link: "mailto:smadi.dev@gmail.com",
    icon: <AiOutlineMail size={23} />,
    text: "E-Mail",
  },
];

export const projects = [
  {
    key: "1",
    content: (
      <Card
        imagen={neom}
        link="https://www.neom.com"
        title="Neom (OXAGON)"
        description="A city in neom, oxagon will be a new paradigm where people, industries and technology come together in harmony with nature."
      />
    ),
  },
  {
    key: "2",
    content: (
      <Card
        imagen={tamm}
        link="https://www.tamm.abudhabi/"
        title="Tamm"
        description="A unified system helping you find Abu Dhabi government services and information"
      />
    ),
  },
  {
    key: "3",
    content: (
      <Card
        imagen={sta}
        link="https://www.sta.gov.sa"
        title="Saudi Tourism Authority"
        description="STA was established to support the growth of the travel and tourism sector by serving the needs of tourism companies and other commercial partners."
      />
    ),
  },
  {
    key: "4",
    content: (
      <Card
        imagen={carers}
        link="https://carers.care/"
        title="Carers"
        description="Carers is a Home Care Digital Solution that provides reliable, affordable, and secure home care experiences for Care Receivers, Home Care Agencies, and Care Providers."
      />
    ),
  },
  {
    key: "5",
    content: (
      <Card
        imagen={taadhod}
        link="https://apps.apple.com/qa/app/al-taadhod-%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D8%B6%D8%AF/id1486671642"
        android={
          "https://play.google.com/store/apps/details?id=com.altaadhodgroup.app&hl=en&gl=US"
        }
        ios={
          "https://apps.apple.com/qa/app/al-taadhod-%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D8%B6%D8%AF/id1486671642"
        }
        title="Al-Ta'adhod"
        description="Al-Taadhod Mobile application offers you a new experience to buy Gree air conditioner at the best prices in Qatar with smart purchase control and request installation or maintenance services."
      />
    ),
  },
  {
    key: "6",
    content: (
      <Card
        imagen={caterthumb}
        link="https://caterthumb.com"
        title="CaterThumb"
        android="https://play.google.com/store/apps/details?id=com.caterthump"
        ios="https://apps.apple.com/us/app/caterthumb/id1668372746"
        description="Cater Thumb is the first end-to-end online SAAS E-procurement solution."
      />
    ),
  },
];

export const sections = ["", "about", "projects", "contact"];
