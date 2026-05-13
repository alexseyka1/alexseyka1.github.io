import Link from "next/link"

export default function Topbar() {
  return (
    <header className="topbar">
      <nav className="navbar navbar-expand-lg border-bottom">
        <div className="container-fluid justify-content-end">
          <label htmlFor="topbar-dropdown-enabled">
            <span
              className="navbar-toggler collapsed text-reset"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-top"
            >
              <i className="fa-solid fa-bars-staggered"></i>
            </span>
          </label>
          <input type="checkbox" id="topbar-dropdown-enabled" />

          <div className="navbar-collapse justify-content-md-center collapse" id="navbar-top">
            <ul className="navbar-nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link href="/#">
                  <a className="nav-link px-2 link-secondary">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <a className="nav-link px-2 link-dark">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/#timeline">
                  <a className="nav-link px-2 link-dark">Timeline</a>
                </Link>
              </li>
              <li>
                <Link href="/#projects">
                  <a className="nav-link px-2 link-dark">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/#skills-and-tools">
                  <a className="nav-link px-2 link-dark">Skills & tools</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
