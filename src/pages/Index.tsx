import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import DownloadAppSection from "@/components/DownloadAppSection";
import Footer from "@/components/Footer";
import TrackingModal from "@/components/TrackingModal";

const Index = () => {
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [trackingCode, setTrackingCode] = useState("");

  const handleTrack = (code: string) => {
    setTrackingCode(code);
    setIsTrackingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection onTrack={handleTrack} />
      <DownloadAppSection />
      <ServicesSection />
      <FeaturesSection />
      <Footer />
      
      <TrackingModal
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
        trackingCode={trackingCode}
      />
    </div>
  );
};

export default Index;
