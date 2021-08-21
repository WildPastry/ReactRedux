// imports
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { setImgTheme } from '../redux/slices/themeSlice';
import { Row } from 'react-bootstrap';
import FilterButton from './FilterButton';
import { ProjectFilter } from '../types';

export default function ProjectFilters(): JSX.Element {
	// dispatch
	const dispatch = useDispatch();

	// useSelectors for app theme and img themes
	const appTheme = useSelector((state: RootState) => {
		return state.setTheme.appTheme;
	});

	const ImgTheme = useSelector((state: RootState) => {
		return state.setTheme.imgTheme;
	});

	// handle function for img theme
	const handleImgTheme = () => {
		let currentTheme: string;
		ImgTheme === 'DARK' ? (currentTheme = 'LIGHT') : (currentTheme = 'DARK');
		dispatch(setImgTheme(currentTheme));
	};

	return (
		<div className='flex wrap'>
			{/* <FilterButton projectFilter={ProjectFilter.ShowAll} text={'All'} />
			<FilterButton projectFilter={ProjectFilter.ShowActive} text={'Active'} />
			<FilterButton projectFilter={ProjectFilter.ShowCompleted} text={'Completed'} /> */}
			<div className={'filterWrap flex pad'}>
				<h4 className={'filterItem' + appTheme + ' filterItemActive' + appTheme}>ALL</h4>
				<h4 className={'filterItem' + appTheme}>UI/UX</h4>
				<h4 className={'filterItem' + appTheme}>Graphics</h4>
				<h4 className={'filterItem' + appTheme}>TypeScript</h4>
				<h4 className={'filterItem' + appTheme}>JavaScript</h4>
				<h4 className={'filterItem' + appTheme}>JQuery</h4>
				<h4 className={'filterItem' + appTheme}>React</h4>
				<h4 className={'filterItem' + appTheme}>React Native</h4>
				<h4 className={'filterItem' + appTheme}>PHP</h4>
			</div>
			<div className={'galleryWrap flex pad'}>
				<h4 className={'text400 textSpot' + appTheme}>IMG THEME</h4>
				<img
					className={'imgThemeIcon' + ImgTheme}
					src={require('./../icon/rgb.svg')}
					onClick={() => handleImgTheme()}
					alt='RBG Icon'
				/>
			</div>
		</div>
	);
}
