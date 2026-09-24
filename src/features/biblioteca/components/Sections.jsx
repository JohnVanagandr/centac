import React from "react"; 

// 1. ORIGEN DE DATOS (Lista extendida basada en la referencia de la Biblioteca Virtual)
const basesDeDatos = [
  {
    id: 1,
    name: "Redalyc",
    description: "Red de Revistas Científicas de América Latina y el Caribe, España y Portugal. Un proyecto académico para la difusión en acceso abierto de la actividad científica editorial.",
    logo: "/biblioteca/logo_redalyc.png", // Asegúrate de guardar la imagen en public/images/biblioteca/
    url: "https://www.redalyc.org/"
  },
  {
    id: 2,
    name: "Biblioteca Virtual Banco de la República",
    description: "Colecciones digitales, archivos sonoros, interactivos, exposiciones y documentos históricos que conforman el patrimonio cultural colombiano.",
    logo: "/biblioteca/BV-BLANCO-618X176PX.svg",
    url: "https://www.banrepcultural.org/biblioteca-virtual"
  },
  {
    id: 3,
    name: "Dialnet",
    description: "Una de las mayores bases de datos de contenidos científicos en lenguas iberoamericanas, centrada fundamentalmente en los ámbitos de las Ciencias Humanas, Jurídicas y Sociales.",
    logo: "/biblioteca/dialnet.png",
    url: "https://dialnet.unirioja.es/"
  },
  {
    id: 4,
    name: "DOAJ",
    description: "Directory of Open Access Journals es un directorio en línea curado por la comunidad que indexa y proporciona acceso a revistas de alta calidad, de acceso abierto y revisadas por pares.",
    logo: "/biblioteca/doaj.png",
    url: "https://doaj.org/"
  },
  {
    id: 5,
    name: "SciELO",
    description: "Scientific Electronic Library Online. Biblioteca electrónica que abarca una colección seleccionada de revistas científicas iberoamericanas.",
    logo: "/biblioteca/logo-scielo-portal-no-label.svg",
    url: "https://scielo.org/"
  },
  {
    id: 6,
    name: "BioMed Central",
    description: "Pionero en publicaciones de acceso abierto que publica un portafolio de revistas revisadas por pares en ciencia, tecnología y medicina.",
    logo: "/biblioteca/bmc-logo-45f106ad03.svg",
    url: "https://www.biomedcentral.com/"
  },
  {
    id: 7,
    name: "arXiv",
    description: "Archivo en línea de acceso gratuito y repositorio de distribución para artículos científicos preimpresos en matemáticas, física, informática y campos afines.",
    logo: "/biblioteca/arxiv-logo-primary-light.svg",
    url: "https://arxiv.org/"
  },
  {
    id: 8,
    name: "SpringerOpen",
    description: "El portafolio de revistas de acceso abierto de Springer cubre todas las áreas de la ciencia, la tecnología, la medicina, las humanidades y las ciencias sociales.",
    logo: "/biblioteca/springer_logo-33a769fac2.svg",
    url: "https://www.springeropen.com/"
  },
  {
    id: 9,
    name: "Eurostat",
    description: "Oficina Estadística de la Unión Europea. Proporciona estadísticas de alta calidad a nivel europeo que permiten comparaciones entre países y regiones.",
    logo: "/biblioteca/estat-logo-horizontal.svg",
    url: "https://ec.europa.eu/eurostat"
  },
  {
    id: 10,
    name: "ERIC",
    description: "Education Resources Information Center. Base de datos exhaustiva y de fácil uso sobre investigación e información educativa, patrocinada por el IES.",
    logo: "/biblioteca/eric_large.png",
    url: "https://eric.ed.gov/"
  },
  {
    id: 11,
    name: "CEPAL",
    description: "Repositorio de la Comisión Económica para América Latina y el Caribe, con acceso a publicaciones, investigaciones y estadísticas regionales.",
    logo: "/biblioteca/cepal.png",
    url: "https://repositorio.cepal.org/"
  },
  {
    id: 12,
    name: "PubMed",
    description: "Motor de búsqueda de libre acceso a la base de datos MEDLINE de citaciones y resúmenes de artículos de investigación biomédica.",
    logo: "/biblioteca/pubmed-logo-white.svg",
    url: "https://pubmed.ncbi.nlm.nih.gov/"
  },
  {
    id: 13,
    name: "Cogprints",
    description: "Archivo electrónico para preprints y postprints en psicología, neurociencia, lingüística y diversas áreas de las ciencias de la computación.",
    logo: "/biblioteca/cogprints.jpg",
    url: "https://cogprints.org/"
  },
  {
    id: 14,
    name: "HAPI",
    description: "Hispanic American Periodicals Index. Información bibliográfica de revistas sobre América Latina, el Caribe y latinos en Estados Unidos.",
    logo: "/biblioteca/hapi-ucla.png",
    url: "https://hapi.ucla.edu/"
  },
  {
    id: 15,
    name: "EUR-Lex",
    description: "Acceso en línea gratuito a la legislación de la Unión Europea y otros documentos públicos de la UE en sus 24 lenguas oficiales.",
    logo: "/biblioteca/eur-lex-europa.png",
    url: "https://eur-lex.europa.eu/"
  }
];
// 2. COMPONENTE DE TARJETA INDIVIDUAL
const DatabaseCard = ({ db }) => (
  <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
    
    {/* Contenedor del Logo (Altura fija para mantener la alineación de la cuadrícula) */}
    <div className="h-20 w-full flex items-center justify-center mb-6">
      <img 
        src={db.logo} 
        alt={`Logotipo de ${db.name}`} 
        className="max-h-full max-w-[80%] object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
      />
    </div>

    {/* Descripción */}
    <p className="text-sm font-body text-slate-500 leading-relaxed flex-grow mb-8 line-clamp-4">
      {db.description}
    </p>

    {/* Botón de Acción */}
    <a
      href={db.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border-2 border-slate-200 text-slate-600 font-display font-bold text-[11px] uppercase tracking-widest hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 w-full sm:w-auto"
    >
      Ingresar a {db.name}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
);

// 3. COMPONENTE DE PÁGINA PRINCIPAL
const Sections = () => {
  return (
      <section className="py-20 bg-slate-50/50 relative overflow-hidden">
        
        {/* Decoración de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Encabezado de la Sección */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-black text-3xl md:text-4xl text-navy mb-4">
              Bases de Datos de <span className="text-brand">Acceso Libre</span>
            </h2>
            <p className="text-slate-500 font-body text-lg">
              Explora nuestra selección curada de repositorios y revistas científicas globales para potenciar tu investigación académica.
            </p>
          </div>

          {/* Cuadrícula de Bases de Datos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {basesDeDatos.map((db) => (
              <DatabaseCard key={db.id} db={db} />
            ))}
          </div>

        </div>
      </section>
  );
};

export default Sections;