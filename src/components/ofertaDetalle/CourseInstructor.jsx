import React from "react";

const CourseInstructor = ({ instructor }) => {
  if (!instructor) return null;

  // Obtenemos las iniciales para el avatar
  const initials = instructor.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2);

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg shadow-gray-200/40 text-center group hover:border-brand/30 transition-colors">
      <div className="w-24 h-24 bg-navy rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-black shadow-inner group-hover:bg-brand transition-colors duration-300">
        {initials}
      </div>
      <h4 className="font-display font-black text-navy text-xl mb-1">
        {instructor.name}
      </h4>
      <div className="w-12 h-1 bg-brand mx-auto rounded-full mb-3"></div>
      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
        Instructor Titular
      </p>
      <p className="text-gray-600 text-sm font-medium">{instructor.role}</p>
    </div>
  );
};

export default CourseInstructor;
