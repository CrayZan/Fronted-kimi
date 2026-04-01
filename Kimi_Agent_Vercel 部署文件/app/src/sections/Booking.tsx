import { useState } from 'react';
import { Calendar, CheckCircle, Shield, CreditCard, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
        toast.success('¡Reserva enviada a Render con éxito! Te contactaremos pronto.');
        // Limpiar formulario
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
      console.error("Error:", error);
      toast.error('No se pudo conectar con el servidor. Revisa si Render está activo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reservas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Reserva tu Estancia
              </h2>
              <p className="text-gray-600">
                Completa tus datos y nos pondremos en contacto para confirmar tu llegada al Hostal del Milagro.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="checkIn">Fecha de Entrada</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="checkIn"
                      type="date"
                      className="pl-10"
                      required
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkOut">Fecha de Salida</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="checkOut"
                      type="date"
                      className="pl-10"
                      required
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Tipo de Habitación</Label>
                  <Select 
                    onValueChange={(val) => setFormData({ ...formData, roomType: val })}
                    value={formData.roomType}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona habitación" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="twin">Habitación Twin - $18/noche</SelectItem>
                      <SelectItem value="doble">Habitación Doble - $22/noche</SelectItem>
                      <SelectItem value="familiar">Habitación Familiar - $32/noche</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Huéspedes</Label>
                  <Select 
                    onValueChange={(val) => setFormData({ ...formData, guests: val })}
                    value={