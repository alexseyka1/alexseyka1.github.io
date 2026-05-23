import { PROJECTS } from "@config/projects";
import { cn } from "@utils/cn";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div
      id="projects"
      className="bg-mist-100 border-y-2 border-y-mist-200 inset-shadow-[0_0_50px_-30px] inset-shadow-primary-600/25"
    >
      <div className="container max-w-6xl! py-24 flex flex-col gap-8 items-center">
        <h2 className="text-center text-xl">Featured Projects</h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => {
              const hasContent = project.content != null;
              const As = hasContent ? Link : Div;

              return (
                <As key={i} href={`/project/${project.id}`} passHref>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white group rounded-xl border ring-4 ring-white hover:ring-2 hover:ring-primary-600 transition-all overflow-hidden shadow-lg relative"
                  >
                    <div className="aspect-video overflow-hidden relative bg-mist-200">
                      {project?.thumbnail?.src != null && (
                        <Image
                          src={project.thumbnail.src}
                          width={project.thumbnail.width}
                          height={project.thumbnail.height}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 pointer-events-none"
                          loading="lazy"
                          draggable={false}
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 flex items-center justify-between font-semibold">
                        <div className="flex items-center gap-2">
                          {project?.logo?.src != null && (
                            <Image
                              src={project.logo.src}
                              width={project.logo.width}
                              height={project.logo.height}
                              alt={`${project.name} logo`}
                              className={cn(
                                "h-6 w-auto pointer-events-none",
                                project.logo.className,
                              )}
                              loading="lazy"
                              draggable={false}
                            />
                          )}
                          {project.name}
                        </div>

                        {hasContent && (
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {project.description}
                      </p>

                      {
                        /** I could'n figured out where to place these logos... */
                        // project?.logo?.src != null && (
                        //   <Image
                        //     src={project.logo.src}
                        //     width={project.logo.width}
                        //     height={project.logo.height}
                        //     alt={`${project.name} logo`}
                        //     className="h-10 w-auto absolute bottom-6 left-6"
                        //     loading="lazy"
                        //   />
                        // )
                      }

                      {/* <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech, j) => (
                          <span
                            key={j}
                            className="px-2 py-1 bg-accent rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                    </div> */}
                    </div>
                  </motion.div>
                </As>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );

  function Div({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }

  return (
    <section id="projects">
      <div className="container">
        <h2 className="mt-4 display-5">The most interesting projects</h2>

        <div className="grid grid-cols-1 lg:greid-cols-3 items-stretch mt-2">
          <div
            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg project_card"
            style={{ backgroundImage: "url('/img/projects/dok-bg.jpeg')" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold project-card__title">
                dok.ua
              </h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto glass-bg p-1">
                  <img
                    src="/img/projects/dok-logo-large.svg"
                    alt="dok.ua"
                    height="40"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <small>
                    <time>2015</time>
                  </small>
                </li>
              </ul>
            </div>
            <Link href="/projects/dok">
              <span
                className="stretched-link"
                title="View project details"
              ></span>
            </Link>
          </div>

          <div
            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg project-card"
            style={{ backgroundImage: "url('/img/projects/ssg-bg.jpeg')" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold project-card__title">
                Solar Service Group
              </h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="/img/projects/ssg-logo.jpeg"
                    alt="Solar Service Group"
                    height="40"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <small>
                    <time>2017</time>
                  </small>
                </li>
              </ul>
            </div>
            <Link href="/projects/solar-service-group">
              <span
                className="stretched-link"
                title="View project details"
              ></span>
            </Link>
          </div>

          <div
            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg project-card"
            style={{ backgroundImage: "url('/img/projects/rushhq-bg.jpeg')" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold project-card__title">
                Rush HQ
              </h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="/img/projects/rushhq-logo.png"
                    alt="Rush HQ"
                    height="40"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <small>
                    <time>2018</time>
                  </small>
                </li>
              </ul>
            </div>
            <Link href="/projects/rush-hq">
              <span
                className="stretched-link"
                title="View RushHQ details"
              ></span>
            </Link>
          </div>

          <div
            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg project-card"
            style={{
              backgroundImage: "url('/img/projects/enertek-bg.jpeg')",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold project-card__title">
                Enertek
              </h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto bg-black rounded-circle enertek-logo">
                  <img
                    src="/img/projects/enertek-logo.svg"
                    alt="Enertek"
                    height="40"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <small>
                    <time>2018</time>
                  </small>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg project-card"
            style={{ backgroundImage: "url('/img/projects/warrp-bg.jpeg')" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold project-card__title">
                Warrp.it
              </h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="/img/projects/warrp-logo-circle.png"
                    alt="Warrp.it"
                    height="40"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <small>
                    <time>2020</time>
                  </small>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg project-card"
            style={{ backgroundImage: "url('/img/projects/crm.jpg')" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold project-card__title">
                Other CRM Systems
              </h2>
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
    </section>
  );
}
