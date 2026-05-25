import { Button } from "@components/ui/Button";
import { JOB_TITLE, NAME } from "@config/contact";
import { cn } from "@utils/cn";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export function MyPhoto() {
  return (
    <div
      className={cn(
        "md:h-[90vh] bg-mist-50",
        "flex flex-col justify-center items-center",
        "bg-[radial-gradient(var(--color-gray-200)_2px,transparent_0)] bg-size-[40px_40px]",
      )}
    >
      <div className="container max-w-6xl!">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          <div className="order-2 md:order-1 flex justify-center items-center pb-12 md:p-12 pl-0!">
            <DescriptionBlock />
          </div>

          <div className="order-1 md:order-2 pt-5 md:py-8 flex justify-center items-center">
            <PhotoBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

function DescriptionBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-start"
    >
      <p className="backdrop-blur-xs">Hello, I&apos;m</p>
      <h1 className="backdrop-blur-xs text-5xl font-medium lh-1 mb-0">
        {NAME}
      </h1>
      <p className="backdrop-blur-xs text-lg text-gray mb-3">
        &mdash; {JOB_TITLE}
      </p>
      <p className="backdrop-blur-xs text-xl font-extralight py-2 leading-relaxed">
        Using my experience and development skills, I make amazing complex
        systems that solve business problems and help it grow, as well as easy
        to use.
      </p>

      <div className="w-full md:w-auto flex flex-row flex-wrap items-center mt-4 gap-2">
        <Button
          variant="primary"
          as="Link"
          href={`${NAME} Full Stack Developer.pdf`}
          className="flex-1"
          download
        >
          Download resume
        </Button>
        <Button
          variant="secondary"
          as="Link"
          href="https://github.com/alexseyka1"
        >
          <i className="fa-brands fa-github"></i> GitHub
        </Button>
      </div>
    </motion.div>
  );
}

function PhotoBlock() {
  const [isClient, setIsClient] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  return (
    <div className="max-w-[60vw] aspect-square">
      <motion.div
        initial={isDesktop && { x: 20, scale: 0.98, rotateZ: 0 }}
        animate={isDesktop && { x: 0, scale: 1, rotateZ: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="rounded-xl overflow-hidden shadow-lg border ring-4 ring-white"
      >
        <Image
          src="/img/square-photo.jpeg"
          width={2048}
          height={2048}
          alt={`${NAME}'s photo`}
          loading="eager"
        />
      </motion.div>
    </div>
  );
}
