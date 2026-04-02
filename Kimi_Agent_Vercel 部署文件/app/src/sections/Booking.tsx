import { useState, useEffect } from 'react';
import { CheckCircle, Shield, CreditCard, Loader2, Info } from 'lucide-react';
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

const ROOM_PRICES: Record<string, number> = {
  twin: 18,
  doble: 22,
  familiar: 32
};

export default function Booking() {
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deposit, setDeposit] = useState(0);

  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    roomType: '',
    guests: '1',
    name: '',
    email: '',
    phone: '',
  });

  // Cálculo automático del 30%
  useEffect(() => {
    if (formData.roomType && formData.checkIn && formData.checkOut) {
      const start = new Date(formData.checkIn);
      const end = new Date(formData.checkOut);
      const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      
      if (days > 0) {
        const total = days * ROOM_PRICES[formData.roomType];
        setTotalPrice(total);
        setDeposit(total * 0.30); // Calculamos el 30%
      }
    }
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://hostal-milagro.onrender.com/create_preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          amount: deposit, // Enviamos el monto de la seña
          title: `Reserva Hostal Milagro - ${formData.roomType}`
        }),
      });

      const data = await response.json();

      if (data.init_point) {
        // Redirigir a Mercado Pago
        window.location.href = data.init_point;
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Error de conexión. Verifica si el servidor está activo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reservas" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-slate-900">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4 italic text-orange-600">Reserva con Seña del 30%</h2>
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
                  <Label>WhatsApp</Label>
                  <Input placeholder="Ej: +54 387..." required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
              </div>

              {totalPrice > 0 && (
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <div className="flex justify-between mb-2">
                    <span>Total Estancia:</span>
                    <span className="font-bold">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-orange-700 font-bold text-lg">
                    <span>Seña a pagar (30%):</span>
                    <span>${deposit.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-orange-600 mt-2 flex items-center gap-1">
                    <Info className="w-3 h-3"/> Serás redirigido a Mercado Pago para completar el pago.
                  </p>
                </div>
              )}

              <Button type="submit" disabled={loading || totalPrice === 0} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg">
                {loading ? <Loader2 className="animate-spin" /> : 'Pagar Seña y Reservar'}
              </Button>
            </form>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 h-fit">
            <h3 className="font-bold mb-4 text-lg">Resumen de Reserva</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-2 text-green-700 font-medium"><CheckCircle className="w-5 h-5"/> Pago seguro con Mercado Pago</div>
              <div className="flex items-center gap-2 text-green-700 font-medium"><Shield className="w-5 h-5"/> Confirmación automática</div>
              <div className="flex items-center gap-2 text-green-700 font-medium"><CreditCard className="w-5 h-5"/> El resto se paga al llegar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
