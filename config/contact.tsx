import { GitGraphIcon, LinkIcon, MailIcon, PlaneIcon } from "lucide-react";

export const NAME = "Oleksii Haidai";
export const JOB_TITLE = "Software Engineer";
export const JOB_START_YEAR = 2015;
export const EMAIL = "alexseyka1@gmail.com";

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
