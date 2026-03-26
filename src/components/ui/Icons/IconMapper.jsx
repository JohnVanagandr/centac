import React from "react";
import { ICON_LIBRARY } from "@/components/ui/Icons/IconLibrary";

const IconMapper = ({ iconName, className = "w-6 h-6" }) => {  
  // 1. Buscamos el componente del ícono en nuestra librería
  const IconComponent = ICON_LIBRARY[iconName] || ICON_LIBRARY.gear;

  // 2. Retornamos el componente pasándole las clases de Tailwind
  return <IconComponent className={className} />;
};

export default IconMapper;
