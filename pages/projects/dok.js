import Head from "next/head"

export default function Dok() {
  return (
    <>
      <Head>
        <title>Alexsey Gaidai - Project dok.ua</title>
        <meta name="description" content="My first commercial project. Online auto parts store dok.ua." />
      </Head>

      <section>
        <div className="container">
          <div className="row flex-md-row-reverse justify-content-center align-items-center g-5">
            <div
              className="col-md-6 col-lg-6 rounded-start introducing-photo-column"
              style={{ backgroundImage: "url(/img/projects/dok/website.png)", backgroundPositionX: 0 }}
            ></div>
            <div className="col-md-6 col-lg-6">
              My first commercial project
              <h1 className="display-5 fw-bold lh-1 mb-0">Online auto parts store Dok.ua</h1>
              <p className="fs-5 text-muted mb-3">as Junior PHP developer</p>
              <p className="lead py-2">
                Mainly backend work, internal CRM system. Managing goods and suppliers, filling in the characteristics
                of goods and much more.
              </p>
              <div className="d-grid d-lg-flex justify-content-stretch">
                <a
                  href="https://dok.ua/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-lg px-4 me-lg-2"
                >
                  View website
                </a>
                <a
                  href="http://web.archive.org/web/20170331140647/http://dok.dbroker.com.ua/"
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

          <a href="/img/projects/dok/parsing.jpg" target="_blank" title="Parsing process">
            <img src="/img/projects/dok/parsing.jpg" className="float-end ms-3 shadow timeline-image" />
          </a>
          <p>
            The first thing I had to deal with here was the parsers. The team and I needed to process a large amount of
            data - information about engine oils. It was descriptions of oils, characteristics and photos from
            manufacturers that needed to be systematized, which I did very well. It was solved using pure PHP and
            Javascript{" "}
            <a href="https://phantomjs.org" title="PhantomJS website" target="_blank" rel="noreferrer">
              PhantomJS
            </a>{" "}
            library. I want to say thanks to my mentor Yuri Smiyan, who then instilled in me an interest in Javascript
            by showing me some &quot;magic&quot;.
          </p>
          <p>
            I have already dealt with the{" "}
            <a href="https://www.codeigniter.com" title="CodeIgniter" target="_blank" rel="noreferrer">
              CodeIgniter
            </a>{" "}
            PHP framework, but in dok.ua I first encountered another framework -{" "}
            <a
              href="https://www.yiiframework.com/doc/guide/1.1/en"
              title="Yii framework website"
              target="_blank"
              rel="noreferrer"
            >
              Yii
            </a>
            . In any case, I had very little experience with such tools. Both frameworks have a lot in common, they both
            use the MVC data splitting pattern, which I find pretty handy and easy to understand. The project was
            running on{" "}
            <a href="http://doc.php.net/archives/php5" title="PHP 5.6 archive manual" target="_blank" rel="noreferrer">
              PHP 5.6
            </a>
            , which was up-to-date at the time. The entire front-end was built on the{" "}
            <a href="https://jquery.com" title="jQuery website" target="_blank" rel="noreferrer">
              jQuery
            </a>{" "}
            library due to its popularity and large number of plugins.
          </p>
          <p>
            Due to my little experience, almost all my tasks were related to the admin panel, where there was nothing
            urgent, and speed and convenience of work were not critical. I remember how I set up a schedule for the
            delivery of goods by suppliers and was proud of myself. I also worked on the order view page and added new
            functionality there. That`s when I learned the &quot;state&quot; design pattern. I also had tasks related to
            setting up products and access rights for admin users.
          </p>
          <p>
            Later, when I gained some experience, I began to receive more complex and responsible tasks. I began to deal
            directly with the site of the online store, which was used by customers, not only the backend, but also the
            frontend. I added functionality to the product view page, improved the shopping cart, and also updated the
            buyer profile page. I connected third-party services, for example, a new version of the &quot;Nova
            Poshta&quot; mail service API.
          </p>
          <p>
            All site data was stored in a MySQL database, so I had to learn it too. Thanks to my team leader Nikolai
            Polimushket for helping me fall in love with SQL. He showed me how complex queries can be and how fast they
            can run if everything is set up correctly. After that, it was easier for me to learn PostgreSQL.
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
            This company employs a lot of sales managers, and when a buyer places an order on the site, one of the
            managers accepts it, for which he then receives a bonus to his salary. Later there was a problem, sales
            managers began to take a lot of orders and leave them &quot;for later&quot; in order to get a big increase
            in salary. They even started using special clicker programs for this.
          </p>
          <p>
            I designed a fairly good solution and implemented it. I wrote a daemon that recorded the acceptance of
            orders by managers in a table in the database and put this manager in idle for a certain time. The script
            also sorted the managers in such a way that the new order was shown to the one who was out of work the
            longest. If this manager did not accept the order after a certain time, then this order will see the next
            one in order.
          </p>
          <p>
            Now if the manager has accepted one order, he will not see new orders for some time. Thus, orders were more
            evenly distributed among managers. I consider this decision to be my biggest achievement on this project. Of
            course, after a while I understand that I could solve this problem in a completely different way, more
            correctly, using the queue system for this.
          </p>

          <a href="/img/projects/dok/content.png" target="_blank" title="Web application with content tools">
            <img src="/img/projects/dok/content.png" className="float-start me-3 shadow timeline-image" />
          </a>

          <span className="fa-stack fa-1x float-start text-primary opacity-50 m-2">
            <i className="fa-solid fa-circle fa-stack-2x"></i>
            <i className="fa-solid fa-2 fa-stack-1x fa-inverse"></i>
          </span>

          <p>
            For a long time I worked with the content department and developed tools for them. These were sections in
            the admin panel for uploading product photos, editing product descriptions and adding characteristics
            (product sizes, colors, manufacturer, etc.). There were quite a few of these tools. And at that time I was
            just studying the Angular 2 javascript framework and in order to consolidate what I learned, I decided to
            write a separate web application for the content department.
          </p>
          <p>
            Using this framework and the Materialize library, I developed a fairly handy tool that not only simplified
            the work of employees, but also allowed them to monitor the progress of their work using a dashboard. The
            application worked with data through a simple REST API written as part of a common CRM system. After a
            while, I concluded that Angular is too cumbersome for small applications and Vue would be more suitable.
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
                <i className="fa-4x devicon-angularjs-plain"></i>
              </div>
              <div className="fw-bold mt-3">Angular 2</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
