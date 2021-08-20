// imports
import React from 'react';
import FilterButton from './FilterButton';
import { ProjectFilter } from '../types';

export default function ProjectFilters(): JSX.Element {
	return (
		<React.Fragment>
			{/* <FilterButton projectFilter={ProjectFilter.ShowAll} text={'All'} />
			<FilterButton projectFilter={ProjectFilter.ShowActive} text={'Active'} />
			<FilterButton projectFilter={ProjectFilter.ShowCompleted} text={'Completed'} /> */}
			<div className='filterWrap flex pad'>
				<h4 className='filterItemDARK filterItemActiveDARK'>ALL</h4>
				<h4 className='filterItemDARK'>UI/UX</h4>
				<h4 className='filterItemDARK'>Graphics</h4>
				<h4 className='filterItemDARK'>TypeScript</h4>
				<h4 className='filterItemDARK'>JavaScript</h4>
				<h4 className='filterItemDARK'>JQuery</h4>
				<h4 className='filterItemDARK'>React</h4>
				<h4 className='filterItemDARK'>React Native</h4>
				<h4 className='filterItemDARK'>PHP</h4>
			</div>
		</React.Fragment>
	);
}
