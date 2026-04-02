import React from "react";
import { NosotrosHero, NosotrosEstrategia, NosotrosHistoria, NosotrosMetodologia, NosotrosLegal } from ".";

export const NosotrosContenedor = () => {
  return (
    <>
      <NosotrosHero />
      <NosotrosHistoria />
      <NosotrosEstrategia />
      <NosotrosMetodologia />
      <NosotrosLegal />
    </>
  );
};