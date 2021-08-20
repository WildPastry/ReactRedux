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
				<h4 className='filterItemDark'>ALL</h4>
				<h4 className='filterItemDark'>UI/UX</h4>
				<h4 className='filterItemDark'>Graphics</h4>
				<h4 className='filterItemDark'>TypeScript</h4>
				<h4 className='filterItemDark'>JavaScript</h4>
				<h4 className='filterItemDark'>JQuery</h4>
				<h4 className='filterItemDark'>React</h4>
				<h4 className='filterItemDark'>React Native</h4>
				<h4 className='filterItemDark'>PHP</h4>
			</div>
		</React.Fragment>
	);
}
