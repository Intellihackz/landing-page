import { CardHoverEffectDemo } from "@/components/Features";
import Footer from "@/components/Footer";
import { ImagesSliderDemo } from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";
import { AnimatedTooltipPreview } from "@/components/Team";
import { BackgroundBeamsDemo } from "@/components/Waitlist";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <NavbarDemo />
      <TracingBeam>
        <div>
          <ImagesSliderDemo />
          <div className="mt-10">
            <CardHoverEffectDemo />
          </div>
          <div>
            <AnimatedTooltipPreview />
          </div>
          <div className="mt-10">
            <BackgroundBeamsDemo />
          </div>
        </div>
      </TracingBeam>
      <Footer />
    </main>
  );
}
