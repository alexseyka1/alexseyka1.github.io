import Link from "next/link"
import ContactsList from "./ContactsList"
export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5 main-footer">
      <div className="container">
        <div className="row flex-row-reverse flex-md-row">
          <div className="col-12 col-md">
            <h5>Alexsey Gaidai</h5>

            <ContactsList />

            <div className="mt-2">
              <small className="d-block mb-3 text-muted">© {new Date().getFullYear()}</small>
            </div>
          </div>

          <div className="col-6 col-md">
            <h5>Sections</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <Link href="/#">
                  <a className="link-secondary text-decoration-none">My photo</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/#timeline">
                  <a className="link-secondary text-decoration-none">Timeline</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/#projects">
                  <a className="link-secondary text-decoration-none">Projects</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/#skills-and-tools">
                  <a className="link-secondary text-decoration-none">Skills & Tools</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/#contact">
                  <a className="link-secondary text-decoration-none">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Projects</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <Link href="/projects/dok">
                  <a className="link-secondary text-decoration-none">Dok.ua</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/projects/solar-service-group">
                  <a className="link-secondary text-decoration-none">Solar Service Group</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/projects/rush-hq">
                  <a className="link-secondary text-decoration-none">Rush HQ</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/projects/enertek">
                  <a className="link-secondary text-decoration-none">Enertek</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/projects/warrpit">
                  <a className="link-secondary text-decoration-none">Warrp.it</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/projects/other-crm">
                  <a className="link-secondary text-decoration-none">Other CRM systems</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
