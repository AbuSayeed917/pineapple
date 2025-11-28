import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Clients } from "./components/Clients";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { Trust } from "./components/Trust";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Clients />
      <About />
      <Features />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Trust />
      <Contact />
    </div>
  );
}
