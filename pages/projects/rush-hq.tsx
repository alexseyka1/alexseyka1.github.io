import { NAME } from "@config/contact";
import Head from "next/head";

export default function SolarServiceGroup() {
  return (
    <>
      <Head>
        <title>{NAME} - Project Rush HQ</title>
        <meta
          name="description"
          content="Melbourne's top indoor adventure and trampoline park"
        />
      </Head>

      <section>
        <div className="container">
          <div className="row flex-md-row-reverse justify-content-center align-items-center g-5">
            <div
              className="col-md-6 col-lg-6 shadow-lg rounded introducing-photo-column"
              style={{
                backgroundImage: "url(/img/projects/rush-hq/website.png)",
                backgroundPositionX: 0,
              }}
            ></div>
            <div className="col-md-6 col-lg-6">
              And it&apos;s not just about trampolines
              <h1 className="display-5 fw-bold lh-1">
                Melbourne’s premier indoor adventure park.
              </h1>
              <p className="fs-5 text-muted mb-3">as Full Stack developer</p>
              <p className="lead py-2">
                Development and improvement of the booking system, as well as
                work on the internal system.
              </p>
              <div className="d-grid d-lg-flex justify-content-stretch">
                <a
                  href="https://www.rushhq.com.au/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-lg px-4 me-lg-2"
                >
                  View website
                </a>
                <a
                  href="https://web.archive.org/web/20200305022901/https://reservations.rushhq.com.au/party?pid=&h="
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-secondary btn-lg px-4 mt-2 mt-lg-0"
                >
                  <i className="fa-solid fa-clock-rotate-left"></i> Internet
                  Archive
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline">
        <div className="container">
          <h2 className="mt-4 display-5">How it was?</h2>

          <p>
            Working on the booking system for Rush HQ turned out to be one of
            those projects where every piece looks simple on its own - until you
            start putting them together. The place itself is huge: several halls
            of different sizes, each with its own capacity, layout, and allowed
            activities. Some halls can be merged into bigger spaces, but not all
            combinations make sense (or are even physically possible). Others
            are reserved only for corporate events, while some are open for
            everything from team-building sessions to kids&apos; birthday
            parties.
          </p>

          <a
            href="/img/projects/rush-hq/trampoline-hall.png"
            target="_blank"
            title="Solar Service Group admin panel"
          >
            <img
              src="/img/projects/rush-hq/trampoline-hall.png"
              className="float-end ms-3 shadow timeline-image"
            />
          </a>

          <p>
            I was responsible for designing and developing the booking logic -
            the part that decides who can book what, when, and how. On top of
            basic scheduling, guests could add extra products and services when
            making a booking: trampoline socks, cakes, meals, and more, with
            quantities that influenced the total price. Add to that a flexible
            discount-coupon system with limits per usage, per person, and even
            per product - and things got complex quickly.
          </p>
          <p>
            One of the biggest challenges was optimizing how groups were
            allocated to halls. The goal was to fill spaces efficiently without
            causing overbooking or leaving awkward gaps that made later
            scheduling nearly impossible. I ended up writing an algorithm that
            tried to “pack” groups into the layout automatically, preferring
            combinations that left the least unused capacity while respecting
            all the hall restrictions and time slots.
          </p>
          <p>
            We also had to make sure cancellations worked smoothly - when
            someone canceled, their slot needed to become available again
            immediately, without breaking ongoing group allocations or
            overlapping schedules.
          </p>
          <p>
            In the end, the system became both flexible and smart enough to
            handle the park&apos;s real-world complexities - from a small group
            of kids jumping around to a big corporate team event spanning half
            the building. It was one of those projects where backend logic
            turned out to be just as adventurous as the attraction itself.
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
          <p className="mb-0">User experience:</p>
          <p>
            The booking interface was redesigned to make date and time selection
            extremely simple and intuitive. Visitors could immediately see
            available slots, capacities, and options without getting lost in
            filters or complex steps. This reduced drop-off rates and made the
            process feel effortless for first-time users.
          </p>

          <a
            href="/img/projects/rush-hq/reservations.png"
            target="_blank"
            title="Reservations page"
          >
            <img
              src="/img/projects/rush-hq/reservations.png"
              className="float-end ms-3 shadow timeline-image"
            />
          </a>

          <span className="fa-stack fa-1x float-start text-primary opacity-50 m-2">
            <i className="fa-solid fa-circle fa-stack-2x"></i>
            <i className="fa-solid fa-2 fa-stack-1x fa-inverse"></i>
          </span>
          <p className="mb-0">Performance improvements:</p>
          <p>
            Booking data was strategically cached to keep response times very
            short, even during peak hours. This made the overall user flow feel
            smoother and significantly reduced server load.
          </p>

          <span className="fa-stack fa-1x float-start text-primary opacity-50 m-2">
            <i className="fa-solid fa-circle fa-stack-2x"></i>
            <i className="fa-solid fa-3 fa-stack-1x fa-inverse"></i>
          </span>
          <p className="mb-0">Business impact:</p>
          <p>
            With fewer booking errors and better hall utilization (higher
            occupancy at any given time), the venue’s overall revenue increased.
            On top of that, upselling additional products and services during
            the booking flow — like socks, cakes, or meals — led to a noticeable
            spike in secondary sales.
          </p>

          <span className="fa-stack fa-1x float-start text-primary opacity-50 m-2">
            <i className="fa-solid fa-circle fa-stack-2x"></i>
            <i className="fa-solid fa-4 fa-stack-1x fa-inverse"></i>
          </span>
          <p className="mb-0">Code structure and reusability:</p>
          <p>
            We reused existing components wherever possible and created new
            generic ones when necessary. This made the system modular and easier
            to maintain, while also reducing development time for future
            features.
          </p>

          <span className="fa-stack fa-1x float-start text-primary opacity-50 m-2">
            <i className="fa-solid fa-circle fa-stack-2x"></i>
            <i className="fa-solid fa-5 fa-stack-1x fa-inverse"></i>
          </span>
          <p className="mb-0">Database optimization:</p>
          <p>
            Large, heavy tables were split into smaller and normalized ones,
            improving clarity and logic of data organization. For high-demand
            columns, proper indexing strategies were applied, which noticeably
            sped up complex queries and improved overall scalability.
          </p>

          <p className="border-top pt-3">
            This project ended up being a full-stack lesson in how real-world
            data and user behavior can be balanced through both engineering and
            UX — and how making booking “simple” for users often means solving
            something very complex underneath.
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
  );
}
