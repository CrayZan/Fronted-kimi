import { MapPin, Wifi, Car, Clock, Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-hostal.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/90 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>Hotel 3 Estrellas</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Hostal del Milagro
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Tu hogar en Salta, Argentina
          </p>

          {/* Description */}
          <p className="text-white/80 text-lg mb-8 max-w-xl">
            Disfruta de una estancia acogedora con excelente ubicación, servicio personalizado y todas las comodidades que necesitas para tu viaje.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span className="text-sm">Av. Independencia 1001</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Wifi className="w-5 h-5 text-orange-400" />
              <span className="text-sm">WiFi Gratis</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Car className="w-5 h-5 text-orange-400" />
              <span className="text-sm">Estacionamiento</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-5 h-5 text-orange-400" />
              <span className="text-sm">Recepción 24h</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('#reservas')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg"
            >
              Reservar Ahora
            </Button>
            <Button
              onClick={() => scrollToSection('#habitaciones')}
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              Ver Habitaciones
            </Button>
          </div>

          {/* Price Tag */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg">
            <span className="text-sm">Desde</span>
            <span className="text-2xl font-bold text-orange-400">$18</span>
            <span className="text-sm">/noche</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#nosotros')}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
