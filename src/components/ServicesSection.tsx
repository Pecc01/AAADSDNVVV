import { motion } from "framer-motion";
import { Building2, User, Car, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Para Empresas",
    description: "Gaste menos com logística e entregue no mesmo dia",
    cta: "Saiba mais",
    color: "bg-background",
  },
  {
    icon: User,
    title: "Para Você",
    description: "Peça um veículo sem complicação sempre que precisar",
    cta: "Descubra mais",
    color: "bg-background",
  },
  {
    icon: Car,
    title: "Seja Motorista",
    description: "Cadastre seu veículo, entregue com a RapidGo e complemente sua renda",
    cta: "Cadastrar como motorista",
    color: "bg-background",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Como podemos te ajudar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções de entrega para todos os tipos de necessidade
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative ${service.color} rounded-2xl p-8 text-foreground shadow-soft hover:shadow-card border border-border hover:border-primary transition-all duration-300 overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150 duration-500" />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 gradient-hero rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 font-semibold text-primary group-hover:gap-4 transition-all">
                  <span>{service.cta}</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
