import { MapPin, Navigation, Cable, Building2, TreePine, Church, ShoppingBag, Plane } from 'lucide-react';

const nearbyPlaces = [
  { name: 'Teleférico Salta-San Bernardo', distance: '1.6 km', icon: Cable },
  { name: 'Estadio Padre Ernesto Martearena', distance: '2.2 km', icon: Building2 },
  { name: 'Parque 9 de Julio', distance: '2.2 km', icon: TreePine },
  { name: 'Catedral de Salta', distance: '2.3 km', icon: Church },
  { name: 'Centro Comercial El Palacio', distance: '2.3 km', icon: ShoppingBag },
  { name: 'Aeropuerto Martín Miguel de Güemes', distance: '10 km', icon: Plane },
];

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Ubicación
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            En el Corazón de Salta
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestra ubicación estratégica te permite acceder fácilmente a los principales atractivos turísticos de la ciudad.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.136!2d-65.402693!3d-24.8079531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3b8f0c7c3af%3A0x3a3c0f0c0c0c0c0c!2sAv.+Independencia+1001%2C+Salta%2C+Argentina!5e0!3m2!1ses!2s!4v1600000000000!5m2!1ses!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Hostal del Milagro"
              />
            </div>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                  <p className="text-gray-600 text-sm">
                    Avenida Independencia 1001<br />
                    4400 Salta, Argentina
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=-24.8079531,-65.402693"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-500 text-sm font-medium mt-3 hover:underline"
                  >
                    <Navigation className="w-4 h-4" />
                    Cómo llegar
                  </a>
                </div>
              </div>
            </div>

            {/* Nearby Places */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Lugares Cercanos</h3>
              <div className="space-y-3">
                {nearbyPlaces.map((place) => (
                  <div
                    key={place.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <place.icon className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-700">{place.name}</span>
                    </div>
                    <span className="text-orange-500 font-medium">{place.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
