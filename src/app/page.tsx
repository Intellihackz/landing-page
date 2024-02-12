import { CardHoverEffectDemo } from "@/components/Features";
import Footer from "@/components/Footer";
import { ImagesSliderDemo } from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";
import { BackgroundBeamsDemo } from "@/components/Waitlist";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <NavbarDemo />
      <TracingBeam
        children={
          <div>
            <ImagesSliderDemo />
            <div className="mt-10">
              <CardHoverEffectDemo />
            </div>
            <div className="mt-10">
              <BackgroundBeamsDemo />
            </div>
          </div>
        }
      />
      <Footer />
    </main>
  );
}
