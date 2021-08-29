import React from 'react';
import { setProjectFilter } from '../redux/slices/filterSlice';
import { ProjectFilter } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';

interface FilterButtonProps {
	projectFilter: ProjectFilter;
	text: string;
}

// FilterButton
export default function FilterButton({
	projectFilter,
	text
}: FilterButtonProps): JSX.Element {
	// useSelector for app theme
	const appTheme = useSelector((state: RootState) => {
		return state.setTheme.appTheme;
	});

	// dispatch
	const dispatch = useDispatch();

	// show visible filter
	const visibleFilter = useSelector((state: RootState) => state.setFilters);

	return (
		<h4
			className={`${
				visibleFilter === projectFilter
					? 'filterItem' + appTheme + ' filterItemActive' + appTheme
					: 'filterItem' + appTheme
			}`}
			onClick={() => dispatch(setProjectFilter(projectFilter))}>
			{text}
		</h4>
	);
}
