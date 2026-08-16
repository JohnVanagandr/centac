import React from 'react';

export const ProgramaVideo = ({ videoUrl }) => {
  if (!videoUrl) return null;

  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  if (!videoId) return null;

  return (
    <div id="video-promocional" className="mt-16 mb-12 animate-in fade-in duration-700">
      <div className="text-center mb-8">
        <h3 className="font-display font-black text-2xl md:text-3xl text-navy uppercase tracking-tight">
          Conoce más sobre <span className="text-brand">el programa</span>
        </h3>
        <p className="text-slate-500 mt-2 font-body text-sm max-w-2xl mx-auto">
          Descubre en detalle lo que tenemos preparado para ti y cómo este programa impulsará tu futuro profesional.
        </p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-[2rem] overflow-hidden shadow-2xl shadow-navy/20 border-4 border-white">
        <iframe
          className="absolute top-0 left-0 w-full h-full bg-slate-100"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title="Video de presentación del programa"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};