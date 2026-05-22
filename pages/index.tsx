import { AboutMe } from "@components/main/AboutMe";
import Projects from "@components/main/Projects";
import { MyPhoto } from "../components/main/MyPhoto";
import Skills from "../components/main/Skills";

export default function Home() {
  return (
    <>
      <MyPhoto />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
}
