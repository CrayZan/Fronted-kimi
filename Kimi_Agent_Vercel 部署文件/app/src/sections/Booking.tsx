import { useState } from 'react';
import { CheckCircle, Shield, CreditCard, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button.tsx';
import { Input } from '../components/ui/input.tsx';
import { Label } from '../components/ui/label.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select.tsx';
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
      const response = await fetch("https://hostal-milagro.onrender.com/reservar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('¡Reserva enviada con éxito!');
        setFormData({ checkIn: '', checkOut: '', roomType: '', guests: '1', name: '', email: '', phone: '' });
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Error de conexión con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reservas" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-slate-900">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4 italic text-orange-600">Reserva tu Estancia</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Entrada</Label>
                  <Input type="date" required value={formData.checkIn} onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Salida</Label>
                  <Input type="date" required value={formData.checkOut} onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Habitación</Label>
                  <Select onValueChange={(val) => setFormData({ ...formData, roomType: val })}>
                    <SelectTrigger><SelectValue placeholder="Tipo" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="twin">Twin - $18</SelectItem>
                      <SelectItem value="doble">Doble - $22</SelectItem>
                      <SelectItem value="familiar">Familiar - $32</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Nombre</Label>
                  <Input placeholder="Tu nombre completo" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg">
                {loading ? <Loader2 className="animate-spin" /> : 'Confirmar Reserva Ahora'}
              </Button>
            </form>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 h-fit">
            <h3 className="font-bold mb-4 text-lg">Tu Seguridad</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-2 text-green-700 font-medium"><CheckCircle className="w-5 h-5"/> Confirmación inmediata</div>
              <div className="flex items-center gap-2 text-green-700 font-medium"><Shield className="w-5 h-5"/> Datos encriptados</div>
              <div className="flex items-center gap-2 text-green-700 font-medium"><CreditCard className="w-5 h-5"/> Pago en el establecimiento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
