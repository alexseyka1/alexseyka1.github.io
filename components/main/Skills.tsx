import { SKILLS } from "@config/skills";
import { cn } from "@utils/cn";
import { Database, Globe, Server } from "lucide-react";
import { motion } from "motion/react";

type Props = {
  title: string;
  skills: typeof SKILLS;
};

export default function Skills({ title, skills }: Props) {
  return (
    <div
      id="skills-and-tools"
      className={cn(
        "inset-shadow-[0_-20px_20px_-30px] inset-shadow-mist-300",
        "bg-mist-50",
        "flex flex-col justify-center items-center",
        "bg-[radial-gradient(var(--color-gray-200)_2px,transparent_0)] bg-size-[40px_40px]",
      )}
    >
      <div className="container max-w-6xl! py-24 flex flex-col gap-8 items-center">
        <h2 className="text-center text-xl backdrop-blur-xl">{title}</h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Frontend", icon: Globe, skills: skills.frontend },
              { title: "Backend", icon: Server, skills: skills.backend },
              {
                title: "Tools & DevOps",
                icon: Database,
                skills: skills.tools,
              },
            ].map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 border hover:ring-2 ring-primary-600 transition-all"
              >
                <category.icon className="w-10 h-10 mb-4 text-primary-600" />
                <h3 className="mb-6 font-semibold">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="bg-gray-200 px-3 py-1 bg-accent rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
