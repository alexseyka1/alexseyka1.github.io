import { JOB_START_YEAR } from "@config/contact";
import { Code2, Cpu, Globe, Hash } from "lucide-react";
import { motion } from "motion/react";

export function AboutMe() {
  return (
    <div className="bg-mist-100 border-y-2 border-y-mist-200 inset-shadow-[0_0_50px_-30px] inset-shadow-primary-600/25">
      <div className="container max-w-7xl! py-24 flex flex-col gap-8 items-center">
        <h2 className="text-center text-xl">About Me</h2>
        <div className="max-w-2xl md:order-1 flex justify-center items-center">
          <DescriptionBlock />
        </div>
      </div>
    </div>
  );
}

function DescriptionBlock() {
  const yearsOfExp = new Date().getFullYear() - JOB_START_YEAR;

  return (
    <div className="h-full flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-4">
        <p>
          I&apos;m a Full-Stack Developer with {yearsOfExp}+ years of experience
          building scalable products, complex backend systems, and modern web
          applications.
        </p>
        <p>
          I specialize in Node.js and system architecture, with strong expertise
          in databases, APIs, high-load systems, and full product development
          lifecycle — from idea to production.
        </p>
        <p>
          Throughout my career, I&apos;ve worked on renewable energy platforms,
          IoT ecosystems, CRM/ERP systems, mobile applications, and Web3
          products. I enjoy solving complex engineering problems and creating
          software that is reliable, efficient, and built to scale.
        </p>
        <p>
          I&apos;m deeply involved in every project I work on and naturally
          immerse myself into the development process, often reaching a strong
          state of focus and flow. I value clean architecture, responsibility,
          maintainability, and thoughtful engineering decisions.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-6 md:pt-none">
        {[
          { icon: Code2, label: "50+ Projects" },
          { icon: Globe, label: `${yearsOfExp} Years` },
          { icon: Cpu, label: "Full-Stack" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <item.icon className="w-8 h-8 mx-auto mb-2 text-primary-600" />
            <p className="text-sm">{item.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 mt-6 md:mt-none">
        {[
          { icon: Hash, label: "Backend" },
          { icon: Hash, label: "Frontend" },
          { icon: Hash, label: "Mobile" },
          { icon: Hash, label: "Architecture" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-row items-center gap-2 font-extralight"
          >
            <item.icon className="w-4 h-4" />
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
