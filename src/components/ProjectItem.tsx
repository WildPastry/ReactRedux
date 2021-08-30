// imports
import React, { useLayoutEffect } from 'react';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { setNav, setProject } from '../redux/slices/navSlice';
import useMightyMouse from 'react-hook-mighty-mouse';
import { MDBAnimation } from 'mdbreact';
import MouseTooltip from 'react-sticky-mouse-tooltip';
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
export default function ProjectItem({ id, name, thumb }: ProjectProps): JSX.Element {
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

	// toggle ImgHover state
	const [showImgHover, setShowImgHover] = useState(false);

	// toggleImgHover
	const toggleImgHover = () =>
		showImgHover === false ? setShowImgHover(true) : setShowImgHover(false);

	// const useMove = () => {
	// 	const [state, setState] = useState({ x: 0, y: 0 });

	// 	const handleMouseMove = (e: { persist: () => void; clientX: any; clientY: any }) => {
	// 		e.persist();
	// 		setState((state) => ({ ...state, x: e.clientX, y: e.clientY }));
	// 	};
	// 	return {
	// 		x: state.x,
	// 		y: state.y,
	// 		handleMouseMove
	// 	};
	// };

	// const getDimensionObject = (node: { getBoundingClientRect: () => any; }) => {
	// 	const rect = node.getBoundingClientRect();

	// 	return {
	// 		width: rect.width,
	// 		height: rect.height
	// 	}
	// };

	// interface Dimensions {
	// 	width: number,
	// 	height: number
	// }

	// type Dimensions = typeof initDimensions;
	// const initDimensions = {width: 0, height: 0}

	// const [user, setUser] = useState<User>(initUser);

	// const Hook = () => {
	// 	const { x, y, handleMouseMove } = useMove();
	// 	return (
	// 		<div className='mouseArea' onMouseMove={handleMouseMove}>
	// 			<div className='mouseInfo'>
	// 				<p>
	// 					The current mouse position is ({x}, {y})
	// 				</p>
	// 			</div>
	// 		</div>
	// 	);
	// };

	// 	const useSize = () => {
	// 	const [dimensions, setDimensions] = useState({}) as any;
	// 	const [node, setNode] = useState(null);

	// 	const ref = useCallback(node =>{
	// 		setNode(node)
	// 	}, [])

	// useLayoutEffect(()=> {

	// 	if(node){
	// const measure = () => setDimensions(getDimensionObject(node));
	// measure()
	// 	}
	// }, [node])

	// 	return [ref, dimensions];
	// };

	// const [ref, {width, height}] = useSize();

	// const { x, y, handleMouseMove } = useMove();

	// const xPos = showImgHover ? x : 0;
	// const yPos = showImgHover ? y : 0;

	//on mouseEvent Properties
	// function getMouseCoords(e: Event) {
	//   var e = e || window.event;
	//   document.getElementById('msg').innerHTML = e.clientX + ', ' +
	//     e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
	// }
	// console.log(width, height)

	//   var followCursor = (
	//   function() {
	//   var s = document.getElementById('object');
	//   s.style.position = 'absolute';

	//   return {
	//     init: function() {
	//       document.body.appendChild(s);
	//     },

	//     run: function(e: Event) {
	//       var e = e || window.event;
	//       s.style.left = (xPos - 5) + 'px';
	//       s.style.top = (yPos - 5) + 'px';
	//     }
	//   };
	// }());

	// window.onload = function() {
	//   followCursor.init();
	//   document.body.onmousemove = followCursor.run;
	// }
	// const { position } = useMightyMouse();

	// const RelativePosition = () => {
	// 	const {
	// 		selectedElement: {
	// 			position: { x, y }
	// 		}
	// 	} = useMightyMouse(true, 'trackElement');
	// 	return (
	// 		<img
	// 		id="trackElement"
	// 			className={`${showImgHover ? 'imgHover imgHoverActive' : 'imgHover'}`}
	// 			// style={{ top: x, left: y }}
	// 			style={{transform: `translate(${x}px, ${y}px)`}}
	// 			src={require('./../img/thumb/' + thumb[1])}
	// 			alt={name}
	// 		/>

	// 		// <div className="relative-position textWhite" id="trackElement">
	// 		//   <div className="position">
	// 		//     <div className="header">Position</div>
	// 		//     <div className="row">
	// 		//       x: <div>{client.x && client.x.toFixed(0)}</div>
	// 		//     </div>
	// 		//     <div className="row">
	// 		//       y: <div>{client.y && client.y.toFixed(0)}</div>
	// 		//     </div>
	// 		//   </div>
	// 		//   <div className="position">
	// 		//     <div className="header">Relative Position</div>
	// 		//     <div className="row">
	// 		//       x: <div>{x && x.toFixed(0)}</div>
	// 		//     </div>
	// 		//     <div className="row">
	// 		//       y: <div>{y && y.toFixed(0)}</div>
	// 		//     </div>
	// 		//   </div>
	// 		// </div>
	// 	);
	// };

	return (
		<React.Fragment>

			{/* <div id="object">OBJECT</div> */}
			{/* Mouse position x:{position.client.x} y:{position.client.y} */}
			<div
				className={'col-sm-12 col-md-6 col-lg-4 imgHoverWrap'}
				// onMouseMove={handleMouseMove}
				onMouseEnter={toggleImgHover}
				onMouseLeave={toggleImgHover}>
				{/* <Cursor /> */}
				<MouseTooltip
          visible={showImgHover}
          // offsetX={-150}
          // offsetY={-100}
					className={'zIndex'}
					
        >
          				<img
									onClick={() => handleNav('PROJECT', id)}
					className={`${showImgHover ? 'imgHover imgHoverActive' : 'imgHover'}`}
					// style={{top: x, left:y}}
					// style={{transform: `translate(${xPos - width / 2}px, ${yPos - height / 2}px)`}}
					src={require('./../img/thumb/' + thumb[1])}
					alt={name}
				/>
        </MouseTooltip>
				{/* <img
					className={`${showImgHover ? 'imgHover imgHoverActive' : 'imgHover'}`}
					// style={{top: x, left:y}}
					// style={{transform: `translate(${xPos - width / 2}px, ${yPos - height / 2}px)`}}
					src={require('./../img/thumb/' + thumb[1])}
					alt={name}
				/> */}
				<MDBAnimation type='zoomIn'>
					<img
						className={`${showImgHover ? 'imgWrap imgWrapActive' : 'imgWrap'}`}
						src={require('./../img/thumb/' + thumb[0])}
						alt={name}
						onClick={() => handleNav('PROJECT', id)}
					/>
				</MDBAnimation>
			</div>
		</React.Fragment>
	);
}
