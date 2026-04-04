import React,{useState, useEffect} from "react";
import { Navigate } from "react-router-dom";
import { useOfertas } from "../hooks/useOfertas";
import { useParams } from "react-router-dom";
import OfertaDetalleView from "./OfertaDetalleView";
import { Spinner, Placeholder } from "@/components/ui/Feedback";

const OfertaDetalleContenedor = () => {
  const { slug } = useParams();
  const { getOfertaBySlug } = useOfertas();
  const [oferta, setOferta] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      setLoading(true);
      const data = await getOfertaBySlug(slug);
      setOferta(data);
      setLoading(false);
    };
    cargarDatos();
  }, [slug, getOfertaBySlug]);

  if (loading){
    return (
        <div className="flex flex-col items-center justify-center py-20">
          <Spinner size="lg" intent="primary" />
          <p className="mt-4 text-slate-500 font-medium">Cargando oferta educativa...</p>
        </div>
      );
  } 

  if (!oferta) return <Placeholder title="Oferta no encontrada" description="Lo sentimos, el programa académico que buscas no existe o fue movido." />;

  return <OfertaDetalleView data={oferta} />;
};

export default OfertaDetalleContenedor;