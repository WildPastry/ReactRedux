// imports
import React from 'react';
import { Row } from 'react-bootstrap';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProjects } from '../redux/slices/projectSlice';
import projectData from '../data/projects.json';

// SetProjects
export default function SetProjects(): JSX.Element {
	// dispatch
	const dispatch = useDispatch();

	// send resized and sorted data to dispatch
	const handleDispatch = useCallback(
		(projects: any[]) => {
			dispatch(setProjects(projects));
		},
		[dispatch]
	);

	// resize the current data array
	const resizeData = useCallback(
		(dataArray: any[], size: number) => {
			const resizedData = [].concat(dataArray).slice(0, size);
			handleDispatch(resizedData);
		},
		[handleDispatch]
	);

	// sort the current data array
	const sortData = useCallback(
		(dataArray: any[], size: number) => {
			const sortedData = [].concat(dataArray).sort((a, b) => (a.id > b.id ? 1 : -1));
			resizeData(sortedData, size);
		},
		[resizeData]
	);

	// sort data on page load (default to 9 for now - seems okay)
	useEffect(() => {
		sortData(projectData, 9);
	}, [sortData]);

	// toggle FewerMore state
	const [showFewerMore, setShowFewerMore] = useState(false);

	// toggleFewerMore
	const toggleFewerMore = (size: number) =>
		showFewerMore === false
			? (setShowFewerMore(true), sortData(projectData, size))
			: (setShowFewerMore(false), sortData(projectData, size));

	// renderMore button
	const renderMore = () => {
		return (
			<h4 className='loadMoreDark' onClick={() => toggleFewerMore(18)}>
				SHOW MORE PROJECTS<span className={'ms-2 textWhite text700'}>[ </span>
				<span className={'textSpotGrey text400'}>...</span>{' '}
				<span className={'textWhite text700'}>]</span>
			</h4>
		);
	};

	// renderFewer button
	const renderFewer = () => {
		return (
			<h4 className='loadMoreDark' onClick={() => toggleFewerMore(9)}>
				SHOW FEWER PROJECTS<span className={'ms-2 textWhite text700'}>[ </span>
				<span className={'textSpotGrey text400'}>...</span>{' '}
				<span className={'textWhite text700'}>]</span>
			</h4>
		);
	};

	// buttons to show more or less projects
	return <Row>{showFewerMore ? renderFewer() : renderMore()}</Row>;
}
