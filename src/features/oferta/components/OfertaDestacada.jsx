import React from "react";

import OfertaGrid from "./OfertaGrid";
import { Spinner } from "@/components/ui/Feedback";
import { useFeaturedOfertas } from '@/features/oferta/hooks/useOfertas';

const OfertaDestacada = () => {
// Solo pedimos las que nos interesan para el Home
  const { featuredOfertas, loading } = useFeaturedOfertas();
  if (loading) return <Spinner intent="brand" />;
    return (
        <>
            <OfertaGrid items={featuredOfertas} />
        </>
    )
};

export default OfertaDestacada;