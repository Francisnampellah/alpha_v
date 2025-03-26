import Section_02 from "@/components/homepage/section02";
import Section03 from "@/components/homepage/section03";
import Section_04 from "@/components/homepage/section04";
import Section_05 from "@/components/homepage/section05";
import Section_06 from "@/components/homepage/section06";
import Section_07 from "@/components/homepage/section07";
import OurEvents from "@/components/homepage/section0Events";
import OurTeam from "@/components/homepage/ourTeam";
import Footer from "@/components/footer";
import HeroBanner from "@/components/homepage/HeroBanner";

export default function Home() {
  return (
    <>
    <div className="flex flex-col">
      <HeroBanner />
      <Section_02 />
      <Section03 />
      <Section_04 />
      <OurEvents />
      <Section_05 />
      <OurTeam />
      <Section_07 />
   </div>
    <Footer />
    </>
  );
}
