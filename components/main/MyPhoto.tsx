import { Button } from "@components/ui/Button";
import { cn } from "@utils/cn";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export function MyPhoto() {
  return (
    <div
      className={cn(
        "container bg-[radial-gradient(var(--color-gray-200)_2px,transparent_0)]",
        "bg-size-[40px_40px]",
        "inset-shadow-error",
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        <div className="order-2 md:order-1 flex justify-center items-center pb-12 md:p-12">
          <DescriptionBlock />
        </div>

        <div className="order-1 md:order-2 pt-5 md:py-8">
          <PhotoBlock />
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
      transition={{ duration: 0.8 }}
      className="backdrop-blur-xs"
    >
      Hello, I&apos;m
      <h1 className="text-5xl font-medium lh-1 mb-0">Oleksii Haidai</h1>
      <p className="text-lg text-gray mb-3">&mdash; Software Engineer</p>
      <p className="text-xl font-extralight py-2">
        Using my experience and development skills, I make amazing complex
        systems that solve business problems and help it grow, as well as easy
        to use.
      </p>
      <div className="flex flex-row flex-wrap items-center mt-4 gap-2">
        <Button
          variant="primary"
          as="Link"
          href="Oleksii Haidai Full Stack Developer.pdf"
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
    <div className="aspect-square">
      <motion.div
        initial={isDesktop && { x: 20, scale: 0.98 }}
        animate={isDesktop && { x: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        <Image
          src="/img/square-photo.jpeg"
          width={2048}
          height={2048}
          alt="Oleksii Haidai's photo"
          loading="eager"
        />
      </motion.div>
    </div>
  );
}
