// imports
import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { setNav, setProject } from '../redux/slices/navSlice';
import { Container, Col, Row } from 'react-bootstrap';
import { MDBAnimation } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTh } from '@fortawesome/free-solid-svg-icons';

// Project
const Project: React.FC = () => {
	// useSelectors for app theme / projects / current project
	const appTheme = useSelector((state: RootState) => {
		return state.setTheme.appTheme;
	});

	const ImgTheme = useSelector((state: RootState) => {
		return state.setTheme.imgTheme;
	});

	const allProjects = useSelector((state: RootState) => {
		return state.setProjects;
	});

	const currentProject = useSelector((state: RootState) => {
		return state.setNav.currentProject;
	});

	// dispatch
	const dispatch = useDispatch();

	// handle functions for navigation
	const handleNav = (section: string, id: number) => {
		// logic for navigation at the end or start of the project array
		if (id === 0) {
			id = allProjects.length;
		} else if (id === +allProjects.length + 1) {
			id = 1;
		}
		// set current project using ID
		// then navigate to correct section and scroll to top
		dispatch(setNav(section));
		dispatch(setProject(id));
		randomProjects();
		window.scrollTo(0, 0);
	};

	// store current project
	let proj = allProjects.find((x) => x.id === currentProject);

	// select random project functions
	const [showProjects, setShowProjects] = useState([1, 2, 3]);

	const randomProjects = useCallback(() => {
		let random = [];
		while (random.length < 3) {
			var num = Math.floor(Math.random() * allProjects.length);
			if (random.indexOf(num) === -1 || num != 0) {
				random.push(num);
			}
		}
		console.log(random);
		setShowProjects(random);

		// let random = new Set();
    // while (random.size < 3) {
    //     random.add(Math.floor(Math.random() * (allProjects.length - 1 + 1) + 1));
    // }

		// let uniqueNumbers = Array.from(random) ;
		// console.log(uniqueNumbers)
		// setShowProjects(uniqueNumbers as number[]);

	}, []);

	// run random project function on page load
	useEffect(() => {
		randomProjects();
	}, [randomProjects]);

	return (
		<React.Fragment>
			<MDBAnimation type='fadeIn'>
				<Container fluid className='responsiveMar'>
					<Row className='wrap marBotProject'>

						{/* project details / technology / links */}
						<Col sm={12} lg={4} className='projectDetails colWrap right'>
							<ul className={'projectListWrap projectList' + appTheme}>
								{/* <p className={'marBot text700 text' + appTheme}>DETAILS</p>
								<li>{proj.client}</li>
								<li>{proj.timeline}</li>
								<li>{proj.fields[0]}</li>
								<li>{proj.fields[1]}</li>
								<li>{proj.fields[2]}</li> */}
								<p className={'marBot text700 text' + appTheme}>TECHNOLOGY</p>
								{proj.icons.map((tech: any) => (
								<li key={tech['id']}>{tech['src']}</li>
							))}
								<li className='marTop'>
									<a
										target='_blank'
										rel='noopener noreferrer'
										className={'textPeach projectsLink'}
										href={proj.url}>
										{proj.website}
									</a>
								</li>
								<li>
									<a
										target='_blank'
										rel='noopener noreferrer'
										className={'textPeach projectsLink'}
										href={proj.gitUrl}>
										{proj.git}
									</a>
								</li>
							</ul>
						</Col>

						{/* project name / intro / desc */}
						<Col sm={12} lg={8} className='colWrap'>
							<h1 className={'marBot text' + appTheme}>{proj.name}</h1>
							<h2 className={'text300 textDualGrey'}>{proj.intro}</h2>
							<br />
							<p className={'projectText text' + appTheme}>{proj.desc}</p>
						</Col>

						{/* navigation controls */}
						<Col sm={12} className='mar50 colWrap flex wrap'>
							<div className='iconWrap' onClick={() => handleNav('PROJECT', proj.id - 1)}>
								<FontAwesomeIcon icon={faChevronLeft} className='prevIcon' />
							</div>
							<div className='iconWrap' onClick={() => handleNav('GALLERY', proj.id)}>
								<FontAwesomeIcon icon={faTh} className='gridIcon' />
							</div>
							<div
								className='iconWrap'
								onClick={() => handleNav('PROJECT', +proj.id + 1)}>
								<FontAwesomeIcon icon={faChevronRight} className='nextIcon' />
							</div>
						</Col>
						{/* navigation controls */}
					</Row>
				</Container>
				<div className={'projectRow' + appTheme}>
					<Container fluid>
						{/* project images */}
						<Row className='marBotProject'>
							{proj.images.map((currentImage: { [x: string]: string }) => (
								<Col sm={12} key={currentImage['id']} className='projectWrap'>
									<MDBAnimation type='zoomIn'>
										<img
											src={require('./../img/project/' + currentImage['src'])}
											alt={proj.name}
										/>
									</MDBAnimation>
								</Col>
							))}
						</Row>
						{/* project images */}
					</Container>
				</div>
				{/* navigation controls */}
				<Container fluid>
					<Col sm={12} className='colWrap flex wrap'>
						<div className='iconWrap' onClick={() => handleNav('PROJECT', proj.id)}>
							<FontAwesomeIcon icon={faChevronLeft} className='prevIcon' />
						</div>
						<div className='iconWrap' onClick={() => handleNav('GALLERY', proj.id)}>
							<FontAwesomeIcon icon={faTh} className='gridIcon' />
						</div>
						<div className='iconWrap' onClick={() => handleNav('PROJECT', proj.id)}>
							<FontAwesomeIcon icon={faChevronRight} className='nextIcon' />
						</div>
					</Col>
				</Container>
				{/* navigation controls */}
				<Container fluid>
					<Row>
						<Col sm={12}>
							<h3 className='textCenter marBotProject textPeach'>MORE PROJECTS</h3>
						</Col>
						<Col xs={12} sm={4} className={'imgWrap' + ImgTheme}>
							<img
								onClick={() => handleNav('PROJECT', allProjects[showProjects[0]].id)}
								src={require('./../img/thumb/' + allProjects[showProjects[0]].thumb[1])}
								alt='Gallery'
							/>
						</Col>
						<Col xs={12} sm={4} className={'imgWrap' + ImgTheme}>
							<img
								onClick={() => handleNav('PROJECT', allProjects[showProjects[1]].id)}
								src={require('./../img/thumb/' + allProjects[showProjects[1]].thumb[1])}
								alt='Gallery'
							/>
						</Col>
						<Col xs={12} sm={4} className={'imgWrap' + ImgTheme}>
							<img
								onClick={() => handleNav('PROJECT', allProjects[showProjects[2]].id)}
								src={require('./../img/thumb/' + allProjects[showProjects[2]].thumb[1])}
								alt='Gallery'
							/>
						</Col>
					</Row>
				</Container>
			</MDBAnimation>
		</React.Fragment>
	);
};

// EXPORT Project
Project.displayName = 'Project';
export default Project;
