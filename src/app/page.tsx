import Hero         from "@/components/sections/Hero";
import About        from "@/components/sections/About";
import Services     from "@/components/sections/Services";
import Stylists     from "@/components/sections/Stylists";
import Experience   from "@/components/sections/Experience";
import Gallery      from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import CTA          from "@/components/sections/CTA";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Stylists />
      <Experience />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
