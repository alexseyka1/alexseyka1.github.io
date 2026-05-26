import { motion } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";

type TimelineItem = {
  title: string;
  timePeriod: React.ReactNode;
  content: React.ReactNode;
};

export const TIMELINE: TimelineItem[] = [
  {
    title: "Getting started",
    timePeriod: <>2007 &mdash; 2010</>,
    content: (
      <>
        <Zoom zoomImg={{ src: "/img/html-frames.jpg" }}>
          <motion.div
            initial={{ x: 20, scale: 0.98 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ delay: 0.2, ease: "circOut" }}
            viewport={{ once: true }}
          >
            <ExportedImage
              src="/img/html-frames.jpg"
              width={977}
              height={506}
              className="float-end ms-8 mb-8! timeline-image rounded overflow-hidden shadow-lg border ring-4 ring-white"
              alt="HTML frames example"
            />
          </motion.div>
        </Zoom>

        <p>
          I first got involved in development back in my school days, when chats
          within the local area networks of the city, like{" "}
          <a
            href="https://uk.wikipedia.org/wiki/Net_Speakerphone"
            target="_blank"
            rel="noreferrer"
            title="Net Speakerphone"
            className="text-primary underline underline-offset-4 hover:no-underline"
          >
            Net Speakerphone
          </a>{" "}
          and{" "}
          <a
            href="https://en.wikipedia.org/wiki/MIRC"
            target="_blank"
            rel="noreferrer"
            title="mIRC"
            className="text-primary underline underline-offset-4 hover:no-underline"
          >
            mIRC
          </a>
          , were popular. I became interested in how sites work and I tried to
          make my own and show it to other people on the network. It was the
          ugliest site in the world, built on three or four frames and used only
          HTML. However, at that moment, I realized that creating websites is
          very exciting.
        </p>
        <p>
          One of the chat participants praised me and told me to keep learning
          website development. He told me what kind of things I could do with
          PHP, gave me the{" "}
          <a
            href="https://museum.php.net/php3/"
            target="_blank"
            rel="noreferrer"
            title="manual for PHP 3"
            className="text-primary underline underline-offset-4 hover:no-underline"
          >
            manual for PHP 3
          </a>{" "}
          and advised me to learn it. That became the thing I have spent all my
          spare time to.
        </p>
      </>
    ),
  },
  {
    title: "University",
    timePeriod: "2012",
    content: (
      <p>
        The first large-scale project, as it seemed to me then, I completed at
        the university in 2012. It was a system of recording scientific
        publications. My teacher announced that a few first semesters we would
        be building this system using C# for educational reasons. But at the
        time I found myself more clever, and not seeing any reasons why I should
        learn something new to solve this challenge, I spent a few nights and
        implemented this project. But it was built on top of PHP, CSS framework
        - Bootstrap, and used MySQL for data storage. Thanks to{" "}
        <a
          href="http://www.denwer.ru/"
          target="_blank"
          rel="noreferrer"
          title="Denwer"
          className="text-primary underline underline-offset-4 hover:no-underline"
        >
          Denwer
        </a>{" "}
        that everything was already out of the box and I didn&apos;t have to
        configure anything myself. Of course, this my implementation was
        rejected.
      </p>
    ),
  },
  {
    title: "First job",
    timePeriod: "2015",
    content: (
      <>
        <Zoom zoomImg={{ src: "/img/dok.jpg" }}>
          <motion.div
            initial={{ x: -20, scale: 0.98 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ delay: 0.2, ease: "circOut" }}
            viewport={{ once: true }}
          >
            <ExportedImage
              src="/img/dok.jpg"
              width={1000}
              height={562}
              className="float-start me-8 mb-8! timeline-image rounded-xl overflow-hidden shadow-lg border ring-4 ring-white"
              alt="Dok.ua the online auto parts store"
              title="My business card"
            />
          </motion.div>
        </Zoom>

        <p>
          I moved to a big city in 2015. I needed to find a job, but at that
          point, all I could do was websites development. That&apos;s how I
          found my first job as a junior developer in the online auto parts
          store{" "}
          <Link href="/projects/dok">
            <span title="dok.ua">dok.ua</span>
          </Link>
          . There, I was dealing with the PHP framework Yii for the first time.
          Thanks to wise mentors, I learned how to build complex queries in
          MySQL, write scrapers and data parsers, work with task trackers and
          work in a team.
        </p>

        <p className="mt-4">
          There, I began to study the ES6 standard and the javascript frameworks
          Angular 2 and Vue. A little later, I was already giving lectures to my
          employees about these technologies.
        </p>
        <br />
      </>
    ),
  },
  {
    title: "Next step",
    timePeriod: "2016",
    content: (
      <p>
        I was contacted and offered to work part-time remotely at the Australian
        company{" "}
        <a
          href="https://aussiedev.com.au/"
          target="_blank"
          rel="noreferrer"
          title="Aussiedev"
          className="text-primary underline underline-offset-4 hover:no-underline"
        >
          Aussiedev
        </a>{" "}
        as a middle full stack developer. This is an outsourcing company that
        mainly develops CRM / ERP systems for companies associated with
        alternative energy. I agreed, passed the interview and started working
        in parallel at two jobs.
      </p>
    ),
  },
  {
    title: "Leemon.com.ua",
    timePeriod: "December 2017",
    content: (
      <>
        <Zoom zoomImg={{ src: "/img/leemon.jpg" }}>
          <motion.div
            initial={{ x: 20, scale: 0.98 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ delay: 0.2, ease: "circOut" }}
            viewport={{ once: true }}
          >
            <ExportedImage
              src="/img/leemon.jpg"
              width={1000}
              height={562}
              className="float-end ms-8 mb-8! timeline-image rounded overflow-hidden shadow-lg border ring-4 ring-white"
              title="Leemon.com.ua store website"
              alt="Leemon.com.ua launch my own online sports equipment store"
            />
          </motion.div>
        </Zoom>
        <p>
          I left the first company because I didn`t see further growth. I tried
          to launch my own online sports equipment store, developed a website,
          an accounting system, and even sold a few products. But,
          unfortunately, it turned out that such goods were not in demand in our
          country. I started working full-time in the outsourcing company.
        </p>
      </>
    ),
  },
  {
    title: "Advertisements",
    timePeriod: "2019",
    content: (
      <p>
        I was offered a major freelance project related to advertising. I needed
        to develop a system that would download the product feed of an online
        store and sync ads, which sounded pretty simple. In fact, it turned out
        to be quite difficult. To begin with, I had to study Google Adwords well
        and all its limitations. There were a lot of products in the store, and
        one advertising campaign could contain a limited number of ad groups,
        and one ad group could contain quite a few ads. Using the Yii 2
        framework, I wrote an automated system that created new campaigns,
        groups, and ads as needed. And also enabled or disabled the desired ads.
        It was not so much interesting as boring and problematic. I realized
        that this is not for me.
      </p>
    ),
  },
  {
    title: "Experience in an international team",
    timePeriod: "2023",
    content: (
      <>
        <Zoom zoomImg={{ src: "/img/altir-profile.png" }}>
          <motion.div
            initial={{ x: -20, scale: 0.98 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ delay: 0.2, ease: "circOut" }}
            viewport={{ once: true }}
          >
            <ExportedImage
              src="/img/altir-profile.png"
              width={900}
              height={400}
              className="float-start me-8 mb-8! timeline-image rounded-xl overflow-hidden shadow-lg border ring-4 ring-white"
              alt="My Altir profile"
            />
          </motion.div>
        </Zoom>

        <p>
          I worked for a long time on a mobile application that interacted with
          a hardware device, a smart inverter that collected information about
          the generation of electricity from solar panels. Modbus protocol and
          working with individual bytes of information was extremely fascinating
          and difficult to understand, especially when Bluetooth LE limited me
          in many ways. Unfortunately, funding for this project has run out.
        </p>

        <p className="mt-4">
          The new investor had his own development team and preferred that they
          continue developing the application. The problem was that they knew
          nothing about the hardware the application was designed for, the
          existing application, or the technologies it used. That&apos;s why I
          was hired as a consultant for this team (a consultant who also writes
          code).
        </p>

        <p className="mt-4">
          During working in an international company, I gained a wealth of
          experience in communication, mentoring other developers, and also
          looked at React Native from a different perspective.
        </p>
      </>
    ),
  },
  {
    title: "Germany client",
    timePeriod: <>2025 &mdash; present</>,
    content: (
      <>
        <Zoom zoomImg={{ src: "/img/german-client.png" }}>
          <motion.div
            initial={{ x: 20, scale: 0.98 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ delay: 0.2, ease: "circOut" }}
            viewport={{ once: true }}
          >
            <ExportedImage
              src="/img/german-client.png"
              width={550}
              height={852}
              className="md:float-end ms-8 mb-8! max-w-[200px] rounded-xl overflow-hidden shadow-lg border ring-4 ring-white"
              alt="My profile"
            />
          </motion.div>
        </Zoom>

        <p>
          I spent a long time looking for a job and going through interviews,
          and finally found what I was looking for. I remember being incredibly
          nervous before the final round of interviews, and I had no idea I'd
          meet a team of dedicated professionals and receive an offer that very
          evening.
        </p>

        <p className="mt-4">
          Neither stress nor the language barrier prevented me from feeling a
          powerful wave of friendly and carefree vibes that carried me forward
          and upward throughout our collaboration.
        </p>
        <p className="mt-4">
          I really liked that there was no hierarchy of management within the
          team and everyone communicated freely and at the same level. It turned
          out that German sounds quite interesting. I even studied German on
          Duolingo for a while; my partner didn't realize it was too difficult a
          language to learn from scratch.
        </p>
        <p className="mt-4">
          But time moves on, and new ambitious goals arise in business,
          interrupting our interactions, while simultaneously giving me the
          freedom to move forward. I am now open to new career opportunities and
          am actively seeking an exciting product that will bring all my
          experience to the next level of my professionalism.
        </p>
      </>
    ),
  },
];
