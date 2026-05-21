export type ContentBlock =
  | {
      type: "paragraph" | "header" | "time-period";
      content: React.ReactNode;
    }
  | {
      type: "container";
      children: ContentBlock[];
    };

export type Project = {
  name: string;
  shortLine: string;
  title: string;
  description: string;
  position: string;
  content: ContentBlock[];
  website?: string;
  internetArchiveUrl?: string;
};
