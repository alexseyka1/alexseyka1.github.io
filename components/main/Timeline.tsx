import "7.css/dist/7.scoped.css";
import { JOB_START_YEAR, NAME } from "@config/contact";
import { MENU_ITEMS } from "@config/menu";
import { PROJECTS } from "@config/projects";
import { TIMELINE } from "@config/timeline";
import { cn } from "@utils/cn";
import { motion } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useCallback, useState } from "react";

export default function Timeline() {
  const [isMaximized, setIsMaximized] = useState(false);
  const yearsOfExp = new Date().getFullYear() - JOB_START_YEAR;

  return (
    <div className="bg-[url(/img/windows7.png)] bg-fixed bg-cover bg-no-repeat bg-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        id="timeline"
      >
        <div
          className={cn(
            "flex flex-col gap-8 items-center transition-all",
            !isMaximized && "container max-w-6xl! py-8 md:py-12",
          )}
        >
          <div className="win7 w-full">
            <div className="window glass active">
              <TitleBar
                isMaximized={isMaximized}
                setIsMaximized={setIsMaximized}
              />
              <MenuBar />

              <div
                className={cn(
                  "window-body has-space has-scrollbar overflow-y-auto",
                  isMaximized ? "max-h-[80vh]" : "max-h-[70vh] md:max-h-[50vh]",
                )}
              >
                <ul className="tree-view text-base!">
                  {TIMELINE.map((item, i, arr) => (
                    <motion.li
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, ease: "anticipate" }}
                      className={cn(i + 1 < arr.length && "mb-12")}
                    >
                      <h4 className="text-xl mb-1">{item.title}</h4>
                      <fieldset className="bg-white/50">
                        <legend>
                          <time>{item.timePeriod}</time>
                        </legend>

                        <div>{item.content}</div>
                      </fieldset>

                      <div className="mb-3 text-gray"></div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="status-bar">
                {[
                  "50+ Projects",
                  `Experience: ${yearsOfExp}+ Years`,
                  "Full Stack: 100%",
                ].map((item, i) => (
                  <p key={i} className="status-bar-field">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function TitleBar({
  isMaximized,
  setIsMaximized,
}: {
  isMaximized: boolean;
  setIsMaximized: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();

  const maximize = useCallback(() => {
    setIsMaximized((value) => !value);
  }, [setIsMaximized]);

  const goHome = useCallback(() => {
    if (!router.isReady) return;
    router.push("/");
  }, [router]);

  return (
    <div
      className="title-bar"
      style={{ backgroundAttachment: "local" }}
      onDoubleClick={maximize}
    >
      <div className="flex gap-1.5 items-center">
        <ExportedImage
          src="/img/logo.png"
          alt="Window logo"
          width={4693}
          height={4693}
          className="w-4 h-4 mt-1.5"
          loading="lazy"
          draggable={false}
        />
        <h1 itemProp="headline" className="title-bar-text">
          Timeline
        </h1>
      </div>

      <div className="title-bar-controls">
        <button aria-label="Minimize" disabled></button>
        {isMaximized ? (
          <button aria-label="Restore" onClick={maximize}></button>
        ) : (
          <button aria-label="Maximize" onClick={maximize}></button>
        )}
        <button aria-label="Close" onClick={goHome}></button>
      </div>
    </div>
  );
}

function MenuBar() {
  return (
    <ul role="menubar">
      <li role="menuitem" tabIndex={0} aria-haspopup="true">
        File
        <ul role="menu">
          <li role="menuitem" aria-disabled>
            <a href="#menubar">
              Open <span>Ctrl+O</span>
            </a>
          </li>
          <li role="menuitem">
            <Link href={`${NAME} Full Stack Developer.pdf`} download passHref>
              Save my CV <span>Ctrl+S</span>
            </Link>
          </li>
          <li role="menuitem">
            <Link href="/">Exit</Link>
          </li>
        </ul>
      </li>

      {MENU_ITEMS.filter((item) => item.href !== "/#").map(
        ({ label, href }) => {
          if (href === "/#projects") {
            return (
              <li
                key={"Projects"}
                role="menuitem"
                tabIndex={0}
                aria-haspopup="true"
              >
                Projects
                <ul role="menu">
                  {PROJECTS.map((project, i) => (
                    <li
                      key={i}
                      role="menuitem"
                      {...(!project.hasContent
                        ? { "aria-disabled": true }
                        : {})}
                      title={project.description}
                    >
                      {project?.logo?.src != null && (
                        <ExportedImage
                          src={project.logo.src}
                          width={project.logo.width}
                          height={project.logo.height}
                          alt={`${project.name} logo`}
                          className={cn(
                            "h-4 w-4 pointer-events-none",
                            project.logo.className,
                          )}
                          loading="lazy"
                          draggable={false}
                        />
                      )}

                      <Link href={`/projects/${project.id}`} passHref>
                        {project.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }

          return (
            <Link
              key={label}
              href={href}
              role="menuitem"
              tabIndex={0}
              aria-haspopup="true"
              passHref
              className="group no-underline! mt-0! cursor-default!"
              {...(href === "/timeline" ? { "aria-disabled": true } : {})}
            >
              <p className="text-black group-hover:text-white!">{label}</p>
            </Link>
          );
        },
      )}
    </ul>
  );
}
