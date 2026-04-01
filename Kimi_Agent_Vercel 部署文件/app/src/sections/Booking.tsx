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
      // ESTA ES LA LÍNEA QUE CONECTA CON RENDER
      const response = await fetch("https://hostal-milagro.onrender.com/reservar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('✅ ¡Reserva enviada a Render con éxito!');
        setFormData({ checkIn: '', checkOut: '', roomType: '', guests: '1', name: '', email: '', phone: '' });
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('❌ Error: El servidor en Render no responde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reservas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Reserva tu Estancia</h2>
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
                  <Select onValueChange={(v) => setFormData({ ...formData, roomType: v })}>
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
                  <Input placeholder="Tu nombre" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-orange-500 text-white py-6">
                {loading ? <Loader2 className="animate-spin" /> : 'Confirmar Reserva'}
              </Button>
            </form>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl h-fit">
            <h3 className="font-semibold mb-4">Resumen</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-green-600"><CheckCircle className="w-4 h-4"/> Sin cargos ocultos</div>
              <div className="flex items-center gap-2 text-green-600"><Shield className="w-4 h-4"/> Conexión segura con Render</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
