import Navbar from "@/components/page-section/navbar"; // Assuming this wraps PcNav & MobileNav
import Hero from "@/components/hero";
import ProductsServices from "@/components/products";
import MissionVision from "@/components/mission";
import WhyChooseUs from "@/components/whyUs";
import FAQSection from "@/components/faq";
import Footer from "@/components/page-section/footer";

export default function Home() {
  return (
    <>
      <div className="relative h-fit bg-[url('/catland_hero.jpeg')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <div className="absolute inset-0 bg-black/80" />
        <Hero />
      </div>

      <>
      <ProductsServices/>
      <MissionVision/>
      <WhyChooseUs/>
      <FAQSection/>
      <Footer/>
      </>
    </>
  );
}
