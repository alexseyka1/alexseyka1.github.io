import { AboutMe } from "@components/main/AboutMe";
import Projects from "@components/main/Projects";
import { SKILLS } from "@config/skills";
import { MyPhoto } from "../components/main/MyPhoto";
import Skills from "../components/main/Skills";

export default function Home() {
  return (
    <>
      <MyPhoto />
      <AboutMe />
      <Skills title="Skills & Tools" skills={SKILLS} />
      <Projects />
    </>
  );
}
