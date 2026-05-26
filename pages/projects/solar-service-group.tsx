import { ChallengeAndSolution } from "@components/ChallengeAndSolution";
import { ProjectLayout } from "@components/layouts/ProjectLayout";
import Skills from "@components/main/Skills";
import { TextSection } from "@components/TextSection";
import { NAME } from "@config/contact";
import { PROJECTS } from "@config/projects";
import Head from "next/head";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";

const project = PROJECTS.find(({ id }) => id === "solar-service-group");

export default function SolarServiceGroup() {
  if (!project) return;

  return (
    <>
      <Head>
        <title>{`${NAME} - Project ${project.name}`}</title>
        <meta name="description" content={project.description} />
      </Head>

      <ProjectLayout project={project}>
        <TextSection title="How it was?" className="border-none border-y">
          <div>
            <Zoom zoomImg={{ src: "/img/projects/ssg/admin-panel.png" }}>
              <Image
                src="/img/projects/ssg/admin-panel.png"
                width={1000}
                height={625}
                className="float-end ms-8 mb-8! timeline-image rounded-xl overflow-hidden shadow-lg border ring-4 ring-white"
                alt="Solar Service Group admin panel"
              />
            </Zoom>

            <p>
              I got involved with this project back in 2017 and it has become
              the longest-running project in my remote job at Aussiedev. By the
              way, this was far from the beginning of this project, it had
              existed for several years. This is an Australian company
              specializing in the installation and repair of solar panels,
              batteries and everything related to them. Their website only has
              general information about the company, articles and a feedback
              form, so all my work was on the internal CRM system. Technologies
              already known to me were used here: PHP 5.6, MySQL, jQuery (it
              used to be everywhere) and the first version of the Yii framework.
            </p>

            <p className="mt-4">
              The admin panel that I saw here was significantly different from
              the one I saw in dok.ua. All functions were more intelligently
              located, and instead of pure SQL, which was widely used at my last
              job, ActiveRecord was used here. I liked it and learned it
              quickly. I&apos;ve found that it&apos;s quite handy if I use it
              correctly in conjunction with data providers, iterators and eager
              loading, otherwise everything will run slowly and eat up a lot of
              memory. I also saw for the first time on this project how to build
              separate applications on the same code base (api, backend,
              frontend, console).
            </p>

            <p className="mt-4">
              At the beginning of my work, from third-party services, only
              services for sending emails and SMS were used here. But over time,
              I had to connect more and more new third-party services that the
              business needed. For example:
            </p>

            <ul className="mt-4 list-disc ps-4">
              <li>
                A service that collects leads from numerous landing pages of the
                company.
              </li>
              <li>
                Service FormBay, where potential customers filled out
                application forms for the installation of solar systems.
              </li>
              <li>
                Payment service Secure Pay, to pay for orders with a credit
                card.
              </li>
            </ul>

            <p className="mt-4">
              There were many such services and they all provided different
              types of APIs, these are REST and SOAP. I learned how to write
              adapters for such services so that my colleagues and I can quickly
              and easily connect new ones when needed.
            </p>

            <p className="mt-4">
              This company employs quite a lot of employees, and each of them
              should have their own rights in the CRM system - what they can do
              and what they cannot. Also, over time, subsidiaries appeared,
              which should not have been able to see each other&apos;s orders.
              To do this, I made isolation of companies inside the system, as
              well as an extended system of roles and access rights. I also
              developed an API to synchronize data between our system and the
              systems of subsidiaries. Thanks to this, I have a better
              understanding of these issues.
            </p>
          </div>
        </TextSection>

        <TextSection title="Achievements" className="bg-white border-y">
          <p>
            After the company decided to send out emails and I developed a
            separate system module for this, it became necessary to collect
            incoming mail. People who were interested in installing solar
            systems began to respond to letters sent to them and their answers
            came to corporate mail. The email service we used provided an API to
            work with it, but it was quite expensive for the company. Therefore,
            I was assigned to write my own solution for working with mail via
            the IMAP protocol.
          </p>

          <p className="mt-4">Daemon I designed:</p>
          <ul className="list-disc ps-4">
            <li>Connected to the mail server</li>
            <li>
              Read email and all information about it (sender&apos;s address,
              subject, CC, dates, etc.)
            </li>
            <li>Downloaded all attached files</li>
            <li>
              Created a new entity for it in the system and saved it to the
              database
            </li>
            <li>Moved the email to a specific folder on the mail server</li>
          </ul>

          <p className="mt-4">
            After that, the letter was available in CRM on the order view page
            (or on the lead page if this person had not ordered anything yet),
            which made it possible to communicate with the client via email
            right there. All this worked quite slowly due to the specifics of
            the protocol, but it greatly simplified the work of the
            company&apos;s employees, and also saved a lot of money for the
            business.
          </p>

          <Zoom zoomImg={{ src: "/img/projects/ssg/installer-app.png" }}>
            <Image
              src="/img/projects/ssg/installer-app.png"
              width={1750}
              height={2504}
              className="float-end ms-8 mb-8! timeline-image rounded-2xl overflow-hidden shadow-lg border ring-4 ring-white"
              alt="Solar Service Group installer application"
            />
          </Zoom>

          <p className="mt-4">
            Some of the company&apos;s most important employees were solar
            installers and so-called &quot;field agents&quot; who communicated
            with potential customers, collecting information about their home
            and the equipment they needed. The admin panel on this project was
            quite cumbersome and not designed for mobile devices, and these
            employees needed to upload photos and write the collected
            information into our system. Of course, they were forced to do it
            from their smartphones or tablets.
          </p>

          <p className="mt-4">
            I was given the task of creating a simple mobile-friendly web
            application for installers and field agents. It was interesting to
            me and I completed it quite quickly, paying attention to the
            responsive interface. On the frontend, I used the Vue library that I
            already knew, because it was well suited for such tasks, and the
            application communicated with the CRM system using JSON.
          </p>

          <p className="mt-4">Employees can now use their smartphone</p>
          <ul>
            <li>View their schedule, assigned tasks and location addresses</li>
            <li>Create new leads</li>
            <li>
              Easily upload photos of the house, solar panels and their
              completed work
            </li>
            <li>
              Generate contracts and immediately sign them on the touch screen
              with the client
            </li>
            <li>Make a payment with a credit card</li>
            <li>
              Change the status of a job by marking it as &quot;completed&quot;.
            </li>
          </ul>

          <p className="mt-4">
            It wasn&apos;t the coolest app, and it wasn&apos;t the hardest
            either. But it helped me to delve into the specifics of the work of
            employees and study it better in order to make tools even more
            convenient for them.
          </p>
        </TextSection>

        <div className="bg-white border-b">
          <ChallengeAndSolution
            challenge={
              <p className="text-gray">
                After launching the email campaign system, incoming customer
                replies were delivered to the corporate email. The existing
                email service offered an API for integration, but its high cost
                made it impractical.
              </p>
            }
            solution={
              <p className="text-gray">
                I Developed a custom daemon using the IMAP protocol to connect
                to the mail server, read and process emails, download
                attachments, save them into the system&apos;s database, and
                organize them into appropriate folders. This made emails
                accessible directly within the CRM, enabling smooth
                communication with customers and significantly reducing costs.
              </p>
            }
          />

          <hr className="max-w-xl m-auto border-primary-800/30" />

          <ChallengeAndSolution
            challenge={
              <p className="text-gray">
                Field agents and solar installers needed to input data and
                upload photos while on-site, but the main admin panel was not
                mobile-friendly.
              </p>
            }
            solution={
              <div className="text-gray">
                <p>
                  Created a lightweight, responsive web application optimized
                  for smartphones and tablets using the Vue framework. The app
                  integrated with the CRM via JSON and allowed employees to
                  manage tasks, upload photos, create leads, sign contracts
                  digitally, take payments, and update job statuses - all from
                  their mobile devices.
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
