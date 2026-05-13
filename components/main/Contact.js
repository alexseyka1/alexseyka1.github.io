import ContactsList from "../ContactsList"

export default function Contact() {
  return (
    <>
      <section id="contact" className="p-0">
        <div className="container p-4">
          <div className="row">
            <div className="d-none d-md-flex col-12 col-md-6 d-flex justify-content-center align-items-center">
              <span className="fa-stack fa-6x">
                <i className="fa-solid fa-square fa-stack-2x text-secondary"></i>
                <i className="fa-solid fa-envelopes-bulk fa-stack-1x fa-inverse"></i>
              </span>
            </div>

            <div className="col-12 col-md-6 py-4">
              <h2 className="display-5">Get in touch</h2>
              <ContactsList />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
