import Image from "next/image";
import Banner_01 from "@/components/homepage/bannner01";
import Section_02 from "@/components/homepage/section02";
import { Section } from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <Banner_01 />
      <Section_02 />
    </div>
  );
}
