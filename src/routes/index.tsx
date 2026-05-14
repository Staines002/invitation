import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { OurStory } from "@/components/OurStory";
import { PhotoGallery } from "@/components/PhotoGallery";
import { EventDetails } from "@/components/EventDetails";
import { RSVPSection } from "@/components/RSVPSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-wedding-white text-wedding-black">
      <SmoothScroll />
      <Navbar />
      <main>
        <HeroSection />
        <OurStory />
        <EventDetails />
        <PhotoGallery />
        <RSVPSection />
      </main>
      <Footer />
    </div>
  );
}
