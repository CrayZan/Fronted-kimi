import { Wifi, Tv, Wind, Plus, Users, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const rooms = [
  {
    id: 1,
    name: 'Habitación Twin',
    description: 'Dos camas individuales, perfecta para amigos o compañeros de viaje.',
    price: 18,
    capacity: 2,
    size: '12 m²',
    available: 4,
    image: '/habitacion-twin.jpg',
    amenities: ['WiFi', 'TV Cable', 'Aire Acondicionado'],
  },
  {
    id: 2,
    name: 'Habitación Doble',
    description: 'Cama matrimonial cómoda, ideal para parejas.',
    price: 22,
    capacity: 2,
    size: '12 m²',
    available: 3,
    image: '/habitacion-doble.jpg',
    amenities: ['WiFi', 'TV Cable', 'Aire Acondicionado'],
  },
  {
    id: 3,
    name: 'Habitación Familiar',
    description: 'Espaciosa habitación con cama matrimonial y cama individual.',
    price: 32,
    capacity: 3,
    size: '18 m²',
    available: 2,
    image: '/habitacion-familiar.jpg',
    amenities: ['WiFi', 'TV Cable', 'Aire Acondicionado'],
  },
];

export default function Rooms() {
  const scrollToBooking = (_roomType: string) => {
    const element = document.querySelector('#reservas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="habitaciones" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Nuestras Habitaciones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Encuentra tu Espacio Perfecto
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contamos con 9 habitaciones cómodas y bien equipadas para hacer de tu estancia una experiencia inolvidable.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-56 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900 hover:bg-white">
                  {room.available} disponibles
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Price */}
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-gray-500 text-sm">$</span>
                  <span className="text-3xl font-bold text-orange-500">{room.price}</span>
                  <span className="text-gray-500 text-sm">/noche</span>
                </div>

                {/* Capacity & Size */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{room.capacity} personas</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    <span>{room.size}</span>
                  </div>
                </div>

                {/* Name & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{room.description}</p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
                    >
                      {amenity === 'WiFi' && <Wifi className="w-3 h-3" />}
                      {amenity === 'TV Cable' && <Tv className="w-3 h-3" />}
                      {amenity === 'Aire Acondicionado' && <Wind className="w-3 h-3" />}
                      <span>{amenity}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    <Plus className="w-3 h-3" />
                    <span>2</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Ver Detalles
                  </Button>
                  <Button
                    onClick={() => scrollToBooking(room.name)}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Reservar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
