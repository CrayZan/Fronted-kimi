import { useState } from 'react';
import { Calendar, CheckCircle, Shield, CreditCard, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { toast } from 'sonner';

export default function Booking() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    roomType: '',
    guests: '1',
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // CONEXIÓN CON TU BACKEND EN RENDER
      const response = await fetch("https://hostal-milagro.onrender.com/reservar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('¡Reserva enviada con éxito!');
        setFormData({
          checkIn: '',
          checkOut: '',
          roomType: '',
          guests: '1',
          name: '',
          email: '',
          phone: '',
        });
      } else {
        throw new Error('Error en el servidor');
      }
    } catch (error) {
      toast.error('No se pudo conectar con Render. Verifica tu servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reservas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Reserva tu Estancia</h2>
              <p className="text-gray-600">Completa tus datos para enviarlos a nuestro sistema en Salta.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="checkIn">Fecha de Entrada</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="checkIn" type="date" className="pl-10" required value={formData.checkIn} onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkOut">Fecha de Salida</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="checkOut" type="date" className="pl-10" required value={formData.checkOut} onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Habitación</Label>
                  <Select onValueChange={(val) => setFormData({ ...formData, roomType: val })} value={formData.roomType}>
                    <SelectTrigger><SelectValue placeholder="Selecciona" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="twin">Twin - $18</SelectItem>
                      <SelectItem value="doble">Doble - $22</SelectItem>
                      <SelectItem value="familiar">Familiar - $32</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Huéspedes</Label>
                  <Select onValueChange={(val) => setFormData({ ...formData, guests: val })} value={formData.guests}>
                    <SelectTrigger><SelectValue placeholder="Personas" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 persona</SelectItem>
                      <SelectItem value="2">2 personas</SelectItem>
                      <SelectItem value="3">3 personas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input id="name" placeholder="Tu nombre" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="email" placeholder="Correo" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  <Input type="tel" placeholder="WhatsApp" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6">
                {loading ? <Loader2 className="animate-spin" /> : 'Confirmar Reserva'}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold mb-4">Resumen</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 text-green-600"><CheckCircle className="w-5 h-5" /> Cancelación gratuita</div>
                <div className="flex items-center gap-3 text-green-600"><Shield className="w-5 h-5" /> Conexión segura con Render</div>
                <div className="flex items-center gap-3 text-green-600"><CreditCard className="w-5 h-5" /> Sin cargos ocultos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
