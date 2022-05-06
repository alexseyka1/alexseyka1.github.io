export default function MyPhoto() {
  return (
    <section className="pt-1">
      <div className="container">
        <div className="row flex-md-row-reverse justify-content-center align-items-center g-5">
          <div className="col-md-6 col-lg-6 shadow-lg rounded introducing-photo-column"></div>
          <div className="col-md-6 col-lg-6">
            G`day, I`m
            <h1 className="display-5 fw-bold lh-1 mb-0">Alexsey Gaidai</h1>
            <p className="fs-5 text-muted mb-3">&mdash; Software Engineer</p>
            <p className="lead py-2">
              Using my experience and development skills, I make amazing complex systems that solve business problems
              and help it grow, as well as easy to use.
            </p>
            <div className="d-grid d-lg-flex justify-content-stretch">
              <a href="resume.pdf" className="btn btn-primary btn-lg px-4 me-lg-2" download>
                Download resume
              </a>
              <a href="https://github.com/alexseyka1" className="btn btn-lg btn-outline-secondary px-4 mt-2 mt-lg-0">
                <i className="fa-brands fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
