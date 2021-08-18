import React from 'react';
import FilterButton from './FilterButton';
import { ProjectFilter } from './types';

export default function Footer(): JSX.Element {
	return (
		<div>
			<span>Show: </span>
			<FilterButton projectFilter={ProjectFilter.ShowAll} text={'All'} />
			<FilterButton projectFilter={ProjectFilter.ShowActive} text={'Active'} />
			<FilterButton projectFilter={ProjectFilter.ShowCompleted} text={'Completed'} />
		</div>
	);
}
