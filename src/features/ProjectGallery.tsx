import React from 'react'
import ProjectItem from './ProjectItem'
import { RootState } from '../redux/reducers/rootReducer';
import { useSelector, useDispatch  } from 'react-redux';
import { filterProjects } from './slices/projectSlice';
import { ProjectFilter } from './slices/filterSlice';
import { Project } from './types';

const getfilteredProjects = (projects: Project[], filter: ProjectFilter) => {
  switch (filter) {
    case ProjectFilter.ShowAll:
      return projects
    case ProjectFilter.ShowCompleted:
      return projects.filter(t => t.completed)
    case ProjectFilter.ShowActive:
      return projects.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

export default function TodoList() {
  const dispatch = useDispatch();
  
  const projects = useSelector(
    (state: RootState) => getfilteredProjects(state.projects, state.projectFilter)
);

  return (
    <ul>
      {projects.map(project => (
        <ProjectItem key={project.id} {...project} onClick={() => dispatch(filterProjects(project))} />
      ))}
    </ul>
  );
}