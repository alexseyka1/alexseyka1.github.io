import { TIMELINE } from "@config/timeline";

export default function Timeline() {
  return (
    <div id="timeline">
      <div className="container max-w-6xl! py-24 flex flex-col gap-8 items-center">
        <h2 className="text-center text-xl">Timeline</h2>
        <div className="md:order-1 flex justify-center items-center">
          <ul className="timeline">
            {TIMELINE.map((item, i) => (
              <li key={item.title}>
                <h4 className="text-xl mb-1">{item.title}</h4>
                <div className="mb-3 text-gray">
                  <time>{item.timePeriod}</time>
                </div>

                {item.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
