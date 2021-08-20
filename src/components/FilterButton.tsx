import React from 'react';
import { setProjectFilter } from '../redux/slices/filterSlice';
import { ProjectFilter } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';

interface FilterButtonProps {
	projectFilter: ProjectFilter;
	text: string;
}

export default function FilterButton({
	projectFilter,
	text
}: FilterButtonProps): JSX.Element {
	const dispatch = useDispatch();

	const currentvisibilityFilter = useSelector((state: RootState) => state.filterProjects);

	return (
		<button
			disabled={currentvisibilityFilter === projectFilter}
			onClick={() => dispatch(setProjectFilter(projectFilter))}>
			{text}
		</button>
	);
}
