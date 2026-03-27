import React from "react";
import { Link } from "react-router-dom"; // Importamos el enrutador
import IconMapper from "@/components/ui/Icons/IconMapper";
import { Button } from "@/components/ui/Navigation";
import { Badge } from "@/components/ui/DataDisplay";

const CardOferta = ({ programa }) => {    
  const { title, desc, iconName, slug, isTop, img, duration } = programa;  
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group flex flex-col h-full">
      <div className="h-56 overflow-hidden relative">
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          {isTop && <Badge variant="subtle" intent="neutral">Top</Badge>}
           <Badge variant="glass" intent="neutral">70% Práctica</Badge>
        </div>
        <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/10 transition-colors duration-500 z-10"></div>
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow relative">
        <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-brand text-2xl absolute -top-12 right-6 z-30 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
          {IconMapper({ iconName })}
        </div>

        <h4 className="font-display text-lg font-black text-navy mb-3 uppercase group-hover:text-brand transition-colors">
          {title}
        </h4>

        <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
          {desc.length > 100 ? `${desc.substring(0, 120)}...` : desc}
        </p>

        <div className="border-t border-gray-100 pt-5 mt-auto flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm text-navy/60 font-display font-black uppercase tracking-tight">
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

          <Button
            as={Link}
            to={`/oferta/${slug}`}
            intent="primary"
            size="md"
            className="w-full justify-center shadow-brand"
          >
            Saber más
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardOferta;
