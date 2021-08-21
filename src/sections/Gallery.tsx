// imports
import React from 'react';
import SetProjects from '../components/SetProjects';
import ProjectGallery from '../components/ProjectGallery';
import ProjectFilters from '../components/ProjectFilters';

// Gallery
const Gallery: React.FC = () => {
	return (
		<React.Fragment>
			<ProjectFilters />
			<ProjectGallery />
			<SetProjects />
		</React.Fragment>
	);
};

// EXPORT Gallery
Gallery.displayName = 'Gallery';
export default Gallery;