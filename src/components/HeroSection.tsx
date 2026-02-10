import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import lalamoveGif from "@/assets/lalamove-gif.gif";
import lalamoveBanner from "@/assets/lalamove-banner.png";

interface HeroSectionProps {
  onTrack: (code: string) => void;
}

const HeroSection = ({ onTrack }: HeroSectionProps) => {
  const [trackingCode, setTrackingCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingCode.trim()) {
      onTrack(trackingCode.trim().toUpperCase());
    }
  };

  return (
    <section className="relative min-h-screen bg-background overflow-hidden pt-20">
      <div className="container mx-auto px-4 lg:px-8 pt-12 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-foreground"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Solução Rápida em
              <br />
              <span className="text-primary">Entregas</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Conectamos você a motoristas parceiros para entregas rápidas e seguras. 
              Para empresas e uso pessoal.
            </p>

            {/* Tracking Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Digite o código de rastreio"
                    value={trackingCode}
                    onChange={(e) => setTrackingCode(e.target.value)}
                    className="pl-12 h-14 text-lg bg-background border border-input shadow-sm text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg" 
                  className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg shadow-button transition-all hover:scale-105"
                >
                  Rastrear
                </Button>
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Package className="w-4 h-4" />
                Não precisa de cadastro para rastrear
              </p>
            </form>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">+50K</p>
                <p className="text-sm text-muted-foreground">Entregas/mês</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15min</p>
                <p className="text-sm text-muted-foreground">Tempo médio</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <img
              src={lalamoveGif}
              alt="Veículos de entrega Lalamove"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full mt-16 mb-20"
        >
          <img 
            src={lalamoveBanner} 
            alt="Lalamove Banner" 
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
