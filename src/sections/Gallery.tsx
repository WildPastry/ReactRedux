import ProjectFilters from "../components/ProjectFilters";
import ProjectGallery from "../components/ProjectGallery";
import React from "react";
import SetProjects from "../components/SetProjects";

// Gallery
const Gallery: React.FC = () => {
  return (
    <section aria-label="Gallery Section">
      <ProjectFilters />
      <ProjectGallery />
      <SetProjects />
    </section>
  );
};

// EXPORT Gallery
Gallery.displayName = "Gallery";
export default Gallery;
