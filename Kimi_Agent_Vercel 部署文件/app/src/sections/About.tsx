import { CheckCircle2, Heart, Users, MapPin } from 'lucide-react';

const features = [
  {
    icon: CheckCircle2,
    title: 'Calidad Garantizada',
    description: 'Hotel 3 estrellas con estándares de calidad verificados',
  },
  {
    icon: Heart,
    title: 'Atención Personalizada',
    description: 'Staff amable y servicial las 24 horas del día',
  },
  {
    icon: Users,
    title: 'Pet Friendly',
    description: 'Aceptamos mascotas sin costo adicional',
  },
  {
    icon: MapPin,
    title: 'Excelente Ubicación',
    description: 'Cerca de los principales atractivos turísticos',
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lobby.jpg"
                alt="Lobby del Hostal del Milagro"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm">Años de experiencia</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Bienvenido al Hostal del Milagro
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Ubicado en el corazón de Salta, el Hostal del Milagro es el refugio perfecto para quienes buscan disfrutar de la belleza de esta maravillosa provincia argentina. Nuestra ubicación estratégica en la Avenida Independencia 1001 te permite explorar fácilmente los principales atractivos de la ciudad.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Ofrecemos alojamiento confortable con terraza, recepción 24 horas, WiFi gratuito en todo el establecimiento y estacionamiento privado. Nuestras habitaciones están equipadas con aire acondicionado, TV con múltiples canales y baño privado.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
