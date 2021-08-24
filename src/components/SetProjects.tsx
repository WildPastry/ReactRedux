// imports
import React from 'react';
import { Row } from 'react-bootstrap';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { setProjects } from '../redux/slices/projectSlice';
import projectData from '../utilities/projects.json';

// SetProjects
export default function SetProjects(): JSX.Element {
	// useSelector for app theme
	const appTheme = useSelector((state: RootState) => {
		return state.setTheme.appTheme;
	});

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

	// toggle MoreFewer state
	const [showMoreFewer, setShowMoreFewer] = useState(false);

	// toggleMoreFewer
	const toggleMoreFewer = (size: number) =>
		showMoreFewer === false
			? (setShowMoreFewer(true), sortData(projectData, size))
			: (setShowMoreFewer(false), sortData(projectData, size));

	// renderMore button
	const renderMore = () => {
		return (
			<h4 className={'moreFewer' + appTheme} onClick={() => toggleMoreFewer(18)}>
				LOAD MORE<span className={'ms-2 text700 text' + appTheme}>[ </span>
				<span className={'textSpotGrey text400'}>...</span>{' '}
				<span className={'text700 text' + appTheme}>]</span>
			</h4>
		);
	};

	// renderFewer button
	const renderFewer = () => {
		return (
			<h4 className={'moreFewer' + appTheme} onClick={() => toggleMoreFewer(9)}>
				SHOW FEWER PROJECTS<span className={'ms-2 text700 text' + appTheme}>[ </span>
				<span className={'textSpotGrey text400'}>...</span>{' '}
				<span className={'text700 text' + appTheme}>]</span>
			</h4>
		);
	};

	// buttons to show more or less projects
	return <Row className='pad'>{showMoreFewer ? null : renderMore()}</Row>;
}
