import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Visit from "./components/Visit";
import Study from "./components/Study";

//Main Component
export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Visit/>
      <Study/>
    </main>
  );
}
