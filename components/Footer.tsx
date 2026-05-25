import { NAME, SOCIAL_LINKS } from "@config/contact";
import { MENU_ITEMS } from "@config/menu";
import { PROJECTS } from "@config/projects";
import { cn } from "@utils/cn";
import { motion } from "motion/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={cn(
        "bg-mist-800 text-mist-50",
        "flex flex-col justify-center items-center",
        "bg-[radial-gradient(var(--color-gray-800)_2px,transparent_0)] bg-size-[40px_40px]",
      )}
    >
      <div className="container max-w-2xl! py-24 flex flex-col gap-8 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full flex flex-col gap-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="mb-6 font-semibold">{NAME}</h3>
              <ul className="flex flex-col gap-2">
                {SOCIAL_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      passHref
                      className="text-mist-400 hover:text-mist-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="mb-6 font-semibold">Sections</h3>
              <ul className="flex flex-col gap-2">
                {MENU_ITEMS.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      passHref
                      className="text-mist-400 hover:text-mist-50"
                    >
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="mb-6 font-semibold">Projects</h3>
              <ul className="flex flex-col gap-2">
                {PROJECTS.map((project) => {
                  const hasContent = project.content != null;
                  const As = hasContent ? Link : Div;

                  return (
                    <li key={project.id} className="text-mist-400">
                      {hasContent ? (
                        <Link
                          href={`/projects/${project.id}`}
                          passHref
                          className="hover:text-mist-50"
                        >
                          {project.name}
                        </Link>
                      ) : (
                        <div>{project.name}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );

  return (
    <footer
      className={cn(
        "inset-shadow-[0_-20px_20px_-30px] inset-shadow-mist-300",
        "bg-mist-800 text-mist-50",
        "flex flex-col justify-center items-center",
        "bg-[radial-gradient(var(--color-gray-800)_2px,transparent_0)] bg-size-[40px_40px]",
      )}
    >
      <div className="container max-w-6xl! py-24 flex flex-col gap-8 items-center">
        <h2 className="text-center text-xl">About Me</h2>
        <div className="w-full max-w-2xl md:order-1 flex justify-center items-center">
          <div className="w-full flex flex-row justify-between items-start">
            <div className="flex flex-col gap-8">
              <h5 className="text-xl">Sections</h5>
              <ul className="flex flex-col justify-center items-start">
                {MENU_ITEMS.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} passHref>
                      <span className="">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h5 className="text-xl">Projects</h5>
              <ul>
                {PROJECTS.map((project) => {
                  const hasContent = project.content != null;
                  const As = hasContent ? Link : Div;

                  return (
                    <li key={project.id}>
                      <As href={`/projects/${project.id}`} passHref>
                        {project.name}
                      </As>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Div({ children, ...props }: { children: React.ReactNode }) {
  return <span {...props}>{children}</span>;
}
