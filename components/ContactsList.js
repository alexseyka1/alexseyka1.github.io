export default function ContactsList() {
  return (
    <ul className="list-unstyled">
      <li>
        <i className="fa-solid fa-fw fa-location-dot me-1"></i>
        <a
          className="text-decoration-none"
          href="https://www.google.com/maps/search/?api=1&query=Kyiv,%20Ukraine"
          target="_blank"
          rel="noreferrer"
        >
          Kyiv, Ukraine
        </a>
      </li>

      <li>
        <i className="fa-solid fa-fw fa-envelope me-1"></i>
        <a className="text-decoration-none" href="mailto:alexseyka1@gmail.com">
          alexseyka1@gmail.com
        </a>
      </li>

      <li>
        <i className="fa-brands fa-fw fa-telegram me-1"></i>
        <a className="text-decoration-none" href="https://t.me/alexseyka1" target="_blank" rel="noreferrer">
          Telegram
        </a>
      </li>

      <li>
        <i className="fa-brands fa-fw fa-linkedin me-1"></i>
        <a
          className="text-decoration-none"
          href="https://www.linkedin.com/in/alexseyka1"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </li>

      <li>
        <i className="fa-brands fa-fw fa-github me-1"></i>
        <a className="text-decoration-none" href="https://github.com/alexseyka1" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </li>
    </ul>
  )
}
