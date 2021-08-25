// imports
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import FilterButton from './FilterButton';
import { ProjectFilter } from '../types';

export default function ProjectFilters(): JSX.Element {
	// useSelectors for app theme and img themes
	const appTheme = useSelector((state: RootState) => {
		return state.setTheme.appTheme;
	});

		// handle function for navigation and active menu item
		// const [showActive, setShowActive] = useState('ALL');

		// const handleFilter = (filter: string) => {
		// 	setShowActive(filter);
		// };

	return (
		<div className='flex wrap'>
			{/* <FilterButton projectFilter={ProjectFilter.ShowAll} text={'All'} />
			<FilterButton projectFilter={ProjectFilter.ShowActive} text={'Active'} />
			<FilterButton projectFilter={ProjectFilter.ShowCompleted} text={'Completed'} /> */}
			<div className={'filterWrap flex pad'}>
				<h4 className={'filterItem' + appTheme + ' filterItemActive' + appTheme}>ALL</h4>
				<h4 className={'filterItem' + appTheme}>Apps</h4>
				<h4 className={'filterItem' + appTheme}>Branding</h4>
				<h4 className={'filterItem' + appTheme}>Marketing</h4>
				<h4 className={'filterItem' + appTheme}>Websites</h4>
				<h4 className={'filterItem' + appTheme}>UI/UX</h4>
				{/* <h4 className={'filterItem' + appTheme}>TypeScript</h4>
				<h4 className={'filterItem' + appTheme}>JavaScript</h4>
				<h4 className={'filterItem' + appTheme}>JQuery</h4>
				<h4 className={'filterItem' + appTheme}>React</h4>
				<h4 className={'filterItem' + appTheme}>React Native</h4>
				<h4 className={'filterItem' + appTheme}>PHP</h4> */}
			</div>
		</div>
	);
}

// 	filter(value: string) {
// 		var projects = projectData;
// 		var filter = value;
// 		var projectsFiltered = projects.filter(
// 			(project: { fields: { indexOf: (arg0: string) => number } }) => {
// 				return project.fields.indexOf(filter) >= 0;
// 			}
// 		);
// 		if (this.state.light === false) {
// 			if (value === 'Branding') {
// 				this.setState({
// 					everything: 'filterItemDark text700',
// 					branding: 'filterItemDark filterItemActiveDark',
// 					graphic: 'filterItemDark',
// 					ux: 'filterItemDark',
// 					web: 'filterItemDark',
// 					filter: 'branding'
// 				});
// 			} else if (value === 'Graphic') {
// 				this.setState({
// 					everything: 'filterItemDark text700',
// 					branding: 'filterItemDark',
// 					graphic: 'filterItemDark filterItemActiveDark',
// 					ux: 'filterItemDark',
// 					web: 'filterItemDark',
// 					filter: 'graphic'
// 				});
// 			} else if (value === 'UX') {
// 				this.setState({
// 					everything: 'filterItemDark text700',
// 					branding: 'filterItemDark',
// 					graphic: 'filterItemDark',
// 					ux: 'filterItemDark filterItemActiveDark',
// 					web: 'filterItemDark',
// 					filter: 'ux'
// 				});
// 			} else if (value === 'Web') {
// 				this.setState({
// 					everything: 'filterItemDark text700',
// 					branding: 'filterItemDark',
// 					graphic: 'filterItemDark',
// 					ux: 'filterItemDark',
// 					web: 'filterItemDark filterItemActiveDark',
// 					filter: 'web'
// 				});
// 			}
// 		} else if (this.state.light === true) {
// 			if (value === 'Branding') {
// 				this.setState({
// 					everything: 'filterItemLight text700',
// 					branding: 'filterItemLight filterItemActiveLight',
// 					graphic: 'filterItemLight',
// 					ux: 'filterItemLight',
// 					web: 'filterItemLight',
// 					filter: 'branding'
// 				});
// 			} else if (value === 'Graphic') {
// 				this.setState({
// 					everything: 'filterItemLight text700',
// 					branding: 'filterItemLight',
// 					graphic: 'filterItemLight filterItemActiveLight',
// 					ux: 'filterItemLight',
// 					web: 'filterItemLight',
// 					filter: 'graphic'
// 				});
// 			} else if (value === 'UX') {
// 				this.setState({
// 					everything: 'filterItemLight text700',
// 					branding: 'filterItemLight',
// 					graphic: 'filterItemLight',
// 					ux: 'filterItemLight filterItemActiveLight',
// 					web: 'filterItemLight',
// 					filter: 'ux'
// 				});
// 			} else if (value === 'Web') {
// 				this.setState({
// 					everything: 'filterItemLight text700',
// 					branding: 'filterItemLight',
// 					graphic: 'filterItemLight',
// 					ux: 'filterItemLight',
// 					web: 'filterItemLight filterItemActiveLight',
// 					filter: 'web'
// 				});
// 			}
// 		}
// 		this.sortData(projectsFiltered)
// 	}

// 	filterReset() {
// 		if (this.state.light === false) {
// 			this.setState({
// 				everything: 'filterItemDark filterItemActiveDark text700',
// 				branding: 'filterItemDark',
// 				graphic: 'filterItemDark',
// 				ux: 'filterItemDark',
// 				web: 'filterItemDark',
// 				filter: 'everything'
// 			});
// 		} else if (this.state.light === true) {
// 			this.setState({
// 				everything: 'filterItemLight filterItemActiveLight text700',
// 				branding: 'filterItemLight',
// 				graphic: 'filterItemLight',
// 				ux: 'filterItemLight',
// 				web: 'filterItemLight',
// 				filter: 'everything'
// 			});
// 		}
// 		this.sortData(projectData)
// 	}