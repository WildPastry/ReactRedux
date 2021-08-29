// imports
import React from 'react';
import FilterButton from './FilterButton';
import { ProjectFilter } from '../types';

// ProjectFilters
export default function ProjectFilters(): JSX.Element {
	return (
		<div className='flex wrap mar50'>
			<div className={'filterWrap flex pad'}>
				<FilterButton projectFilter={ProjectFilter.ShowAll} text={'ALL'} />
				<FilterButton projectFilter={ProjectFilter.ShowApps} text={'Apps'} />
				<FilterButton projectFilter={ProjectFilter.ShowBranding} text={'Branding'} />
				<FilterButton projectFilter={ProjectFilter.ShowGraphic} text={'Graphic'} />
				<FilterButton projectFilter={ProjectFilter.ShowMarketing} text={'Marketing'} />
				<FilterButton projectFilter={ProjectFilter.ShowWebsites} text={'Websites'} />
			</div>
		</div>
	);
}
