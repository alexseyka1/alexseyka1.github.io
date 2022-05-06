import Link from "next/link"

export default function Timeline() {
  return (
    <section id="timeline">
      <div className="container">
        <h2 className="mt-4 display-5">Timeline</h2>

        <ul className="timeline">
          <li>
            <h4 className="m-0 lh-1 mb-1">Getting started</h4>
            <div className="mb-3 text-muted">
              <time>2007 &mdash; 2010</time>
            </div>
            <a href="/img/html-frames.jpg" target="_blank" title="HTML frames example">
              <img src="/img/html-frames.jpg" className="float-end ms-3 shadow timeline-image" />
            </a>
            <p>
              I first got involved in development back in my school days, when chats within the local area networks of
              the city, like{" "}
              <a
                href="https://uk.wikipedia.org/wiki/Net_Speakerphone"
                target="_blank"
                rel="noreferrer"
                title="Net Speakerphone"
              >
                Net Speakerphone
              </a>{" "}
              and{" "}
              <a href="https://en.wikipedia.org/wiki/MIRC" target="_blank" rel="noreferrer" title="mIRC">
                mIRC
              </a>
              , were popular. I became interested in how sites work and I tried to make my own and show it to other
              people on the network. It was the ugliest site in the world, built on three or four frames and used only
              HTML. However, at that moment, I realized that creating websites is very exciting.
            </p>
            <p>
              One of the chat participants praised me and told me to keep learning website development. He told me what
              I can do with PHP, gave me the{" "}
              <a href="https://museum.php.net/php3/" target="_blank" rel="noreferrer" title="manual for PHP 3">
                manual for PHP 3
              </a>{" "}
              and advised me to learn it. What I have devoted all my free time to.
            </p>
          </li>

          <li>
            <h4 className="m-0 lh-1 mb-1">University</h4>
            <div className="mb-3 text-muted">
              <time>2012</time>
            </div>
            <p>
              The first large-scale project, as it seemed to me then, I completed at the university in 2012. It was a
              system of recording scientific publications. In it, I already used the CSS framework - Bootstrap, and used
              MySQL for data storage. Thanks to{" "}
              <a href="http://www.denwer.ru/" target="_blank" rel="noreferrer" title="Denwer">
                Denwer
              </a>{" "}
              that everything was already out of the box and I didn’t have to configure anything myself.
            </p>
          </li>

          <li>
            <h4 className="m-0 lh-1 mb-1">First job</h4>
            <div className="mb-3 text-muted">
              <time>2015</time>
            </div>
            <a href="/img/dok.jpg" target="_blank" title="My business card">
              <img src="/img/dok.jpg" className="float-start me-3 shadow timeline-image" />
            </a>
            <p>
              Having moved to a big city in 2015, I needed to find a job, but all I could do was develop quite a bit.
              That`s how I found my first job as a junior developer in the online auto parts store{" "}
              <Link href="/projects/dok">
                <a title="dok.ua">dok.ua</a>
              </Link>
              . There I first got acquainted with the PHP framework Yii. Thanks to wise mentors, I learned how to build
              complex queries in MySQL, write parsers, work with task trackers and work in a team.
            </p>
            <p>
              There, I began to study the ES6 standard and the javascript frameworks Angular 2 and Vue. A little later,
              I was already giving lectures to my employees about these technologies.
            </p>
          </li>

          <li>
            <h4 className="m-0 lh-1 mb-1">Next step</h4>
            <div className="mb-3 text-muted">
              <time>2016</time>
            </div>
            <p>
              I was contacted and offered to work part-time remotely at the Australian company{" "}
              <a href="https://aussiedev.com.au/" target="_blank" rel="noreferrer" title="Aussiedev">
                Aussiedev
              </a>{" "}
              as a middle full stack developer. This is an outsourcing company that mainly develops CRM / ERP systems
              for companies associated with alternative energy. I agreed, passed the interview and started working in
              parallel at two jobs.
            </p>
          </li>

          <li>
            <h4 className="m-0 lh-1 mb-1">Leemon.com.ua</h4>
            <div className="mb-3 text-muted">
              <time>December 2017</time>
            </div>
            <a href="/img/leemon.jpg" target="_blank" title="Leemon.com.ua store website">
              <img src="/img/leemon.jpg" className="float-end ms-3 shadow timeline-image" />
            </a>
            <p>
              I left the first company because I didn`t see further growth. I tried to launch my own online sports
              equipment store, developed a website, an accounting system, and even sold a few products. But
              unfortunately it turned out that such goods are not in demand in our country. I started working full-time
              in an outsourcing company.
            </p>
          </li>

          <li>
            <h4 className="m-0 lh-1 mb-1">Advertisements</h4>
            <div className="mb-3 text-muted">
              <time>2019</time>
            </div>
            <p>
              I was offered a major freelance project related to advertising. I needed to develop a system that would
              download the product feed of an online store and sync ads, which sounded pretty simple. In fact, it turned
              out to be quite difficult. To begin with, I had to study Google Adwords well and all its limitations.
              There were a lot of products in the store, and one advertising campaign could contain a limited number of
              ad groups, and one ad group could contain quite a few ads. Using the Yii 2 framework, I wrote an automated
              system that created new campaigns, groups, and ads as needed. And also enabled or disabled the desired
              ads. It was not so much interesting as boring and problematic. I realized that this is not for me.
            </p>
          </li>

          <li>
            <h4 className="m-0 lh-1 mb-1">Current work</h4>
            <div className="mb-3 text-muted">
              <time>2019 &mdash; present</time>
            </div>
            <p>
              I still work for the same outsourcing company on many projects at the same time. From time to time,
              projects are closed or frozen, but new ones appear. I will tell you more about all the projects elsewhere.
              Lately I`ve been learning javascript in depth and developing my component rendering library. I`m thinking
              about changing jobs, because there hasn`t been any growth for a long time.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
