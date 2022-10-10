import { Project, ProjectFilter } from '../models/app.model';
import { useDispatch, useSelector } from 'react-redux';
import ProjectItem from './ProjectItem';
import React from 'react';
import { RootState } from '../redux/reducers/rootReducer';
import { Row } from 'react-bootstrap';
import { setFilters } from '../redux/slices/projectSlice';

// Logic for showing projects based on filter
const getfilteredProjects = (
  projects: Project[],
  filter: ProjectFilter
): Project[] => {
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
    return projects;
  }
};

export default function ProjectList(): JSX.Element {
  const dispatch = useDispatch();

  const projects = useSelector((state: RootState): Project[] => getfilteredProjects(state.setProjects, state.setFilters));

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
