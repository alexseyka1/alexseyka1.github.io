import { AboutMe } from "@components/main/AboutMe";
import Projects from "@components/main/Projects";
import {
  DESCRIPTION,
  GITHUB_URL,
  JOB_TITLE,
  NAME,
  SOCIAL_LINKS,
  SOCIAL_NETWORK_TITLE,
} from "@config/contact";
import { SKILLS } from "@config/skills";
import Head from "next/head";
import { MyPhoto } from "../components/main/MyPhoto";
import Skills from "../components/main/Skills";

export default function Home() {
  const title = `${NAME} - ${JOB_TITLE}`;
  const description =
    "I make amazing complex systems that solve business problems and help it grow, as well as easy to use";
  const ogTitle = `${NAME} - ${SOCIAL_NETWORK_TITLE}`;
  const ogImage = `${GITHUB_URL}/img/square-photo.jpeg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: NAME,
      jobTitle: SOCIAL_NETWORK_TITLE,
      description: DESCRIPTION,
      url: GITHUB_URL,
      image: ogImage,
      sameAs: SOCIAL_LINKS.map((item) => item.href),
      knowsAbout: [
        "Web Development",
        "Backend",
        "Frontend",
        "Mobile",
        "Architecture",
        ...Object.values(SKILLS).flat(),
      ],
    },
  };

  return (
    <>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={GITHUB_URL} />
      </Head>

      <MyPhoto />
      <AboutMe />
      <Skills title="Skills & Tools" skills={SKILLS} />
      <Projects />
    </>
  );
}
