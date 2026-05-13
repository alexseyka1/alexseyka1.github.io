import Contact from "../components/main/Contact"
import MyPhoto from "../components/main/MyPhoto"
import Projects from "../components/main/projects/Projects"
import Skills from "../components/main/Skills"
import Timeline from "../components/main/timeline/Timeline"

export default function Home() {
  return (
    <>
      <MyPhoto />
      <Contact />
      <Timeline />
      <Projects />
      <Skills />
    </>
  )
}
