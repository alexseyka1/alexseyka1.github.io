import React from "react";
import { SKILLS } from "./skills";

type Photo = {
  src: string;
  width: number;
  height: number;
  className?: string;
};

export type Project = {
  id: string;
  name: string;
  thumbnail: Photo;
  logo: Photo;
  detailsImage: Photo;
  timePeriod: React.ReactNode;
  shortLine: string;
  title: string;
  description: string;
  position: string;
  website?: string;
  internetArchiveUrl?: string;
  skills?: typeof SKILLS;
  hasContent?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "dok",
    name: "Dok.ua",
    position: "Junior PHP developer",
    thumbnail: {
      src: "/img/projects/dok/thumbnail.jpeg",
      width: 1665,
      height: 694,
    },
    logo: {
      src: "/img/projects/dok/logo.png",
      width: 57,
      height: 57,
    },
    detailsImage: {
      src: "/img/projects/dok/website.png",
      width: 2000,
      height: 1200,
    },
    timePeriod: <>2015 &mdash; 2017</>,
    shortLine: "My first commercial project",
    title: "Online auto parts store Dok.ua",
    description:
      "Leading Ukrainian e-commerce platform specializing in automotive parts, fluids, and accessories",
    website: "https://dok.ua/",
    internetArchiveUrl:
      "http://web.archive.org/web/20170331140647/http://dok.dbroker.com.ua/",
    skills: {
      backend: ["PHP 5.6", "Yii 1", "MySQL 5.7", "Sphinx Search"],
      frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "Angular 2",
        "Bootstrap 3",
      ],
      tools: ["Git", "GitHub", "Sublime Text 2"],
    },
    hasContent: true,
  },
  {
    id: "solar-service-group",
    name: "Solar Service Group",
    position: "Full Stack Developer",
    thumbnail: {
      src: "/img/projects/ssg/thumbnail.jpeg",
      width: 1500,
      height: 430,
    },
    logo: {
      src: "/img/projects/ssg/logo.jpeg",
      width: 250,
      height: 250,
    },
    detailsImage: {
      src: "/img/projects/ssg/website.png",
      width: 1000,
      height: 625,
    },
    timePeriod: <>2017 &mdash; 2022</>,
    shortLine: "My first foreign project",
    title: "Solar Service Group",
    description:
      "Trusted Australian company that specialise in solar battery storage solutions, service, maintenance and repairs of PV solar systems nationally.",
    website: "https://solarservicegroup.com.au/",
    internetArchiveUrl:
      "https://web.archive.org/web/20170217064645/http://solarservicegroup.com.au/",
    skills: {
      backend: ["PHP 5.6", "Yii 1", "MySQL 5.7"],
      frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "Vue.js",
        "Bootstrap 3",
      ],
      tools: ["Git", "Bitbucket"],
    },
    hasContent: true,
  },
  {
    id: "rush-hq",
    name: "Rush HQ",
    position: "Full Stack Developer",
    thumbnail: {
      src: "/img/projects/rush-hq/thumbnail.jpeg",
      width: 1200,
      height: 800,
    },
    logo: {
      src: "/img/projects/rush-hq/logo.png",
      width: 345,
      height: 200,
    },
    detailsImage: {
      src: "/img/projects/rush-hq/website.png",
      width: 5120,
      height: 2880,
    },
    timePeriod: <>2018 &mdash; 2023</>,
    shortLine: "And it’s not just about trampolines",
    title: "Melbourne’s premier indoor adventure park.",
    description:
      "Melbourne’s premier, large-scale indoor adventure park in Rowville, Melbourne, offering over 100+ interconnected trampolines, a high-ropes course, climbing walls, and a ninja warrior course.",
    website: "https://www.rushhq.com.au/",
    internetArchiveUrl:
      "https://web.archive.org/web/20200305022901/https://reservations.rushhq.com.au/party?pid=&h=",
    skills: {
      backend: ["PHP 5.6", "Yii 1", "MySQL 5.7"],
      frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "Vue.js",
        "Bootstrap 3",
      ],
      tools: ["Git", "Bitbucket"],
    },
    hasContent: true,
  },
  {
    id: "enertek",
    name: "Enertek",
    position: "Full Stack Developer",
    thumbnail: {
      src: "/img/projects/enertek/device.png",
      width: 1242,
      height: 1215,
    },
    logo: {
      src: "/img/projects/enertek/logo.svg",
      width: 150,
      height: 150,
      className: "bg-gray-800 rounded-full",
    },
    detailsImage: {
      src: "/img/projects/enertek/device.png",
      width: 1242,
      height: 1215,
    },
    timePeriod: <>2019 &mdash; 2024</>,
    shortLine: "Built-in intelligence at your fingertips",
    title: "Power you can count on.",
    description:
      "Software allowed you to control energy usage and solar production from anywhere around the world. Become more energy independent and make important lifestyle or financial decisions in real-time, anytime.",
    // website: "",
    internetArchiveUrl:
      "https://web.archive.org/web/20230609151311/https://energizerhomepower.com/",
  },
  {
    id: "warrp-it",
    name: "Warrp.it",
    position: "Full Stack Developer",
    thumbnail: {
      src: "/img/projects/warrp/screenshot.png",
      width: 1000,
      height: 500,
    },
    logo: {
      src: "/img/projects/warrp/logo-circle.png",
      width: 150,
      height: 150,
    },
    detailsImage: {
      src: "/img/projects/warrp/screenshot.png",
      width: 1000,
      height: 500,
    },
    timePeriod: <>2020 &mdash; 2021</>,
    shortLine: "A symbol of a better tomorrow",
    title: "Just Warrp.it",
    description:
      "iOS marketplace app based on an end-to-end design to make it S.A.F.E. for everyone. Buyers and sellers can Securely transact while the rest of the community plays an Active role in ensuring prices are Fair...",
    website: "https://warrp.it/",
    internetArchiveUrl:
      "https://web.archive.org/web/20210716062155/https://warrp.it/",
  },
  {
    id: "racer-club",
    name: "Racer Club",
    position: "Web3 Developer",
    thumbnail: {
      src: "/img/projects/racer-club/thumbnail.png",
      width: 1594,
      height: 897,
    },
    logo: {
      src: "/img/projects/racer-club/logo.png",
      width: 500,
      height: 500,
    },
    detailsImage: {
      src: "/img/projects/racer-club/thumbnail.png",
      width: 1594,
      height: 897,
    },
    timePeriod: "2023",
    shortLine: "Create your own characters",
    title: "Web3 Community Racing",
    description:
      "Ethereum based GameFi platform leading the Web3 movement to Esports.",
    website: "https://racerclub.game/",
    internetArchiveUrl:
      "https://web.archive.org/web/20230410175530/https://racerclub.game/",
  },
  {
    id: "hyperian",
    name: "Hyperian",
    position: "Senior Full Stack Developer",
    thumbnail: {
      src: "/img/projects/hyperian/thumbnail.png",
      width: 2502,
      height: 2200,
    },
    logo: {
      src: "/img/projects/hyperian/logo-dark.svg",
      width: 64,
      height: 64,
    },
    detailsImage: {
      src: "/img/projects/hyperian/thumbnail.png",
      width: 2502,
      height: 2200,
    },
    timePeriod: <>2023 &mdash; 2024</>,
    shortLine: "Powering Homes with Endless Clean Energy",
    title: "Decentralized and autonomous energy grid",
    description:
      "Secure and powerful cloud-based operational software suite, enabling partners to monitor, control and manage the overall fleet, effectively onboard installers, and support the end-users providing a seamless experience across the Hyperian product range.",
    website: "https://hyperian.com/",
    internetArchiveUrl:
      "https://web.archive.org/web/20241006135509/https://hyperian.com/",
  },
  {
    id: "german-client",
    name: "German B2B client",
    position: "Senior Full Stack Developer",
    thumbnail: {
      src: "/img/projects/german-client/landscape.jpg",
      width: 6016,
      height: 4000,
    },
    logo: {
      src: "/img/projects/german-client/windmill.jpeg",
      width: 594,
      height: 594,
    },
    detailsImage: {
      src: "/img/projects/german-client/landscape.jpg",
      width: 6016,
      height: 4000,
    },
    timePeriod: <>2025 &mdash; 2026</>,
    shortLine: "Powering progress through clean connection",
    title: "B2B platform that connects leading power producers with consumers",
    description:
      "Intelligent B2B platform that connects Europe’s leading renewable power producers with enterprises committed to reducing their carbon footprint.",
    // website: "",
    // internetArchiveUrl: "",
  },
];
