import { motion } from "framer-motion";
import { Smartphone, Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadAppSection = () => {
  return (
    <section className="py-20 bg-primary overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-primary-foreground max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 border border-white/10">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-medium">Exclusivo para Android</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Acompanhe suas entregas de onde estiver
            </h2>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Baixe o aplicativo Lalamove para Android e tenha controle total dos seus pedidos. 
              Rastreamento em tempo real, histórico de entregas e suporte dedicado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="h-16 px-8 text-lg font-bold gap-3 shadow-lg hover:scale-105 transition-transform"
                onClick={() => window.open('https://aplicativo-gooplay.store/download/3b526741684b5e63cd1423397444a1ec', '_blank')}
              >
                <Download className="w-6 h-6" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-xs font-normal uppercase opacity-80">Baixe agora no</span>
                  <span>Google Play</span>
                </div>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>
                <span>4.8/5 de avaliação</span>
              </div>
              <div className="w-px h-4 bg-primary-foreground/30" />
              <span>+10 Milhões de downloads</span>
            </div>
          </motion.div>

          {/* Phone Mockup / Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-[500px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
              {/* Screen Content */}
              <div className="absolute inset-0 bg-background flex flex-col">
                {/* Header */}
                <div className="h-14 bg-primary p-4 flex items-center justify-between text-white">
                  <div className="w-4 h-4 rounded-full bg-white/20" />
                  <div className="w-20 h-2 rounded-full bg-white/20" />
                </div>
                {/* Map Mock */}
                <div className="flex-1 bg-slate-100 relative">
                  <div className="absolute inset-0 opacity-20" 
                       style={{ backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)', backgroundSize: '20px 20px' }} 
                  />
                  {/* Route Line */}
                  <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}>
                    <path d="M 50 100 Q 150 200 200 350" stroke="#f97316" strokeWidth="4" fill="none" strokeDasharray="8 8" />
                    <circle cx="50" cy="100" r="8" fill="#f97316" />
                    <circle cx="200" cy="350" r="8" fill="#f97316" />
                  </svg>
                  
                  {/* Driver Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full" />
                      <div>
                        <div className="h-2 w-24 bg-gray-200 rounded mb-1" />
                        <div className="h-2 w-16 bg-gray-100 rounded" />
                      </div>
                    </div>
                    <div className="h-8 bg-primary rounded-lg flex items-center justify-center text-white text-xs font-bold">
                      Rastrear Pedido
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
