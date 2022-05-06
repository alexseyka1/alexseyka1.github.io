import Link from "next/link"

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="mt-4 display-5">The most interesting projects</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 mt-2">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg project-card"
              style={{ backgroundImage: "url('/img/projects/dok-bg.jpeg')" }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold project-card__title">dok.ua</h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto glass-bg p-1">
                    <img src="/img/projects/dok-logo-large.svg" alt="dok.ua" height="40" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <small>
                      <time>2015</time>
                    </small>
                  </li>
                </ul>
              </div>
              <Link href="/projects/dok">
                <a className="stretched-link" title="View project details"></a>
              </Link>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg project-card"
              style={{ backgroundImage: "url('/img/projects/ssg-bg.jpeg')" }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold project-card__title">Solar Service Group</h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src="/img/projects/ssg-logo.jpeg" alt="Solar Service Group" height="40" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <small>
                      <time>2017</time>
                    </small>
                  </li>
                </ul>
              </div>
              <Link href="/projects/solar-service-group">
                <a className="stretched-link" title="View project details"></a>
              </Link>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg project-card"
              style={{ backgroundImage: "url('/img/projects/rushhq-bg.jpeg')" }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold project-card__title">Rush HQ</h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src="/img/projects/rushhq-logo.png" alt="Rush HQ" height="40" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <small>
                      <time>2018</time>
                    </small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg project-card"
              style={{ backgroundImage: "url('/img/projects/enertek-bg.jpeg')" }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold project-card__title">Enertek</h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto bg-black rounded-circle enertek-logo">
                    <img src="/img/projects/enertek-logo.svg" alt="Enertek" height="40" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <small>
                      <time>2018</time>
                    </small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg project-card"
              style={{ backgroundImage: "url('/img/projects/warrp-bg.jpeg')" }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold project-card__title">Warrp.it</h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src="/img/projects/warrp-logo-circle.png" alt="Warrp.it" height="40" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <small>
                      <time>2020</time>
                    </small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg project-card"
              style={{ backgroundImage: "url('/img/projects/crm.jpg')" }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold project-card__title">Other CRM Systems</h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">...</li>
                  <li className="d-flex align-items-center me-3">
                    <small>
                      <time>2016 &mdash; present</time>
                    </small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
