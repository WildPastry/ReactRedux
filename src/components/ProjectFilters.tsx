// imports
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import FilterButton from './FilterButton';
import { ProjectFilter } from '../types';

export default function ProjectFilters(): JSX.Element {
		// useSelector for app theme
		const appTheme = useSelector((state: RootState) => {
			return state.setTheme.appTheme;
		});
	return (
		<React.Fragment>
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
		</React.Fragment>
	);
}
