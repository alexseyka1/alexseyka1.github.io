import React from "react";

type Photo = {
  src: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  name: string;
  thumbnail: Photo;
  logo: Photo;
  timePeriod: React.ReactNode;
  shortLine: string;
  title: string;
  description: string;
  position: string;
  website?: string;
  internetArchiveUrl?: string;
  content: React.ReactNode;
};

export const PROJECTS: Project[] = [
  {
    id: "dok",
    name: "Dok.ua",
    position: "Junior PHP developer",
    thumbnail: {
      src: "/img/projects/dok-bg.jpeg",
      width: 1665,
      height: 694,
    },
    logo: {
      src: "/img/projects/dok-logo-large.svg",
      width: 120,
      height: 40,
    },
    timePeriod: <>2015 &mdash; 2017</>,
    shortLine: "My first commercial project",
    title: "Online auto parts store Dok.ua",
    description:
      "Mainly backend work, internal CRM system. Managing goods and suppliers, filling in the characteristics of goods and much more.",
    website: "https://dok.ua/",
    internetArchiveUrl:
      "http://web.archive.org/web/20170331140647/http://dok.dbroker.com.ua/",
    content: null,
  },
  {
    id: "solar-service-group",
    name: "Solar Service Group",
    position: "Full Stack Developer",
    thumbnail: {
      src: "/img/projects/ssg-bg.jpeg",
      width: 1500,
      height: 430,
    },
    logo: {
      src: "/img/projects/ssg-logo.jpeg",
      width: 250,
      height: 250,
    },
    timePeriod: <>2017 &mdash; 2022</>,
    shortLine: "Solar panels installation and maintenance",
    title: "Solar Service Group",
    description:
      "A large CRM system for a company engaged in the sale, installation and maintenance of solar panels, in which integration with third-party services via API was important.",
    website: "https://solarservicegroup.com.au/",
    internetArchiveUrl:
      "https://web.archive.org/web/20170217064645/http://solarservicegroup.com.au/",
    content: null,
  },
  {
    id: "rush-hq",
    name: "Rush HQ",
    position: "Full Stack Developer",
    thumbnail: {
      src: "/img/projects/rushhq-bg.jpeg",
      width: 1200,
      height: 800,
    },
    logo: {
      src: "/img/projects/rushhq-logo.png",
      width: 345,
      height: 200,
    },
    timePeriod: <>2018 &mdash; 2023</>,
    shortLine: "And it’s not just about trampolines",
    title: "Melbourne’s premier indoor adventure park.",
    description:
      "Development and improvement of the booking system, as well as work on the internal system.",
    website: "https://www.rushhq.com.au/",
    internetArchiveUrl:
      "https://web.archive.org/web/20200305022901/https://reservations.rushhq.com.au/party?pid=&h=",
    content: null,
  },
  {
    id: "enertek",
    name: "Enertek",
    position: "Full Stack Developer",
    thumbnail: {
      src: "/img/projects/enertek-bg.jpeg",
      width: 800,
      height: 800,
    },
    logo: {
      src: "/img/projects/enertek-logo.svg",
      width: 150,
      height: 150,
    },
    timePeriod: <>2019 &mdash; 2024</>,
  },
  {
    id: "warrp-it",
    name: "Warrp.it",
    position: "Full Stack Developer",
    thumbnail: {
      src: "/img/projects/warrp-bg.jpeg",
      width: 1000,
      height: 500,
    },
    logo: {
      src: "/img/projects/warrp-logo-circle.png",
      width: 150,
      height: 150,
    },
    timePeriod: <>2020 &mdash; 2021</>,
  },
  {
    id: "racer-club",
    name: "Racer Club",
    position: "Web3 Developer",
    // thumbnailUrl: "",
    // logoUrl: "",
    timePeriod: "2023",
  },
  {
    id: "hyperian",
    name: "Hyperian",
    position: "Senior Full Stack Developer",
    // thumbnailUrl: "",
    // logoUrl: "",
    timePeriod: <>2023 &mdash; 2024</>,
  },
  {
    id: "german",
    name: "German client",
    position: "Senior Full Stack Developer",
    // thumbnailUrl: "",
    // logoUrl: "",
    timePeriod: <>2025 &mdash; 2026</>,
  },
];
