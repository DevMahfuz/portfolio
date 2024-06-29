import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Counter from "@/components/counter/counter";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import HireMe from "@/components/hire-me/hire-me";
import Portfolio from "@/components/portfolio/portfolio";
import Skills from "@/components/skills/skills";
import Testimonial from "@/components/testimonial/testimonial";
import WhyME from "@/components/whyME/why-me";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Testimonial />
      <Counter />
      <WhyME />
      <HireMe />
      <Contact />
    </main>
  );
}
