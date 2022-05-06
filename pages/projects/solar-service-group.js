import Head from "next/head"

export default function SolarServiceGroup() {
  return (
    <>
      <Head>
        <title>Alexsey Gaidai - Project Solar Service Group</title>
        <meta name="description" content="My first commercial project. Online auto parts store dok.ua." />
      </Head>

      <section>
        <div className="container">
          <div className="row flex-md-row-reverse justify-content-center align-items-center g-5">
            <div
              className="col-md-6 col-lg-6 shadow-lg rounded introducing-photo-column"
              style={{ backgroundImage: "url(/img/projects/ssg/website.png)", backgroundPositionX: 0 }}
            ></div>
            <div className="col-md-6 col-lg-6">
              My first foreign project
              <h1 className="display-5 fw-bold lh-1">Australian solar service provider</h1>
              <p className="fs-5 text-muted mb-3">as Full Stack developer</p>
              <p className="lead py-2">
                Work on the internal system for managing the schedule of installations of solar systems. Long-term
                project.
              </p>
              <div className="d-grid d-lg-flex justify-content-stretch">
                <a
                  href="https://solarservicegroup.com.au/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-lg px-4 me-lg-2"
                >
                  View website
                </a>
                <a
                  href="https://web.archive.org/web/20170217064645/http://solarservicegroup.com.au/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-secondary btn-lg px-4 mt-2 mt-lg-0"
                >
                  <i className="fa-solid fa-clock-rotate-left"></i> Internet Archive
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline">
        <div className="container">
          <h2 className="mt-4 display-5">How it was?</h2>

          <a href="/img/projects/ssg/admin-panel.png" target="_blank" title="Solar Service Group admin panel">
            <img src="/img/projects/ssg/admin-panel.png" className="float-end ms-3 shadow timeline-image" />
          </a>
          <p>
            I got involved with this project back in 2017 and it has become the longest-running project in my remote job
            at Aussiedev. By the way, this was far from the beginning of this project, it had existed for several years.
            This is an Australian company specializing in the installation and repair of solar panels, batteries and
            everything related to them. Their website only has general information about the company, articles and a
            feedback form, so all my work was on the internal CRM system. Technologies already known to me were used
            here: PHP 5.6, MySQL, jQuery (it used to be everywhere) and the first version of the Yii framework.
          </p>
          <p>
            The admin panel that I saw here was significantly different from the one I saw in dok.ua. All functions were
            more intelligently located, and instead of pure SQL, which was widely used at my last job, ActiveRecord was
            used here. I liked it and learned it quickly. I`ve found that it`s quite handy if I use it correctly in
            conjunction with data providers, iterators and eager loading, otherwise everything will run slowly and eat
            up a lot of memory. I also saw for the first time on this project how to build separate applications on the
            same code base (api, backend, frontend, console).
          </p>
          <p>
            At the beginning of my work, from third-party services, only services for sending emails and SMS were used
            here. But over time, I had to connect more and more new third-party services that the business needed. For
            example:
          </p>
          <ul className="my-2">
            <li>A service that collects leads from numerous landing pages of the company.</li>
            <li>
              Service FormBay, where potential customers filled out application forms for the installation of solar
              systems.
            </li>
            <li>Payment service Secure Pay, to pay for orders with a credit card.</li>
          </ul>
          <p>
            There were many such services and they all provided different types of APIs, these are REST and SOAP. I
            learned how to write adapters for such services so that my colleagues and I can quickly and easily connect
            new ones when needed.
          </p>
          <p>
            This company employs quite a lot of employees, and each of them should have their own rights in the CRM
            system - what they can do and what they cannot. Also, over time, subsidiaries appeared, which should not
            have been able to see each other`s orders. To do this, I made isolation of companies inside the system, as
            well as an extended system of roles and access rights. I also developed an API to synchronize data between
            our system and the systems of subsidiaries. Thanks to this, I have a better understanding of these issues.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="mt-4 display-5">Achievements</h2>

          <span className="fa-stack fa-1x float-start text-primary opacity-50 m-2">
            <i className="fa-solid fa-circle fa-stack-2x"></i>
            <i className="fa-solid fa-1 fa-stack-1x fa-inverse"></i>
          </span>

          <p>
            After the company decided to send out emails and I developed a separate system module for this, it became
            necessary to collect incoming mail. People who were interested in installing solar systems began to respond
            to letters sent to them and their answers came to corporate mail. The email service we used provided an API
            to work with it, but it was quite expensive for the company. Therefore, I was assigned to write my own
            solution for working with mail via the IMAP protocol.
          </p>
          <p className="mb-0">Daemon I designed</p>
          <ul className="my-2">
            <li>Connected to the mail server</li>
            <li>Read email and all information about it (sender`s address, subject, CC, dates, etc.)</li>
            <li>Download all attached files</li>
            <li>Created a new entity for it in the system and saved it to the database</li>
            <li>Moved the email to a specific folder on the mail server</li>
          </ul>
          <p>
            After that, the letter was available in CRM on the order view page (or on the lead page if this person had
            not ordered anything yet), which made it possible to communicate with the client via email right there. All
            this worked quite slowly due to the specifics of the protocol, but it greatly simplified the work of the
            company`s employees, and also saved a lot of money for the business.
          </p>

          <a
            href="/img/projects/ssg/installer-app.png"
            target="_blank"
            title="Solar Service Group installer application"
          >
            <img
              src="/img/projects/ssg/installer-app.png"
              className="float-end ms-3 shadow timeline-image"
              style={{ borderRadius: "1rem" }}
            />
          </a>
          <span className="fa-stack fa-1x float-start text-primary opacity-50 m-2">
            <i className="fa-solid fa-circle fa-stack-2x"></i>
            <i className="fa-solid fa-2 fa-stack-1x fa-inverse"></i>
          </span>

          <p>
            Some of the company`s most important employees were solar installers and so-called &quot;field agents&quot;
            who communicated with potential customers, collecting information about their home and the equipment they
            needed. The admin panel on this project was quite cumbersome and not designed for mobile devices, and these
            employees needed to upload photos and write the collected information into our system. Of course, they were
            forced to do it from their smartphones or tablets.
          </p>
          <p>
            I was given the task of creating a simple mobile-friendly web application for installers and field agents.
            It was interesting to me and I completed it quite quickly, paying attention to the responsive interface. On
            the frontend, I used the Vue library that I already knew, because it was well suited for such tasks, and the
            application communicated with the CRM system using JSON.
          </p>
          <p>Employees can now use their smartphone</p>
          <ul>
            <li>View their schedule, assigned tasks and location addresses</li>
            <li>Create new leads</li>
            <li>Easily upload photos of the house, solar panels and their completed work</li>
            <li>Generate contracts and immediately sign them on the touch screen with the client</li>
            <li>Make a payment with a credit card</li>
            <li>Change the status of a job by marking it as &quot;completed&quot;.</li>
          </ul>
          <p>
            It wasn`t the coolest app, and it wasn`t the hardest either. But it helped me to delve into the specifics of
            the work of employees and study it better in order to make tools even more convenient for them.
          </p>
        </div>
      </section>

      <section id="skills-and-tools">
        <div className="container">
          <h2 className="mt-4 display-5">Project tools</h2>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-4 py-5">
            <div className="col d-flex flex-column align-items-center">
              <div className="text-muted flex-shrink-0">
                <i className="fa-4x devicon-php-plain"></i>
              </div>
              <div className="fw-bold mt-3">PHP 5.6</div>
            </div>

            <div className="col d-flex flex-column align-items-center">
              <div className="text-muted flex-shrink-0">
                <i className="fa-4x devicon-yii-plain"></i>
              </div>
              <div className="fw-bold mt-3">Yii 1</div>
            </div>

            <div className="col d-flex flex-column align-items-center">
              <div className="text-muted flex-shrink-0">
                <i className="fa-4x devicon-jquery-plain"></i>
              </div>
              <div className="fw-bold mt-3">jQuery</div>
            </div>

            <div className="col d-flex flex-column align-items-center">
              <div className="text-muted flex-shrink-0">
                <i className="fa-4x devicon-mysql-plain"></i>
              </div>
              <div className="fw-bold mt-3">MySQL 5.7</div>
            </div>

            <div className="col d-flex flex-column align-items-center">
              <div className="text-muted flex-shrink-0">
                <i className="fa-4x devicon-vuejs-plain"></i>
              </div>
              <div className="fw-bold mt-3">Vue</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
