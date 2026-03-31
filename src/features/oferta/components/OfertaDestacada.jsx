import React from "react";

import OfertaGrid from "./OfertaGrid";
import { programasData } from "@/data/ofertaData";

const OfertaDestacada = () => {
    const items = programasData.filter( (prog) => prog.isTop === true, );
    
    return (
        <>
            <OfertaGrid items={items} />
        </>
    )
};

export default OfertaDestacada;