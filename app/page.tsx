import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioGallery from "@/components/PortfolioGallery";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import BookingProcess from "@/components/BookingProcess";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

/**
 * One-page site. Section order follows the visitor's decision journey:
 * arrive → see the work → meet Jerry → check services → build trust →
 * understand the process → clear objections → act.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PortfolioGallery />
        <About />
        <Services />
        <Pricing />
        <WhyChooseUs />
        <Testimonials />
        <BookingProcess />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
