import { PROJECTS } from "@config/projects";
import { cn } from "@utils/cn";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
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
              const As = project.hasContent ? Link : Div;

              return (
                <As key={i} href={`/projects/${project.id}`} passHref>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white group rounded-xl ring-4 ring-white hover:ring-2 hover:ring-primary-600 transition-all overflow-hidden shadow-lg relative"
                  >
                    <div className="aspect-video overflow-hidden relative bg-mist-200">
                      {project?.thumbnail?.src != null && (
                        <ExportedImage
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
                            <ExportedImage
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

                        {project.hasContent && (
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {project.description}
                      </p>

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
}

function Div({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
