// imports
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { setNav, setProject } from '../redux/slices/navSlice';
import { MDBAnimation } from 'mdbreact';

// set up ProjectProps interface
interface ProjectProps {
	id: number;
	name: string;
	fields: any[];
	type: any[];
	client: string;
	timeline: string;
	website: string;
	thumb: any[];
	images: [{ src: string; id: string }];
	icons: [{ src: string; id: string }];
	intro: string;
	desc: string;
	url: string;
	git: string;
	gitUrl: string;
	filtered: boolean;
	onClick: () => any;
}

// ProjectItem function
export default function ProjectItem({
	id,
	name,
	thumb,
	onClick
}: ProjectProps): JSX.Element {
	// useSelector for img theme
	const ImgTheme = useSelector((state: RootState) => {
		return state.setTheme.imgTheme;
	});

	// dispatch
	const dispatch = useDispatch();

	// handle function for navigation
	const handleNav = (section: string, id: number) => {
		// set current project using ID
		// then navigate to correct section and scroll to top
		dispatch(setProject(id));
		dispatch(setNav(section));
		window.scrollTo(0, 0);
	};

	return (
		<React.Fragment>
			<div className={'col-sm-12 col-md-6 col-lg-4 imgWrap' + ImgTheme}>
				<MDBAnimation type='zoomIn'>
					<img
						src={require('./../img/thumb/' + thumb[0])}
						alt={name}
						onClick={() => handleNav('PROJECT', id)}
					/>
				</MDBAnimation>
			</div>
		</React.Fragment>
	);
}
