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
			var r = Math.floor(Math.random() * allProjects.length);
			if (random.indexOf(r) === -1 || r != 0) {
				random.push(r);
			}
		}
		setShowProjects(random);
	}, []);

	// run random project function on page load
	useEffect(() => {
		randomProjects();
	}, [randomProjects]);

	return (
		<React.Fragment>
			<MDBAnimation type='fadeIn'>
				<Container fluid className='responsiveMar'>
					<Row className='wrap responsiveMar marBotProject'>
						<Col sm={12} className='colWrap'>
							<h1 className={'marBot text' + appTheme}>{proj.name}</h1>
						</Col>
						<Col sm={12} lg={7} className='colWrap'>
							<h2 className={'text300 textSpot' + appTheme}>{proj.intro}</h2>
							<br />
							<p className={'text' + appTheme}>{proj.desc}</p>
						</Col>
						<Col sm={12} lg={5} className='colWrap right'>
							<ul>
								<li className='projectListItem'>
									<span className={'text700 text' + appTheme}>
										{proj.fields[0]}
										<span className='textLightGrey text700'> / </span>
										{proj.fields[1]}
										<span className='textLightGrey text700'> / </span>
										{proj.fields[2]}
									</span>
								</li>
								<li className='projectListItem'>
									<span className={'text700 text' + appTheme}>{proj.client}</span>
								</li>
								<li className='projectListItem'>
									<span className={'text700 text' + appTheme}>{proj.timeline}</span>
								</li>
								<li className='projectListItem marTop projectListItemVisible'>
									<span className={'text700 text' + appTheme}>
										<a
											target='_blank'
											rel='noopener noreferrer'
											className={'textPeach projectsLink'}
											href={proj.url}>
											{proj.website}
										</a>
									</span>
								</li>
								<li className='projectListItem projectListItemVisible'>
									<span className={'text700 text' + appTheme}>
										<a
											target='_blank'
											rel='noopener noreferrer'
											className={'textPeach projectsLink'}
											href={proj.gitUrl}>
											{proj.git}
										</a>
									</span>
								</li>
							</ul>
							<div className='projectIconsWrap responsiveWrap'>
								{proj.icons.map((currentIcon: any) => (
									<FontAwesomeIcon
										key={currentIcon['id']}
										icon={['fab', currentIcon['src']]}
										className='projectIcon'
									/>
								))}
							</div>
						</Col>
						<Col sm={12} className='colWrap'>
							<div className='lineThin mar' />
						</Col>
						{/* navigation controls */}
						<Col sm={12} className='colWrap flex wrap'>
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
						<Col sm={12} className='moreProjectsWrap'>
							<h3 className='center marBotProject textPeach'>MORE PROJECTS</h3>
						</Col>
						<Col xs={12} sm={4} className={'imgWrap' + appTheme}>
							<img
								onClick={() => handleNav('PROJECT', allProjects[showProjects[0]].id)}
								src={require('./../img/thumb/' + allProjects[showProjects[0]].thumb[1])}
								alt='Gallery'
							/>
						</Col>
						<Col xs={12} sm={4} className={'imgWrap' + appTheme}>
							<img
								onClick={() => handleNav('PROJECT', allProjects[showProjects[1]].id)}
								src={require('./../img/thumb/' + allProjects[showProjects[1]].thumb[1])}
								alt='Gallery'
							/>
						</Col>
						<Col xs={12} sm={4} className={'imgWrap' + appTheme}>
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
