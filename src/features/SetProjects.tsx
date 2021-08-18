// import frameworks
import React from 'react';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProjects } from './slices/projectSlice';
// import projects
import projectData from '../data/projects.json';

// SetProjects
export default function SetProjects(): JSX.Element {
	// dispatch
	const dispatch = useDispatch();

	// send resized and sorted data to dispatch
	const handleSubmit = useCallback((projects: any[]) => {
		dispatch(setProjects(projects));
	}, [dispatch]);

	// resize the current data array
	const resizeData = useCallback(
		(dataArray: any[], size: number) => {
			const resizedData = [].concat(dataArray).slice(0, size);
			handleSubmit(resizedData);
		},
		[handleSubmit]
	);

	// sort the current data array
	const sortData = useCallback(
		(dataArray: any[], size: number) => {
			const sortedData = [].concat(dataArray).sort((a, b) => (a.id > b.id ? 1 : -1));
			resizeData(sortedData, size);
		},
		[resizeData]
	);

	// sort data on page load (default to 9)
	useEffect(() => {
		sortData(projectData, 9);
	}, [sortData]);

	// buttons to show more or less projects
	return (
		<div>
			<button onClick={() => sortData(projectData, 18)}>SHOW MORE PROJECTS</button>
			<button onClick={() => sortData(projectData, 9)}>SHOW LESS PROJECTS</button>
		</div>
	);
}
