import {
  Wifi,
  Car,
  Clock,
  UtensilsCrossed,
  Wind,
  PawPrint,
  Coffee,
  Shield,
  ArrowUp,
  Trees,
  Key,
  MapPinned,
} from 'lucide-react';

const services = [
  {
    icon: Wifi,
    title: 'WiFi Gratuito',
    description: 'Conexión de alta velocidad en todo el establecimiento',
  },
  {
    icon: Car,
    title: 'Estacionamiento',
    description: 'Estacionamiento privado disponible por $2 USD/día',
  },
  {
    icon: Clock,
    title: 'Recepción 24h',
    description: 'Atención personalizada las 24 horas del día',
  },
  {
    icon: UtensilsCrossed,
    title: 'Cocina Compartida',
    description: 'Cocina equipada para uso de los huéspedes',
  },
  {
    icon: Wind,
    title: 'Aire Acondicionado',
    description: 'Todas las habitaciones cuentan con A/C y calefacción',
  },
  {
    icon: PawPrint,
    title: 'Pet Friendly',
    description: 'Aceptamos mascotas sin costo adicional',
  },
  {
    icon: Coffee,
    title: 'Desayuno',
    description: 'Servicio de desayuno continental disponible',
  },
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'Personal de seguridad y cámaras de vigilancia',
  },
  {
    icon: ArrowUp,
    title: 'Ascensor',
    description: 'Acceso a todos los pisos para mayor comodidad',
  },
  {
    icon: Trees,
    title: 'Terraza',
    description: 'Hermosa terraza con vistas a la ciudad',
  },
  {
    icon: Key,
    title: 'Acceso con Llave',
    description: 'Sistema de acceso seguro a las habitaciones',
  },
  {
    icon: MapPinned,
    title: 'Información Turística',
    description: 'Asistencia para excursiones y actividades',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Todo lo que Necesitas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En Hostal del Milagro nos preocupamos por tu comodidad. Disfruta de todos nuestros servicios incluidos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-orange-50 transition-colors group"
            >
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                <service.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Schedule Info */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-orange-400 font-semibold mb-2">Check-in</div>
              <div className="text-2xl font-bold">12:00 - 23:59</div>
            </div>
            <div className="text-center">
              <div className="text-orange-400 font-semibold mb-2">Check-out</div>
              <div className="text-2xl font-bold">Hasta 10:00</div>
            </div>
            <div className="text-center">
              <div className="text-orange-400 font-semibold mb-2">Recepción</div>
              <div className="text-2xl font-bold">24 horas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
