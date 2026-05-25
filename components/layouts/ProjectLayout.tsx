import { Button } from "@components/ui/Button";
import { Project } from "@config/projects";
import { cn } from "@utils/cn";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

type Props = {
  project: Project;
  children: React.ReactNode;
};

export function ProjectLayout({ project, children }: Props) {
  return (
    <>
      <div
        className={cn(
          "min-h-[50vh] bg-mist-50",
          "flex flex-col justify-center items-center",
          "bg-[radial-gradient(var(--color-gray-200)_2px,transparent_0)] bg-size-[40px_40px]",
        )}
      >
        <div className="container max-w-6xl!">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
            <div className="order-2 md:order-1 flex justify-center items-center pb-12 md:py-12">
              <DescriptionBlock {...project} />
            </div>

            <div className="order-1 md:order-2 pt-5 md:py-8 flex justify-center items-center">
              <PhotoBlock
                title={project.title}
                src={project.detailsImage.src}
                width={project.detailsImage.width}
                height={project.detailsImage.height}
              />
            </div>
          </div>
        </div>
      </div>

      {children}
    </>
  );
}

function DescriptionBlock({
  shortLine,
  title,
  description,
  position,
  website,
  internetArchiveUrl,
  timePeriod,
}: Pick<
  Project,
  | "shortLine"
  | "title"
  | "description"
  | "position"
  | "website"
  | "internetArchiveUrl"
  | "timePeriod"
>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-start"
    >
      <p className="backdrop-blur-xs">{shortLine}</p>
      <h1 className="backdrop-blur-xs text-5xl font-medium lh-1 mb-0">
        {title}
      </h1>
      <p className="backdrop-blur-xs text-lg text-gray mb-3">as {position}</p>
      <p className="backdrop-blur-xs text-xl font-extralight py-2 leading-relaxed">
        {description}
      </p>

      <div className="w-full md:w-auto flex flex-row flex-wrap items-center mt-4 gap-2">
        {website != null && (
          <Button
            variant="primary"
            as="Link"
            href={website}
            className="flex-1"
            target="_blank"
          >
            View website
          </Button>
        )}

        {internetArchiveUrl != null && (
          <Button
            variant="secondary"
            as="Link"
            href={internetArchiveUrl}
            target="_blank"
          >
            Internet archive
          </Button>
        )}
      </div>
    </motion.div>
  );
}

function PhotoBlock({
  src,
  width,
  height,
  title,
}: Project["thumbnail"] & Pick<Project, "title">) {
  const [isClient, setIsClient] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  return (
    <div className="w-full max-w-[60vw]">
      <motion.div
        initial={isDesktop && { x: 20, scale: 0.98, rotateZ: 0 }}
        animate={isDesktop && { x: 0, scale: 1, rotateZ: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="bg-mist-200 rounded-xl overflow-hidden shadow-lg border ring-4 ring-white"
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={title}
          loading="eager"
        />
      </motion.div>
    </div>
  );
}
