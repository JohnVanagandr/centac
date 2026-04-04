import React from "react";

import OfertaGrid from "./OfertaGrid";
import { ofertaData } from "@/data/ofertaData";

const OfertaDestacada = () => {
    const items = ofertaData.filter( (prog) => prog.isTop === true, );
    
    return (
        <>
            <OfertaGrid items={items} />
        </>
    )
};

export default OfertaDestacada;