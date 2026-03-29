import React from "react";
import { Reveal } from "@/components/utils";
import Button from "@/components/ui/Navigation/Button"; // Asegura la ruta de nuestro botón

const BannerFinanciacion = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <Reveal className="max-w-4xl mx-auto px-6 text-center">
        {/* 1. Kicker / Etiqueta (Naranja Brand para atraer el ojo) */}
        <span className="font-display text-sm font-black text-brand uppercase tracking-widest mb-3 block">
          Financiación y Becas
        </span>

        {/* 2. Título Principal (Navy Estructural y Primary para resaltar) */}
        <h2 className="font-display text-4xl md:text-5xl font-black text-navy mb-6 tracking-tight">
          Invierte en tu futuro,{" "}
          <span className="text-primary">paga a tu ritmo.</span>
        </h2>

        {/* 3. Descripción (Slate para lectura cómoda) */}
        <p className="text-slate-600 text-lg font-body mb-10 max-w-2xl mx-auto leading-relaxed">
          Contamos con aliados bancarios para créditos educativos. Financiación
          fácil, rápida y 100% digital solo con tu cédula.
        </p>

        {/* 4. El CTA que faltaba (Brand porque es la meta de conversión de esta sección) */}
        <div className="mb-16">
          <Button
            intent="brand"
            size="lg"
            className="shadow-brand/30 hover:shadow-brand/50"
          >
            <span className="material-symbols-rounded">chat</span>
            Chatea con una asesora
          </Button>
        </div>

        {/* 5. Contenedor de Aliados Financieros (Mantenemos tu genial truco de grayscale) */}
        <div className="pt-10 border-t border-slate-200/60">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            Nuestros Aliados Financieros
          </p>

          <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
            {/* Aliado 1: Sistecrédito (Simulación del color original en hover) */}
            <div className="text-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer opacity-60 hover:opacity-100">
              <div className="font-black text-3xl text-emerald-500 tracking-tighter">
                sistecrédito
              </div>
              <div className="text-[10px] font-bold text-emerald-700/60 uppercase tracking-widest mt-0.5">
                lo hacemos posible
              </div>
            </div>

            {/* Aliado 2: Addi (Simulación del color original en hover) */}
            <div className="font-black text-5xl text-blue-500 tracking-tight grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer opacity-60 hover:opacity-100">
              Addi
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default BannerFinanciacion;
