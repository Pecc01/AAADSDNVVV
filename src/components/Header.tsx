import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import lalamoveLogo from "@/assets/lalamove-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Empresas", hasDropdown: true },
    { label: "Para Você", hasDropdown: false },
    { label: "Motorista", hasDropdown: true },
    { label: "Preços", hasDropdown: false },
    { label: "Sobre", hasDropdown: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.img 
              src={lalamoveLogo} 
              alt="Lalamove" 
              className="h-10 w-auto object-contain"
              whileHover={{ scale: 1.02 }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="font-medium">
                Entrar
              </Button>
            </Link>
            <Button className="gradient-hero shadow-button font-semibold">
              Cadastre-se
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="lg:hidden overflow-hidden bg-background border-t border-border"
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="block py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full font-medium">
                Entrar
              </Button>
            </Link>
            <Button className="w-full gradient-hero shadow-button font-semibold">
              Cadastre-se
            </Button>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
