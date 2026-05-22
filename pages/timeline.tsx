import { NAME } from "@config/contact";
import Head from "next/head";
import Timeline from "../components/main/Timeline";

export default function TimelinePage() {
  return (
    <>
      <Head>
        <title>{NAME} - Timeline</title>
        <meta name="description" content="Timeline of my experience" />
      </Head>
      <Timeline />
    </>
  );
}
