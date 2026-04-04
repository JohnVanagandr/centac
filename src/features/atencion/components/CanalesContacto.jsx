import React from 'react';
import { MapPin, Phone, Mail, AtSign, ArrowUpRight, PhoneCall } from 'lucide-react';

export const CanalesContacto = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Encabezado */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 tracking-tight">
            Canales de atención
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Gran disposición para atender tus consultas y brindarte información u orientación de manera oportuna.
          </p>
        </div>

        {/* Bento Grid Asimétrico */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* BLOQUE 1: LÍNEAS TELEFÓNICAS (Ocupa 8 columnas, diseño utilitario) */}
          <div className="lg:col-span-8 bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/40">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 bg-brand/10 text-brand rounded-2xl">
                <Phone size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-navy">Líneas telefónicas</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Asesoras Comerciales */}
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Asesoras Comerciales</p>
                <div className="grid grid-cols-2 gap-4">
                  {['318 717 0911', '317 432 3339', '318 415 2207', '316 523 5447'].map((num, i) => (
                    <a key={i} href={`tel:+57${num.replace(/\s/g, '')}`} className="flex items-center gap-2 py-3 px-4 bg-slate-50 hover:bg-brand hover:text-white text-navy font-semibold rounded-xl transition-colors group cursor-pointer border border-slate-100">
                      <PhoneCall size={16} className="text-brand group-hover:text-white" />
                      <span className="text-sm md:text-base">{num}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Administración y Cartera */}
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Administración y Cartera</p>
                <a href="tel:+573164471656" className="inline-flex flex-col gap-2 py-4 px-6 bg-navy text-white rounded-2xl hover:bg-navy/90 transition-colors cursor-pointer group shadow-lg shadow-navy/20 w-full md:w-auto">
                  <div className="flex items-center gap-3">
                    <PhoneCall size={20} className="text-brand" />
                    <span className="text-2xl font-black tracking-wide">316 447 1656</span>
                  </div>
                  <span className="text-sm text-slate-300 font-medium ml-8">Línea directa administrativa</span>
                </a>
              </div>
            </div>
          </div>

          {/* BLOQUE 2: ATENCIÓN VIRTUAL (Ocupa 4 columnas, diseño digital/interactivo) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-brand/10 to-brand/5 rounded-[2.5rem] p-8 md:p-12 border border-brand/20 flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-white text-brand rounded-2xl shadow-sm">
                  <Mail size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold text-navy">Virtual</h3>
              </div>

              <div className="space-y-8">
                {/* Correo */}
                <div className="space-y-2">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Correo Electrónico</p>
                  <a href="mailto:info@centac.edu.co" className="inline-flex items-center gap-2 text-xl font-bold text-navy hover:text-brand transition-colors">
                    info@centac.edu.co <ArrowUpRight size={20} className="text-brand" />
                  </a>
                </div>
                
                {/* Redes Sociales */}
                <div className="space-y-2">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Redes Sociales</p>
                  <a href="#" className="inline-flex items-center gap-3 text-xl font-bold text-navy hover:text-brand transition-colors">
                    <AtSign size={20} className="text-brand" /> centaccol
                  </a>
                  <p className="text-sm text-slate-600 mt-2">¡Conéctate con CENTAC!</p>
                </div>
              </div>
            </div>
          </div>

          {/* BLOQUE 3: PRESENCIAL (Ocupa las 12 columnas abajo, diseño anclado/físico) */}
          <div className="lg:col-span-12 bg-navy rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
            {/* Decoración de fondo de mapa abstracta */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/4"></div>

            <div className="relative z-10 flex items-center gap-6">
              <div className="p-5 bg-brand text-navy rounded-2xl">
                <MapPin size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Sede Presencial</h3>
                <p className="text-lg text-slate-300">Visítanos para una atención personalizada.</p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col md:text-right">
              <p className="text-3xl font-black text-brand mb-1">Cra 33a #18-28</p>
              <p className="text-xl text-white font-medium mb-1">San Alonso</p>
              <p className="text-slate-400">Bucaramanga, Santander</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};