import { GitGraphIcon, LinkIcon, MailIcon, PlaneIcon } from "lucide-react";

export const NAME = "Oleksii Haidai";
export const JOB_TITLE = "Software Engineer";
export const SOCIAL_NETWORK_TITLE =
  "Senior Full Stack Engineer ➊ Node.js ➋ TypeScript ➌ Next.js ➍ Nest.js ➎ PostgreSQL";
export const JOB_START_YEAR = 2015;
export const EMAIL = "alexseyka1@gmail.com";
export const GITHUB_URL = "https://alexseyka1.github.io";
export const DESCRIPTION =
  "Using my experience and development skills, I make amazing complex systems that solve business problems and help it grow, as well as easy to use.";

type SocialItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const SOCIAL_LINKS: SocialItem[] = [
  {
    label: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: <MailIcon />,
  },
  {
    label: "Telegram",
    href: "https://t.me/alexseyka1",
    icon: <PlaneIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alexseyka1",
    icon: <LinkIcon />,
  },
  {
    label: "GitHub",
    href: "https://github.com/alexseyka1",
    icon: <GitGraphIcon />,
  },
];
