import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react';

const quickLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Habitaciones', href: '#habitaciones' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Reservas', href: '#reservas' },
  { name: 'Contacto', href: '#contacto' },
];

const services = [
  'WiFi Gratuito',
  'Estacionamiento',
  'Recepción 24h',
  'Aire Acondicionado',
  'Pet Friendly',
  'Terraza',
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">HM</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Hostal del Milagro</h3>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Tu hogar en Salta, Argentina. Disfruta de una estancia acogedora con excelente ubicación y servicio personalizado.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>Av. Independencia 1001, Salta</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2 text-gray-400 text-sm">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+543874000000"
                  className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-orange-500" />
                  +54 387 400-0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hostaldelmilagro.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-orange-500" />
                  info@hostaldelmilagro.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-orange-500" />
                Recepción 24 horas
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Hostal del Milagro. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">
                Política de privacidad
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">
                Términos y condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
