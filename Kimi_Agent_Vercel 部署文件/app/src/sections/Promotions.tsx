import { Percent, Gift, Users, Star, Check, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const promotions = [
  {
    icon: Percent,
    discount: '15% OFF',
    title: 'Reserva Anticipada',
    description: 'Reserva con 30 días de anticipación y obtén un 15% de descuento en tu estadía.',
    condition: 'Válido para estadías de 2+ noches',
  },
  {
    icon: Gift,
    discount: '20% OFF',
    title: 'Estancia Prolongada',
    description: 'Quédate 5 noches o más y recibe un 20% de descuento en tu reserva.',
    condition: 'Mínimo 5 noches',
  },
  {
    icon: Users,
    discount: '10% OFF',
    title: 'Descuento Grupal',
    description: 'Reserva 3 o más habitaciones y obtén un 10% de descuento en cada una.',
    condition: 'Mínimo 3 habitaciones',
  },
  {
    icon: Star,
    discount: '10% OFF',
    title: 'Cliente Frecuente',
    description: '¿Ya te hospedaste con nosotros? Disfruta de un 10% de descuento en tu próxima visita.',
    condition: 'Presentar comprobante de estadía anterior',
  },
];

const packages = [
  {
    name: 'Paquete Romántico',
    price: 45,
    description: 'Incluye habitación doble, desayuno especial en la terraza y late check-out.',
    features: [
      'Habitación Doble',
      'Desayuno especial',
      'Late check-out',
      'Botella de vino',
    ],
  },
  {
    name: 'Paquete Familiar',
    price: 55,
    description: 'Perfecto para familias. Incluye habitación familiar, desayunos y estacionamiento.',
    features: [
      'Habitación Familiar',
      'Desayunos incluidos',
      'Estacionamiento gratis',
      'WiFi premium',
    ],
  },
];

export default function Promotions() {
  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="promociones" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Promociones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Ofertas Especiales
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aprovecha nuestras promociones exclusivas y haz tu estadía aún más económica.
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {promotions.map((promo) => (
            <div
              key={promo.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <promo.icon className="w-6 h-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500 mb-2">
                {promo.discount}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {promo.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{promo.description}</p>
              <p className="text-xs text-gray-500">{promo.condition}</p>
            </div>
          ))}
        </div>

        {/* Packages Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Paquetes Especiales
          </h3>
          <p className="text-gray-600">
            Experiencias únicas para momentos especiales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="bg-orange-500 text-white p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="w-5 h-5" />
                  <span className="font-medium">{pkg.name}</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">${pkg.price}</span>
                  <span className="text-white/80">/noche</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Reservar Paquete
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            ¿Tienes alguna pregunta sobre nuestras promociones?
          </p>
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  );
}
