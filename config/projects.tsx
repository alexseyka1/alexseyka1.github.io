type ContentBlock = {
  type: "";
};

type Project = {
  name: string;
  shortLine: string;
  title: string;
  description: string;
  position: string;
  content: ContentBlock[];
  website?: string;
  internetArchiveUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Dok.ua",
    shortLine: "My first commercial project",
    title: "Online auto parts store Dok.ua",
    description:
      "Mainly backend work, internal CRM system. Managing goods and suppliers, filling in the characteristics of goods and much more.",
    position: "Junior PHP developer",
    website: "https://dok.ua/",
    internetArchiveUrl:
      "http://web.archive.org/web/20170331140647/http://dok.dbroker.com.ua/",
    content: [],
  },
];
