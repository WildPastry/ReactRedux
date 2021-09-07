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
		if (id === -1) {
			id = allProjects.length -1;
		} else if (id === allProjects.length) {
			id = 0;
		}
		// set current project using ID
		// then navigate to correct section and scroll to top
		dispatch(setNav(section));
		dispatch(setProject(id));
		randomProjects(id);
		window.scrollTo(0, 0);
	};

	// store current project
	let proj = allProjects.find((x) => x.id === currentProject);

	// select random project
	const [showProjects, setShowProjects] = useState([0, 1, 2]);

	const randomProjects = useCallback(
		(id: number) => {
			let random = [];
			console.log('MUST NOT ADD: ',id);
			while (random.length < 3) {
				var num = Math.floor(Math.random() * allProjects.length);
				console.log(num);
				if (random.indexOf(num) === -1 && num !== id) {
					random.push(num);
				}
			}
			console.log(random)
			setShowProjects(random);
		},
		[allProjects]
	);

	// run random project function on page load
	useEffect(() => {
		randomProjects(proj.id);
	}, [randomProjects]);

	return (
		<section>
			<MDBAnimation type='fadeIn'>
				<Container aria-label='Project Section' fluid className='responsiveMar'>
					<Row className='wrap marBotProject'>
						{/* project details / technology / links */}
						<Col
							xs={{ span: 12, order: 2 }}
							sm={{ span: 12, order: 2 }}
							lg={{ span: 2, order: 1 }}
							xl={{ span: 4, order: 1 }}
							className='projectDetails colWrap right'>
							<ul
								aria-label='Project Technologies List'
								className={'projectListWrap projectList' + appTheme}>
								<p className={'marBot text700 text' + appTheme}>TECHNOLOGY</p>
								{proj.icons.map((tech: any) => (
									<li aria-label={tech['src']} key={tech['id']}>
										{tech['src']}
									</li>
								))}
								<li className='marTop'>
									<a
										aria-label='Link To Live Project Website'
										target='_blank'
										rel='noopener noreferrer'
										className={'textPeach projectsLink'}
										href={proj.url}>
										{proj.website}
									</a>
								</li>
								<li>
									<a
										aria-label='Link To Project Code'
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
						<Col
							xs={{ span: 12, order: 1 }}
							sm={{ span: 12, order: 1 }}
							lg={{ span: 10, order: 2 }}
							xl={{ span: 8, order: 2 }}
							className='colWrap'>
							<h1 aria-label='Project Heading' className={'text' + appTheme}>
								{proj.name}
							</h1>
							<br />
							<h2 aria-label='Project Introduction' className={'text300 textDualGrey'}>
								{proj.intro}
							</h2>
							<br />
							<p
								aria-label='Project Description'
								className={'projectText text' + appTheme}>
								{proj.desc}
							</p>
						</Col>
					</Row>
				</Container>
				{/* navigation controls */}
				<Container fluid>
					<Col sm={12} className='mar50 colWrap flex wrap'>
						<div
							aria-label='View Previous Project'
							className='iconWrap'
							onClick={() => handleNav('PROJECT', proj.id - 1)}>
							<FontAwesomeIcon icon={faChevronLeft} className='prevIcon' />
						</div>
						<div
							aria-label='View Project Gallery'
							className='iconWrap'
							onClick={() => handleNav('GALLERY', proj.id)}>
							<FontAwesomeIcon icon={faTh} className='gridIcon' />
						</div>
						<div
							aria-label='View Next Project'
							className='iconWrap'
							onClick={() => handleNav('PROJECT', +proj.id + 1)}>
							<FontAwesomeIcon icon={faChevronRight} className='nextIcon' />
						</div>
					</Col>
					{/* navigation controls */}
				</Container>
				<div className={'projectRow' + appTheme}>
					<Container fluid>
						{/* project images */}
						<Row className='marBotProject'>
							{proj.images.map((currentImage: { [x: string]: string }) => (
								<Col sm={12} key={currentImage['id']} className='projectWrap'>
									<MDBAnimation type='zoomIn'>
										<img
											aria-label={proj.name + ' Project Image ' + currentImage['id']}
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
						<div
							aria-label='View Previous Project'
							className='iconWrap'
							onClick={() => handleNav('PROJECT', proj.id - 1)}>
							<FontAwesomeIcon icon={faChevronLeft} className='prevIcon' />
						</div>
						<div
							aria-label='View Project Gallery'
							className='iconWrap'
							onClick={() => handleNav('GALLERY', proj.id)}>
							<FontAwesomeIcon icon={faTh} className='gridIcon' />
						</div>
						<div
							aria-label='View Next Project'
							className='iconWrap'
							onClick={() => handleNav('PROJECT', +proj.id + 1)}>
							<FontAwesomeIcon icon={faChevronRight} className='nextIcon' />
						</div>
					</Col>
				</Container>
				{/* navigation controls */}
				<Container fluid>
					<Row>
						<Col sm={12}>
							<h3
								aria-label='More Projects'
								className='textCenter marBotProject textPeach'>
								MORE PROJECTS
							</h3>
						</Col>
						<Col xs={12} sm={4}>
							<img
								aria-label={'View Project ' + allProjects[showProjects[0]].name}
								className={'imgWrap'}
								onClick={() => handleNav('PROJECT', allProjects[showProjects[0]].id)}
								src={require('./../img/thumb/' + allProjects[showProjects[0]].thumb[1])}
								alt='Gallery'
							/>
						</Col>
						<Col xs={12} sm={4}>
							<img
								aria-label={'View Project ' + allProjects[showProjects[1]].name}
								className={'imgWrap'}
								onClick={() => handleNav('PROJECT', allProjects[showProjects[1]].id)}
								src={require('./../img/thumb/' + allProjects[showProjects[1]].thumb[1])}
								alt='Gallery'
							/>
						</Col>
						<Col xs={12} sm={4}>
							<img
								aria-label={'View Project ' + allProjects[showProjects[2]].name}
								className={'imgWrap'}
								onClick={() => handleNav('PROJECT', allProjects[showProjects[2]].id)}
								src={require('./../img/thumb/' + allProjects[showProjects[2]].thumb[1])}
								alt='Gallery'
							/>
						</Col>
					</Row>
				</Container>
			</MDBAnimation>
		</section>
	);
};

// EXPORT Project
Project.displayName = 'Project';
export default Project;
