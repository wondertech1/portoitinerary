import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PostcardRack from "@/components/home/PostcardRack";
import BentoGrid from "@/components/home/BentoGrid";
import NeighborhoodBoard from "@/components/home/NeighborhoodBoard";
import PostcardNewsletter from "@/components/home/PostcardNewsletter";

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <PostcardRack />
        <BentoGrid />
        <NeighborhoodBoard />
        <PostcardNewsletter />
      </main>

      <Footer />
    </>
  );
}
