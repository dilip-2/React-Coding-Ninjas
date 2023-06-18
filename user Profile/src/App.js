import "./styles.css";
import About from "./About";
import Hero from "./Hero";
import Skills from "./Skills";

export default function App() {
  return (
    <>
      <div className="conatiner">
        <Hero />
        <Skills />
        <About />
      </div>
    </>
  )
}
