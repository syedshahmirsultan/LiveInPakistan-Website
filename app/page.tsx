import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";

//Main Component
export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
    </main>
  );
}
