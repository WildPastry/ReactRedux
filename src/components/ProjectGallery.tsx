// imports
import React from 'react';
import { Row } from 'react-bootstrap';
import ProjectItem from './ProjectItem';
import { RootState } from '../redux/reducers/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../redux/slices/projectSlice';
import { ProjectFilter } from '../types';
import { Project } from '../types';

// getfilteredProjects function
const getfilteredProjects = (projects: Project[], filter: ProjectFilter) => {
	switch (filter) {
		case ProjectFilter.ShowAll:
			return projects;
		case ProjectFilter.ShowApps:
			return projects.filter((proj) => proj.type.indexOf('APP') >= 0);
		case ProjectFilter.ShowBranding:
			return projects.filter((proj) => proj.type.indexOf('BRANDING') >= 0);
		case ProjectFilter.ShowGraphic:
			return projects.filter((proj) => proj.type.indexOf('GRAPHIC') >= 0);
		case ProjectFilter.ShowMarketing:
			return projects.filter((proj) => proj.type.indexOf('MARKETING') >= 0);
		case ProjectFilter.ShowWebsites:
			return projects.filter((proj) => proj.type.indexOf('WEBSITE') >= 0);
		default:
			throw new Error('Unknown filter: ' + filter);
	}
};

// const filter = 'nature';
// const filteredResult = initialState.filter((item) => {
//     return (item.tags.indexOf(filter) >= 0);
// });

// ProjectList function
export default function ProjectList() {
	const dispatch = useDispatch();

	const projects = useSelector((state: RootState) =>
		getfilteredProjects(state.setProjects, state.setFilters)
	);

	return (
		<Row>
			{projects.map((project) => (
				<ProjectItem
					key={project.id}
					{...project}
					onClick={() => dispatch(setFilters(project))}
				/>
			))}
		</Row>
	);
}
