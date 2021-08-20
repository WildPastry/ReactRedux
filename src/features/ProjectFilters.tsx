// imports
import React from 'react';
import FilterButton from './FilterButton';
import { ProjectFilter } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row } from 'react-bootstrap';

export default function ProjectFilters(): JSX.Element {
	return (
		<Row className='wrap'>
			{/* <FilterButton projectFilter={ProjectFilter.ShowAll} text={'All'} />
			<FilterButton projectFilter={ProjectFilter.ShowActive} text={'Active'} />
			<FilterButton projectFilter={ProjectFilter.ShowCompleted} text={'Completed'} /> */}
			<div className='filterWrap flex pad'>
				<h4 className='filterItemDark'>ALL</h4>
				<h4 className='filterItemDark'>UI/UX</h4>
				<h4 className='filterItemDark'>TypeScript</h4>
				<h4 className='filterItemDark'>JavaScript</h4>
				<h4 className='filterItemDark'>JQuery</h4>
				<h4 className='filterItemDark'>React</h4>
				<h4 className='filterItemDark'>Native</h4>
				<h4 className='filterItemDark'>API</h4>
				<h4 className='filterItemDark'>PHP</h4>
				<h4 className='filterItemDark'>Graphic</h4>
			</div>
			<div className='galleryWrap flex pad'>
			<h4 className={'textWhite text400'}>THEME</h4>
				<img
					className='galleryRGBIcon'
					src={require('./../icon/rgb.svg')}
					alt='RBG Icon'
				/>
				<div>
					<FontAwesomeIcon
						icon={['fas', 'fill-drip']}
						className={'galleryFillIconDark'}
					/>
				</div>
			</div>
		</Row>
	);
}
