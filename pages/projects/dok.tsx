import { ChallengeAndSolution } from "@components/ChallengeAndSolution";
import { ProjectLayout } from "@components/layouts/ProjectLayout";
import Skills from "@components/main/Skills";
import { TextSection } from "@components/TextSection";
import { NAME } from "@config/contact";
import { PROJECTS } from "@config/projects";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import Zoom from "react-medium-image-zoom";

const project = PROJECTS.find(({ id }) => id === "dok");

export default function Dok() {
  if (!project) return;

  return (
    <>
      <Head>
        <title>{`${NAME} - Project ${project.name}`}</title>
        <meta name="description" content={project.description} />
      </Head>

      <ProjectLayout project={project}>
        <TextSection title="How it was?" className="border-none border-y">
          <div className="text-gray">
            <Zoom zoomImg={{ src: "/img/projects/dok/parsing.jpg" }}>
              <div>
                <ExportedImage
                  src="/img/projects/dok/parsing.jpg"
                  width={1280}
                  height={720}
                  className="float-end ms-8 mb-8! timeline-image rounded-xl overflow-hidden shadow-lg border ring-4 ring-white"
                  alt="Parsing process"
                />
              </div>
            </Zoom>

            <p>
              The first thing I had to deal with here were scrapers. The team
              and I needed to process a large amount of data - information about
              engine oils. There were descriptions of oils, characteristics and
              photos from manufacturers that needed to be systematized, which I
              did very well. This task was solved by using pure PHP and
              Javascript{" "}
              <a
                href="https://phantomjs.org"
                title="PhantomJS website"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline underline-offset-4 hover:no-underline"
              >
                PhantomJS
              </a>{" "}
              library. I want to say thanks to my mentor Yuri Smiyan, who then
              instilled in me an interest in Javascript by showing me some
              &quot;magic&quot;.
            </p>

            <p className="mt-4">
              I had already dealt with the{" "}
              <a
                href="https://www.codeigniter.com"
                title="CodeIgniter"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline underline-offset-4 hover:no-underline"
              >
                CodeIgniter
              </a>{" "}
              PHP framework, but in dok.ua I first encountered another framework{" "}
              which was called{" "}
              <a
                href="https://www.yiiframework.com/doc/guide/1.1/en"
                title="Yii framework website"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline underline-offset-4 hover:no-underline"
              >
                Yii
              </a>
              . In any case, I had very little experience with such tools. Both
              frameworks had a lot in common, they both used the MVC data
              splitting pattern, which I found pretty handy and easy to
              understand. The project was running on{" "}
              <a
                href="http://doc.php.net/archives/php5"
                title="PHP 5.6 archive manual"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline underline-offset-4 hover:no-underline"
              >
                PHP 5.6
              </a>
              , which was up-to-date at the time. The entire front-end was built
              with{" "}
              <a
                href="https://jquery.com"
                title="jQuery website"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline underline-offset-4 hover:no-underline"
              >
                jQuery
              </a>{" "}
              library due to its popularity and large number of plugins.
            </p>

            <p className="mt-4">
              Due to my little experience, almost all my tasks were related to
              the admin panel, where there was nothing urgent, and speed and
              convenience of work were not critical. I remember how I set up a
              schedule for the delivery of goods by suppliers and was proud of
              myself. I also worked on the order details page and added new
              functionality there. That&apos;s when I learned the
              &quot;state&quot; design pattern. I also had tasks related to
              setting up products and access rights (RBAC) for admin users.
            </p>

            <p className="mt-4">
              Later, when I gained some experience, I began to receive more
              complex and responsible tasks. I started dealing directly with the
              site of the online store, which was used by customers, not only
              the backend, but also the frontend. I added functionality to the
              product details page, improved the shopping cart, and also updated
              the buyer profile page. I connected third-party services, for
              example, a new version of the &quot;Nova Poshta&quot; delivery
              service API.
            </p>

            <p className="mt-4">
              All website data was stored in a MySQL database, so I had to learn
              it too. Thanks to my team leader Nikolai Polimushket for helping
              me fall in love with SQL. He showed me how complex queries can be
              and how fast they can run if everything is set up correctly. After
              that, learning PostgreSQL became much easier to me.
            </p>
          </div>
        </TextSection>

        <TextSection title="Achievements" className="bg-white border-y">
          <div className="text-gray">
            <p>
              This company employed a lot of sales managers, and when a buyer
              placed an order on the website, one of the managers accepted it,
              receiving some bonus to their salary. Later there was a problem,
              sales managers were taking a lot of orders and put them off
              &quot;for later&quot; in order to get a big increase in salary.
              They even used special clicking apps to automate this process.
            </p>

            <p className="mt-4">
              I designed a fairly good solution and implemented it. I made a
              daemon that recorded the acceptance of orders by managers in a
              table in the database and put this manager in idle for a certain
              time. The algorithm also sorted managers in such a way that the
              new order was shown to the one who was out of work the longest. If
              this manager did not accept the order after a certain time, then
              this order will see the next one in a line.
            </p>

            <p className="mt-4">
              Then if the manager had accepted one order, he would not see new
              orders for some time. Thus, orders were more evenly distributed
              among managers. I consider this decision to be my biggest
              achievement on this project. Of course, after a while I understand
              that I could solve this problem in a completely different way,
              more correctly, using the queue system for this.
            </p>

            <div className="h-16"></div>

            <Zoom zoomImg={{ src: "/img/projects/dok/content.png" }}>
              <img
                src="/img/projects/dok/content.png"
                className="float-start me-8 mt-8! timeline-image rounded-xl overflow-hidden shadow-lg border ring-4 ring-white"
                title="Web application with content tools"
              />
            </Zoom>

            <p className="mt-4">
              For a long time I worked with the content department and developed
              tools for them. These were sections in the admin panel for
              uploading product photos, editing product descriptions and adding
              characteristics (product sizes, colors, manufacturer, etc.). There
              were quite a few of these tools. And at that time I was just
              studying the Angular 2 javascript framework and in order to
              consolidate what I learned, I decided to write a separate web
              application for the content department.
            </p>

            <p className="mt-4">
              Using this framework and the Materialize library, I developed a
              fairly handy tool that not only simplified the work of employees,
              but also allowed them to monitor the progress of their work using
              a dashboard. The application worked with data through a simple
              REST API written as part of a common CRM system. After a while, I
              concluded that Angular is too cumbersome for small applications
              and Vue would be more suitable.
            </p>
          </div>
        </TextSection>

        <div className="bg-white border-b">
          <ChallengeAndSolution
            challenge={
              <p className="text-gray">
                Sales managers took more orders than they could manage to get
                bonus to their salary and used cheating software. Order weren't
                distributed normally.
              </p>
            }
            solution={
              <p className="text-gray">
                I designed and implemented Round-robin-like algorithm so that a
                new order was shown to the one who was out of work the longest.
                If this manager did not accept the order after a certain time,
                then this order would be shown the next one in a line.
              </p>
            }
          />

          <hr className="max-w-xl m-auto border-primary-800/30" />

          <ChallengeAndSolution
            challenge={
              <p className="text-gray">
                Content department needed numerous admin tools for uploading
                photos, editing descriptions, and adding product details.
                Managing all these features became complex, and as I was
                learning Angular 2 at the time, I decided to tackle the problem
                by building a dedicated web application to streamline their
                work.
              </p>
            }
            solution={
              <div className="text-gray">
                <p>
                  Using Angular and Materialize library, I developed a handy
                  tool that not only simplified the work of employees, but also
                  allowed them to monitor the progress of their work using a
                  dashboard. The application worked with data through a simple
                  REST API written as part of a common CRM system.
                </p>
              </div>
            }
          />
        </div>

        {project.skills != null && (
          <Skills title="Technology Stack" skills={project.skills} />
        )}
      </ProjectLayout>
    </>
  );
}
