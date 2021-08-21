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

	const currentvisibilityFilter = useSelector((state: RootState) => state.setFilters);

	return (
		<button
			disabled={currentvisibilityFilter === projectFilter}
			onClick={() => dispatch(setProjectFilter(projectFilter))}>
			{text}
		</button>
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