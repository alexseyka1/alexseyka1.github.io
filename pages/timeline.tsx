import {
  DESCRIPTION,
  GITHUB_URL,
  NAME,
  SOCIAL_LINKS,
  SOCIAL_NETWORK_TITLE,
} from "@config/contact";
import { SKILLS } from "@config/skills";
import Head from "next/head";
import Timeline from "../components/main/Timeline";

export default function TimelinePage() {
  const title = `${NAME} - Timeline`;
  const description = `Timeline of the job experience`;
  const ogTitle = `${NAME} - ${SOCIAL_NETWORK_TITLE} - Timeline`;
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
      <Timeline />
    </>
  );
}
