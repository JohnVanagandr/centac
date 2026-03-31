import React from "react";
import { Link } from "react-router-dom";
import IconMapper from "@/components/ui/Icons/IconMapper";
import Button from "@/components/ui/Navigation/Button";
import Badge from "@/components/ui/DataDisplay/Badge";

const CardOferta = ({ title, desc, iconName, slug, isTop, img, duration }) => {
  
  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group flex flex-col h-full">
      {/* Cabecera de Imagen */}
      <div className="h-56 overflow-hidden relative">
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          {/* GOLD: Usamos el oro para destacar que es un programa TOP */}
          {isTop && (
            <Badge variant="solid" intent="gold">
              Top
            </Badge>
          )}
          {/* PRIMARY: Usamos tu azul con el efecto Glassmorphism que creaste */}
          <Badge variant="glass" intent="primary">
            70% Práctica
          </Badge>
        </div>

        {/* NAVY: Superposición oscura para que los Badges se lean bien */}
        <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/10 transition-colors duration-500 z-10"></div>
        <img
          src={img}
          alt={`Imagen representativa de ${title}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Cuerpo de la Tarjeta */}
      <div className="p-6 flex flex-col flex-grow relative">
        {/* PRIMARY: El icono flotante reacciona en azul porque es interacción visual */}
        <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary text-2xl absolute -top-12 right-6 z-30 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {IconMapper({ iconName })}
        </div>

        {/* NAVY -> PRIMARY: El título cambia al azul de interacción al hacer hover */}
        <h4 className="font-display text-lg font-black text-navy mb-3 uppercase tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h4>

        {/* Tipografía consistente usando slate */}
        <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed font-body">
          {desc.length > 100 ? `${desc.substring(0, 110)}...` : desc}
        </p>

        {/* Pie de la Tarjeta */}
        <div className="border-t border-slate-100 pt-5 mt-auto flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm text-navy/70 font-display font-black uppercase tracking-widest">
            {/* BRAND: Un pequeño acento naranja para el icono de duración */}
            <svg
              className="w-4 h-4 text-brand"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{duration}</span>
          </div>

          {/* PRIMARY: Usamos el botón semántico. La clase shadow-brand fue eliminada 
              porque el componente Button ya inyecta shadow-primary/40 automáticamente */}
          <Button
            as={Link}
            to={`/oferta/${slug}`}
            intent="primary"
            size="md"
            className="w-full"
          >
            Saber más
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardOferta;
