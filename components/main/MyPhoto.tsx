import { Button } from "@components/ui/Button";
import Image from "next/image";

export default function MyPhoto() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="order-2 md:order-1 flex justify-center items-center p-12">
          <div>
            Hello, I&apos;m
            <h1 className="text-5xl font-medium lh-1 mb-0">Oleksii Haidai</h1>
            <p className="text-lg text-gray mb-3">&mdash; Software Engineer</p>
            <p className="text-xl font-extralight py-2">
              Using my experience and development skills, I make amazing complex
              systems that solve business problems and help it grow, as well as
              easy to use.
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
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="aspect-square">
            <Image
              src="/img/bw.jpg"
              width={1000}
              height={1001}
              alt="Oleksii Haidai's portrait photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
