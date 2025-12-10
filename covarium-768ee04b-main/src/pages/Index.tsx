import Particles from "@/components/Particles";
import Hero from "@/components/Hero";
import Rules from "@/components/Rules";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Particles />
      <div className="relative z-10">
        <Hero />
        <Rules />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
