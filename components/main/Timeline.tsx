import { TIMELINE } from "@config/timeline";
import { motion } from "motion/react";

export default function Timeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id="timeline"
    >
      <div className="container max-w-6xl! py-24 flex flex-col gap-8 items-center">
        <h2 className="text-center text-xl">Timeline</h2>
        <div className="md:order-1 flex justify-center items-center">
          <ul className="timeline">
            {TIMELINE.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, ease: "anticipate" }}
              >
                <h4 className="text-xl mb-1">{item.title}</h4>
                <div className="mb-3 text-gray">
                  <time>{item.timePeriod}</time>
                </div>

                {item.content}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
