// imports
import React from 'react';
import { useState } from 'react';
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
	thumb
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

	const useMove = () => {
		const [state, setState] = useState({x: 0, y: 0})
	
		const handleMouseMove = (e: { persist: () => void; clientX: any; clientY: any; }) => {
			e.persist()
			setState(state => ({...state, x: e.clientX, y: e.clientY}))
		}
		return {
			x: state.x,
			y: state.y,
			handleMouseMove,
		}
	}

	const Hook = () => {
		const {x, y, handleMouseMove} = useMove()
		return (
			<div className="mouseArea" onMouseMove={handleMouseMove}>
				<div className="mouseInfo">
					<p>The current mouse position is ({x}, {y})</p>
				</div>
			</div>
		)
	}

	return (
		<React.Fragment>
			<div className={'col-sm-12 col-md-6 col-lg-4'}>
				<Hook />
				<img 
				className={'imgHover'}
				src={require('./../img/thumb/' + thumb[1])}
				alt={name} />
				<MDBAnimation type='zoomIn'>
					<img
						className={'imgWrap' + ImgTheme}
						src={require('./../img/thumb/' + thumb[0])}
						alt={name}
						onClick={() => handleNav('PROJECT', id)}
					/>
				</MDBAnimation>
			</div>
		</React.Fragment>
	);
}

{/* <div className='image'>

	<div className='hover-container'>
		<img className='image-hover'/>
		</div>

		<img className='' data-grid-image data-srcset-landscape='https://marxdesign.co.nz/wp-content/uploads/2020/12/SL_WaterWeb-Hero-Landscape-1024x774.jpg' data-srcset-portrait='https://marxdesign.co.nz/wp-content/uploads/2020/12/SL_Water-Hero_Portrait-1024x1354.jpg' data-src-landscape='https://marxdesign.co.nz/wp-content/uploads/2020/12/SL_WaterWeb-Hero-Landscape-1024x774.jpg' data-src-portrait='https://marxdesign.co.nz/wp-content/uploads/2020/12/SL_Water-Hero_Portrait-1024x1354.jpg' />

		</div> */}