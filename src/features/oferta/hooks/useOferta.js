import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { programasData } from "@/data/ofertaData";

export const useOferta = () => {
  const { slug } = useParams();

  const programa = useMemo(() => {
    return programasData.find((prog) => prog.slug === slug);
  }, [slug]);

  return {
    programa,
    slug,
    isValid: !!programa
  };
};