import React from "react";
import { 
  CourseHero, CourseAbout, CourseLearnings, 
  CourseModules, CourseInstructor, CourseProfiles, 
  CourseTestimonials, CourseEnrollment // 🚀 Lo traemos del barril
} from "./";
import { Banner } from "@/components/common";

const OfertaDetalleView = ({ data }) => {
  return (
    <main className="bg-white min-h-screen">
      <CourseHero data={data} />
      
      <CourseAbout desc={data.desc} highlights={data.aboutHighlights} />
      
      <CourseLearnings learnings={data.learnings} />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* Columna Izquierda */}
            <div className="lg:col-span-8 space-y-10">
              <CourseModules modules={data.modules} />
            </div>

            {/* Columna Derecha: Sidebar */}
            <div className="lg:col-span-4 space-y-8 sticky top-28 h-fit">
              <CourseInstructor instructor={data.instructor} />
              <CourseProfiles profiles={data.profiles} />
              <CourseTestimonials testimonials={data.testimonials} />
            </div>

          </div>
        </div>
      </section>

      {/* 🚀 Inyectamos tu diseño de inscripción al final (o donde prefieras) */}
      <CourseEnrollment programaSlug={data.slug} />

      <Banner />

    </main>
  );
};

export default OfertaDetalleView;