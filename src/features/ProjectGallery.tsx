// imports
import React from 'react';
import { Row } from 'react-bootstrap';
import ProjectItem from './ProjectItem';
import { RootState } from '../redux/reducers/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { filterProjects } from './slices/projectSlice';
import { ProjectFilter } from './types';
import { Project } from './types';

// getfilteredProjects function
const getfilteredProjects = (projects: Project[], filter: ProjectFilter) => {
	switch (filter) {
		case ProjectFilter.ShowAll:
			return projects;
		case ProjectFilter.ShowCompleted:
			return projects.filter((t) => t.filtered);
		case ProjectFilter.ShowActive:
			return projects.filter((t) => !t.filtered);
		default:
			throw new Error('Unknown filter: ' + filter);
	}
};

// ProjectList function
export default function ProjectList() {
	const dispatch = useDispatch();

	const projects = useSelector((state: RootState) =>
		getfilteredProjects(state.setProjects, state.filterProjects)
	);

	return (
		<Row>
			{projects.map((project) => (
				<ProjectItem
					key={project.id}
					{...project}
					onClick={() => dispatch(filterProjects(project))}
				/>
			))}
		</Row>
	);
}
