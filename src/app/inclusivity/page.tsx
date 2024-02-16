import Footer from "@/components/Footer";
import { GridBackgroundDemo } from "@/components/GridPage";
import { NavbarDemo } from "@/components/Navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <NavbarDemo />
      <TracingBeam>
        <div>
          <GridBackground />
        </div>
      </TracingBeam>
      <Footer />
    </main>
  );
}

function GridBackground() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-2xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Discover how we prioritize inclusivity, ensuring our technologies are
        accessible to all, regardless of ability, background, or circumstance.
      </p>
    </div>
  );
}