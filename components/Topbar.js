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
                  <span className="nav-link px-2 link-secondary">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <span className="nav-link px-2 link-dark">Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/#timeline">
                  <span className="nav-link px-2 link-dark">Timeline</span>
                </Link>
              </li>
              <li>
                <Link href="/#projects">
                  <span className="nav-link px-2 link-dark">Projects</span>
                </Link>
              </li>
              <li>
                <Link href="/#skills-and-tools">
                  <span className="nav-link px-2 link-dark">Skills & tools</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
