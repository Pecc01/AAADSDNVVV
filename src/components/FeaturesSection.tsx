import { motion } from "framer-motion";
import { Clock, Shield, MapPin, Headphones, CreditCard, Zap } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Entregas em até 15 minutos na sua região",
  },
  {
    icon: Shield,
    title: "Seguro Incluso",
    description: "Suas entregas protegidas contra danos e extravios",
  },
  {
    icon: MapPin,
    title: "Rastreio em Tempo Real",
    description: "Acompanhe cada etapa da sua entrega no mapa",
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Nossa equipe disponível a qualquer momento",
  },
  {
    icon: CreditCard,
    title: "Pagamento Fácil",
    description: "Pix, cartão de crédito ou boleto",
  },
  {
    icon: Zap,
    title: "Agendamento Flexível",
    description: "Escolha a data e horário que preferir",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Por que escolher a RapidGo?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia e eficiência para suas entregas
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
