import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight, PhoneCall } from 'lucide-react';
import { Link } from '@/components/ui/Navigation/Link'; // 🌟 Importamos nuestro componente Link unificado

export const CanalesContacto = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Encabezado */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 tracking-tight">
            Canales de atención
          </h2>
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
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">ASESORAS COMERCIALES</p>
                <div className="grid grid-cols-2 gap-4">
                  {['318 415 2207', '316 523 5447', '318 717 0911', '317 432 3339'].map((num, i) => (
                    <a key={i} href={`tel:+57${num.replace(/\s/g, '')}`} className="flex items-center gap-2 py-3 px-4 bg-slate-50 hover:bg-brand hover:text-white text-navy font-semibold rounded-xl transition-colors group cursor-pointer border border-slate-100">
                      <PhoneCall size={16} className="text-brand group-hover:text-white" />
                      <span className="text-sm md:text-base">{num}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Administración y Cartera */}
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">ADMINISTRACIÓN Y CARTERA</p>
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
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">CORREO ELECTRÓNICO</p>
                  <a href="mailto:info@centac.edu.co" className="inline-flex items-center gap-2 text-xl font-bold text-navy hover:text-brand transition-colors">
                    info@centac.edu.co <ArrowUpRight size={20} className="text-brand" />
                  </a>
                </div>
                
                {/* Redes Sociales con componente Link */}
                <div className="space-y-3">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">REDES SOCIALES</p>
                  <p className="text-sm text-slate-600">¡Conéctate con CENTAC!</p>
                  
                  <div className="flex flex-wrap gap-3 pt-2">
                    
                    {/* Instagram */}
                    <Link
                      href="https://www.instagram.com/centaccol/"
                      variant="social"
                      size="md"
                      isExternal
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.778 6.98 6.978 1.28.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </Link>

                    {/* Facebook */}
                    <Link
                      href="https://www.facebook.com/Centaccol/"
                      variant="social"
                      size="md"
                      isExternal
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </Link>

                    {/* TikTok */}
                    <Link
                      href="https://www.tiktok.com/@centaccol"
                      variant="social"
                      size="md"
                      isExternal
                      aria-label="TikTok"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </Link>

                    {/* YouTube */}
                    <Link
                      href="https://www.youtube.com/@CentacCol/shorts"
                      variant="social"
                      size="md"
                      isExternal
                      aria-label="YouTube"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </Link>

                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* BLOQUE 3: PRESENCIAL (Ocupa las 12 columnas abajo, diseño anclado/físico) */}
          <div className="lg:col-span-12 bg-navy rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
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