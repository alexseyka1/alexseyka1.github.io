import { ProjectLayout } from "@components/layouts/ProjectLayout";
import Skills from "@components/main/Skills";
import { TextSection } from "@components/TextSection";
import { NAME } from "@config/contact";
import { PROJECTS } from "@config/projects";
import Head from "next/head";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";

const project = PROJECTS.find(({ id }) => id === "rush-hq");

export default function SolarServiceGroup() {
  if (!project) return;

  return (
    <>
      <Head>
        <title>{NAME} - Project Rush HQ</title>
        <meta
          name="description"
          content="Melbourne's top indoor adventure and trampoline park"
        />
      </Head>

      <ProjectLayout project={project}>
        <TextSection title="How it was?" className="border-none border-y">
          <p>
            Working on the booking system for Rush HQ turned out to be one of
            those projects where every piece looks simple on its own - until you
            start putting them together. The place itself is huge: several halls
            of different sizes, each with its own capacity, layout, and allowed
            activities. Some halls can be merged into bigger spaces, but not all
            combinations make sense (or are even physically possible). Others
            are reserved only for corporate events, while some are open for
            everything from team-building sessions to kids&apos; birthday
            parties.
          </p>

          <Zoom zoomImg={{ src: "/img/projects/rush-hq/trampoline-hall.png" }}>
            <Image
              src="/img/projects/rush-hq/trampoline-hall.png"
              width={1200}
              height={800}
              className="float-end ms-8 mb-8! timeline-image rounded-xl overflow-hidden shadow-lg border ring-4 ring-white"
              alt="Rush Trampoline Hall"
            />
          </Zoom>

          <p className="mt-4">
            I was responsible for designing and developing the booking logic -
            the part that decides who can book what, when, and how. On top of
            basic scheduling, guests could add extra products and services when
            making a booking: trampoline socks, cakes, meals, and more, with
            quantities that influenced the total price. Add to that a flexible
            discount-coupon system with limits per usage, per person, and even
            per product - and things got complex quickly.
          </p>

          <p className="mt-4">
            One of the biggest challenges was optimizing how groups were
            allocated to halls. The goal was to fill spaces efficiently without
            causing overbooking or leaving awkward gaps that made later
            scheduling nearly impossible. I ended up writing an algorithm that
            tried to “pack” groups into the layout automatically, preferring
            combinations that left the least unused capacity while respecting
            all the hall restrictions and time slots.
          </p>

          <p className="mt-4">
            We also had to make sure cancellations worked smoothly - when
            someone canceled, their slot needed to become available again
            immediately, without breaking ongoing group allocations or
            overlapping schedules.
          </p>

          <p className="mt-4">
            In the end, the system became both flexible and smart enough to
            handle the park&apos;s real-world complexities - from a small group
            of kids jumping around to a big corporate team event spanning half
            the building. It was one of those projects where backend logic
            turned out to be just as adventurous as the attraction itself.
          </p>
        </TextSection>

        <TextSection title="Achievements" className="bg-white border-y">
          <p>User experience:</p>
          <p>
            The booking interface was redesigned to make date and time selection
            extremely simple and intuitive. Visitors could immediately see
            available slots, capacities, and options without getting lost in
            filters or complex steps. This reduced drop-off rates and made the
            process feel effortless for first-time users.
          </p>

          <Zoom zoomImg={{ src: "/img/projects/rush-hq/reservations.png" }}>
            <Image
              src="/img/projects/rush-hq/reservations.png"
              width={2048}
              height={2880}
              className="float-end ms-8 mb-8! timeline-image rounded-xl overflow-hidden shadow-lg border ring-4 ring-white"
              alt="Reservations page"
            />
          </Zoom>

          <p className="mt-4">Performance improvements:</p>
          <p>
            Booking data was strategically cached to keep response times very
            short, even during peak hours. This made the overall user flow feel
            smoother and significantly reduced server load.
          </p>

          <p className="mt-4">Business impact:</p>
          <p>
            With fewer booking errors and better hall utilization (higher
            occupancy at any given time), the venue’s overall revenue increased.
            On top of that, upselling additional products and services during
            the booking flow — like socks, cakes, or meals — led to a noticeable
            spike in secondary sales.
          </p>

          <p className="mt-4">Code structure and reusability:</p>
          <p>
            We reused existing components wherever possible and created new
            generic ones when necessary. This made the system modular and easier
            to maintain, while also reducing development time for future
            features.
          </p>

          <p className="mt-4">Database optimization:</p>
          <p>
            Large, heavy tables were split into smaller and normalized ones,
            improving clarity and logic of data organization. For high-demand
            columns, proper indexing strategies were applied, which noticeably
            sped up complex queries and improved overall scalability.
          </p>

          <p className="mt-4">
            This project ended up being a full-stack lesson in how real-world
            data and user behavior can be balanced through both engineering and
            UX — and how making booking “simple” for users often means solving
            something very complex underneath.
          </p>
        </TextSection>

        {project.skills != null && (
          <Skills title="Technology Stack" skills={project.skills} />
        )}
      </ProjectLayout>
    </>
  );
}
