import React, { useEffect, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { programasData } from "../../data/ofertaData";

// Importamos nuestras piezas de Lego
import {
  CourseHero,
  CourseAbout,
  CourseLearnings,
  CourseEnrollment,
  CourseModules,
  CourseInstructor,
  CourseProfiles,
  CourseTestimonials,
} from "../../components/sections/Public/CourseDetail";
import BannerFinanciacion from "../../components/sections/Public/Shared/BannerFinanciacion";

const OfertaDetalle = () => {
  // 1. Extraemos el 'slug' de la URL (ej: 'mecanica-de-motos')
  const { slug } = useParams();

  // 2. Buscamos el programa en nuestra base de datos simulada
  // Usamos useMemo para que no vuelva a buscar si el componente se re-renderiza
  const programaInfo = useMemo(() => {
    return programasData.find((prog) => prog.slug === slug);
  }, [slug]);

  // 3. Scroll al inicio al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // 4. Si el usuario escribe una URL de un curso que no existe, lo mandamos al catálogo
  if (!programaInfo) {
    return <Navigate to="/ofertas" replace />;
  }

  // 5. Renderizamos la vista armando el rompecabezas
  return (
    <main className="bg-white min-h-screen">
      {/* Sección 1: Cabecera Full-Bleed */}
      <CourseHero data={programaInfo} />

      {/* Sección 2: Acerca del programa (Tus bloques azul y naranja) */}
      <CourseAbout
        desc={programaInfo.desc}
        highlights={programaInfo.aboutHighlights}
      />

      <CourseLearnings learnings={programaInfo.learnings} />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-10">
              <CourseModules modules={programaInfo.modules} />
            </div>
            <div className="lg:col-span-4 space-y-8 sticky top-28 h-fit">
              {/* 1. Tarjeta del Instructor */}
              <CourseInstructor instructor={programaInfo.instructor} />

              {/* 2. Tarjeta Azul Oscuro de Perfiles */}
              <CourseProfiles profiles={programaInfo.profiles} />

              {/* 3. Lista de Testimonios */}
              <CourseTestimonials testimonials={programaInfo.testimonials} />
            </div>
          </div>
        </div>
      </section>

      <CourseEnrollment />

      <BannerFinanciacion />
    </main>
  );
};

export default OfertaDetalle;
