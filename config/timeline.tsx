import Image from "next/image";
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
          <Image
            src="/img/html-frames.jpg"
            width={977}
            height={506}
            className="float-end ms-8 mb-8! timeline-image rounded overflow-hidden shadow-lg border ring-4 ring-white"
            alt="HTML frames example"
          />
        </Zoom>

        <p>
          I first got involved in development back in my school days, when chats
          within the local area networks of the city, like{" "}
          <a
            href="https://uk.wikipedia.org/wiki/Net_Speakerphone"
            target="_blank"
            rel="noreferrer"
            title="Net Speakerphone"
          >
            Net Speakerphone
          </a>{" "}
          and{" "}
          <a
            href="https://en.wikipedia.org/wiki/MIRC"
            target="_blank"
            rel="noreferrer"
            title="mIRC"
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
          website development. He told me what I can do with PHP, gave me the{" "}
          <a
            href="https://museum.php.net/php3/"
            target="_blank"
            rel="noreferrer"
            title="manual for PHP 3"
          >
            manual for PHP 3
          </a>{" "}
          and advised me to learn it. What I have devoted all my free time to.
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
        publications. In it, I already used the CSS framework - Bootstrap, and
        used MySQL for data storage. Thanks to{" "}
        <a
          href="http://www.denwer.ru/"
          target="_blank"
          rel="noreferrer"
          title="Denwer"
        >
          Denwer
        </a>{" "}
        that everything was already out of the box and I didn’t have to
        configure anything myself.
      </p>
    ),
  },
  {
    title: "First job",
    timePeriod: "2015",
    content: (
      <>
        <Zoom zoomImg={{ src: "/img/dok.jpg" }}>
          <Image
            src="/img/dok.jpg"
            width={1000}
            height={562}
            className="float-start me-8 mb-8! timeline-image rounded-xl overflow-hidden shadow-lg border ring-4 ring-white"
            alt="Dok.ua the online auto parts store"
            title="My business card"
          />
        </Zoom>

        <p>
          Having moved to a big city in 2015, I needed to find a job, but all I
          could do was develop quite a bit. That`s how I found my first job as a
          junior developer in the online auto parts store{" "}
          <Link href="/projects/dok">
            <span title="dok.ua">dok.ua</span>
          </Link>
          . There I first got acquainted with the PHP framework Yii. Thanks to
          wise mentors, I learned how to build complex queries in MySQL, write
          parsers, work with task trackers and work in a team.
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
          <Image
            src="/img/leemon.jpg"
            width={1000}
            height={562}
            className="float-end ms-8 mb-8! timeline-image rounded overflow-hidden shadow-lg border ring-4 ring-white"
            title="Leemon.com.ua store website"
            alt="Leemon.com.ua launch my own online sports equipment store"
          />
        </Zoom>
        <p>
          I left the first company because I didn`t see further growth. I tried
          to launch my own online sports equipment store, developed a website,
          an accounting system, and even sold a few products. But unfortunately
          it turned out that such goods are not in demand in our country. I
          started working full-time in an outsourcing company.
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
          <Image
            src="/img/altir-profile.png"
            width={900}
            height={400}
            className="float-start me-8 mb-8! timeline-image rounded-xl overflow-hidden shadow-lg border ring-4 ring-white"
            alt="My Altir profile"
          />
        </Zoom>

        <p>
          I have been working for a long time on a mobile application that
          interacts with a hardware device, a smart inverter that collects
          information about the generation of electricity from solar panels. It
          was extremely interesting and difficult to understand the Modbus
          protocol and work with individual bytes of information. Especially
          when Bluetooth LE limited me in many ways. Unfortunately, funding for
          this project has run out.
        </p>

        <p className="mt-4">
          The new investor had his own development team and preferred that they
          continue developing the application. The problem was that they knew
          nothing about the hardware for which the application was made, nor
          about the existing application, nor about the technologies that were
          used in it. That&apos;s why I was hired as a consultant for this team
          (a consultant who also writes code).
        </p>

        <p className="mt-4">
          During 9 months of working in an international company, I gained a
          wealth of experience in communication, mentoring other developers, and
          also looked at React Native from a different perspective.
        </p>
      </>
    ),
  },
  {
    title: "Current work",
    timePeriod: <>2024 &mdash; present</>,
    content: (
      <p>
        I still work for the same outsourcing company on many projects at the
        same time. From time to time, projects are closed or frozen, but new
        ones appear.
      </p>
    ),
  },
];
