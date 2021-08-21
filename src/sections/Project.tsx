// imports
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { Container, Col, Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight, faTh } from '@fortawesome/free-solid-svg-icons';

// Project
const Project: React.FC = () => {
	// useSelectors for app theme / projects / current project
	const appTheme = useSelector((state: RootState) => {
		return state.setTheme.appTheme;
	});

	const allProjects = useSelector((state: RootState) => {
		return state.setProjects;
	});

	const currentProjectID = useSelector((state: RootState) => {
		return state.setNav.currentProject;
	});

	// check data
	useEffect(() => {
		// console.log(allProjects, currentProjectID);
		var currentProject = allProjects.find(x => x.id === currentProjectID);
		console.log(currentProject)
	}, []);

	// const [showCurrentProject, setShowCurrentProject] = useState(currentProject);

	return (
		<React.Fragment>
				<Container fluid className='responsiveMar'>
					<Row className='wrap marBotProject'>
						<Col sm={12} className='colWrap'>
							<h1 className={'marBot text' + appTheme}>PROJECT #</h1>
						</Col>
						<Col sm={12} lg={7} className='colWrap'></Col>
						<Col sm={12} lg={5} className='colWrap right'></Col>
						<Col sm={12} className='colWrap'>
							<div className='lineThin mar' />
						</Col>
						<Col sm={12} className='colWrap flex wrap'></Col>
					</Row>
				</Container>

				<Container fluid></Container>
				<Container fluid>
					<Row>
						<Col sm={12} className='moreProjectsWrap'>
							<h3 className='center marBotProject textPeach'>MORE PROJECTS</h3>
						</Col>
						<Col xs={12} sm={4} className='imgWrapDark'></Col>
						<Col xs={12} sm={4} className='imgWrapDark'></Col>
						<Col xs={12} sm={4} className='imgWrapDark'></Col>
					</Row>
				</Container>
		</React.Fragment>
	);
};

// EXPORT Project
Project.displayName = 'Project';
export default Project;

// class Project extends Component<any, any> {
// 	constructor(props: any) {
// 		super(props);
// 		this.state = {
// 			projects: this.props.projects,
// 			currentProject: this.props.currentProject,
// 			currentProjectName: this.props.currentProjectName,
// 			currentProjectFields: this.props.currentProjectFields,
// 			currentProjectClient: this.props.currentProjectClient,
// 			currentProjectTimeline: this.props.currentProjectTimeline,
// 			currentProjectWebsite: this.props.currentProjectWebsite,
// 			currentProjectThumb: this.props.currentProjectThumb,
// 			currentProjectImages: this.props.currentProjectImages,
// 			currentProjectIcons: this.props.currentProjectIcons,
// 			currentProjectIntro: this.props.currentProjectIntro,
// 			currentProjectDesc: this.props.currentProjectDesc,
// 			currentProjectUrl: this.props.currentProjectUrl,
// 			currentProjectGit: this.props.currentProjectGit,
// 			currentProjectGitUrl: this.props.currentProjectGitUrl
// 		};
// 		this.prevProject = this.prevProject.bind(this);
// 		this.nextProject = this.nextProject.bind(this);
// 		this.changeProject = this.changeProject.bind(this);
// 		this.moreProjects = this.moreProjects.bind(this);
// 		this.changePageFromProject = this.changePageFromProject.bind(this);
// 		this.changeProjectName = this.changeProjectName.bind(this);
// 	}

// 	changeProjectName(value: any) {
// 		this.props.changeProjectName(value);
// 	}

// 	changeProject() {
// 		this.setState({
// 			currentProject: '',
// 			currentProjectName: '',
// 			currentProjectFields: [],
// 			currentProjectClient: '',
// 			currentProjectTimeline: '',
// 			currentProjectWebsite: '',
// 			currentProjectThumb: '',
// 			currentProjectImages: [],
// 			currentProjectIcons: [],
// 			currentProjectIntro: '',
// 			currentProjectDesc: '',
// 			currentProjectUrl: '',
// 			currentProjectGit: '',
// 			currentProjectGitUrl: ''
// 		});
// 	}

// 	prevProject() {
// 		this.props.randomProject();
// 		window.scrollTo(0, 0);
// 		var i;
// 		if (this.state.currentProject === '001') {
// 			i = 13;
// 		} else if (this.state.currentProject === '002') {
// 			i = 0;
// 		} else if (this.state.currentProject === '003') {
// 			i = 1;
// 		} else if (this.state.currentProject === '004') {
// 			i = 2;
// 		} else if (this.state.currentProject === '005') {
// 			i = 3;
// 		} else if (this.state.currentProject === '006') {
// 			i = 4;
// 		} else if (this.state.currentProject === '007') {
// 			i = 5;
// 		} else if (this.state.currentProject === '008') {
// 			i = 6;
// 		} else if (this.state.currentProject === '009') {
// 			i = 7;
// 		} else if (this.state.currentProject === '010') {
// 			i = 8;
// 		} else if (this.state.currentProject === '011') {
// 			i = 9;
// 		} else if (this.state.currentProject === '012') {
// 			i = 10;
// 		} else if (this.state.currentProject === '013') {
// 			i = 11;
// 		} else if (this.state.currentProject === '014') {
// 			i = 12;
// 		} else if (this.state.currentProject === '015') {
// 			i = 13;
// 		} else if (this.state.currentProject === '016') {
// 			i = 14;
// 		} else if (this.state.currentProject === '017') {
// 			i = 15;
// 		} else if (this.state.currentProject === '018') {
// 			i = 16;
// 		} else if (this.state.currentProject === '019') {
// 			i = 17;
// 		} else if (this.state.currentProject === '020') {
// 			i = 18;
// 		} else if (this.state.currentProject === '021') {
// 			i = 19;
// 		} else if (this.state.currentProject === '022') {
// 			i = 20;
// 		} else if (this.state.currentProject === '023') {
// 			i = 21;
// 		} else if (this.state.currentProject === '024') {
// 			i = 22;
// 		}
// 		this.setState({
// 			currentProject: this.state.projects[i].id,
// 			currentProjectName: this.state.projects[i].name,
// 			currentProjectFields: this.state.projects[i].fields,
// 			currentProjectClient: this.state.projects[i].client,
// 			currentProjectTimeline: this.state.projects[i].timeline,
// 			currentProjectWebsite: this.state.projects[i].website,
// 			currentProjectThumb: this.state.projects[i].thumb,
// 			currentProjectImages: this.state.projects[i].images,
// 			currentProjectIcons: this.state.projects[i].icons,
// 			currentProjectIntro: this.state.projects[i].intro,
// 			currentProjectDesc: this.state.projects[i].desc,
// 			currentProjectUrl: this.state.projects[i].url,
// 			currentProjectGit: this.state.projects[i].git,
// 			currentProjectGitUrl: this.state.projects[i].gitUrl
// 		});
// 		this.changeProjectName(this.state.projects[i].name);
// 	}

// 	nextProject() {
// 		this.props.randomProject();
// 		window.scrollTo(0, 0);
// 		var i;
// 		if (this.state.currentProject === '001') {
// 			i = 1;
// 		} else if (this.state.currentProject === '002') {
// 			i = 2;
// 		} else if (this.state.currentProject === '003') {
// 			i = 3;
// 		} else if (this.state.currentProject === '004') {
// 			i = 4;
// 		} else if (this.state.currentProject === '005') {
// 			i = 5;
// 		} else if (this.state.currentProject === '006') {
// 			i = 6;
// 		} else if (this.state.currentProject === '007') {
// 			i = 7;
// 		} else if (this.state.currentProject === '008') {
// 			i = 8;
// 		} else if (this.state.currentProject === '009') {
// 			i = 9;
// 		} else if (this.state.currentProject === '010') {
// 			i = 10;
// 		} else if (this.state.currentProject === '011') {
// 			i = 11;
// 		} else if (this.state.currentProject === '012') {
// 			i = 12;
// 		} else if (this.state.currentProject === '013') {
// 			i = 13;
// 		} else if (this.state.currentProject === '014') {
// 			i = 14;
// 		} else if (this.state.currentProject === '015') {
// 			i = 15;
// 		} else if (this.state.currentProject === '016') {
// 			i = 16;
// 		} else if (this.state.currentProject === '017') {
// 			i = 17;
// 		} else if (this.state.currentProject === '018') {
// 			i = 18;
// 		} else if (this.state.currentProject === '019') {
// 			i = 19;
// 		} else if (this.state.currentProject === '020') {
// 			i = 20;
// 		} else if (this.state.currentProject === '021') {
// 			i = 21;
// 		} else if (this.state.currentProject === '022') {
// 			i = 22;
// 		} else if (this.state.currentProject === '023') {
// 			i = 23;
// 		} else if (this.state.currentProject === '024') {
// 			i = 0;
// 		}
// 		this.setState({
// 			currentProject: this.state.projects[i].id,
// 			currentProjectName: this.state.projects[i].name,
// 			currentProjectFields: this.state.projects[i].fields,
// 			currentProjectClient: this.state.projects[i].client,
// 			currentProjectTimeline: this.state.projects[i].timeline,
// 			currentProjectWebsite: this.state.projects[i].website,
// 			currentProjectThumb: this.state.projects[i].thumb,
// 			currentProjectImages: this.state.projects[i].images,
// 			currentProjectIcons: this.state.projects[i].icons,
// 			currentProjectIntro: this.state.projects[i].intro,
// 			currentProjectDesc: this.state.projects[i].desc,
// 			currentProjectUrl: this.state.projects[i].url,
// 			currentProjectGit: this.state.projects[i].git,
// 			currentProjectGitUrl: this.state.projects[i].gitUrl
// 		});
// 		this.changeProjectName(this.state.projects[i].name);
// 	}

// 	moreProjects(value: any) {
// 		this.props.randomProject();
// 		window.scrollTo(0, 0);
// 		var j;
// 		if (value === 0) {
// 			j = 0;
// 		} else if (value === 1) {
// 			j = 1;
// 		} else if (value === 2) {
// 			j = 2;
// 		} else if (value === 3) {
// 			j = 3;
// 		} else if (value === 4) {
// 			j = 4;
// 		} else if (value === 5) {
// 			j = 5;
// 		} else if (value === 6) {
// 			j = 6;
// 		} else if (value === 7) {
// 			j = 7;
// 		} else if (value === 8) {
// 			j = 8;
// 		} else if (value === 9) {
// 			j = 9;
// 		} else if (value === 10) {
// 			j = 10;
// 		} else if (value === 11) {
// 			j = 11;
// 		} else if (value === 12) {
// 			j = 12;
// 		} else if (value === 13) {
// 			j = 13;
// 		} else if (value === 14) {
// 			j = 14;
// 		} else if (value === 15) {
// 			j = 15;
// 		} else if (value === 16) {
// 			j = 16;
// 		} else if (value === 17) {
// 			j = 17;
// 		} else if (value === 18) {
// 			j = 18;
// 		} else if (value === 19) {
// 			j = 19;
// 		} else if (value === 20) {
// 			j = 20;
// 		} else if (value === 21) {
// 			j = 21;
// 		} else if (value === 22) {
// 			j = 22;
// 		} else if (value === 23) {
// 			j = 23;
// 		} else if (value === 24) {
// 			j = 24;
// 		}
// 		this.setState({
// 			currentProject: this.state.projects[j].id,
// 			currentProjectName: this.state.projects[j].name,
// 			currentProjectFields: this.state.projects[j].fields,
// 			currentProjectClient: this.state.projects[j].client,
// 			currentProjectTimeline: this.state.projects[j].timeline,
// 			currentProjectWebsite: this.state.projects[j].website,
// 			currentProjectThumb: this.state.projects[j].thumb,
// 			currentProjectImages: this.state.projects[j].images,
// 			currentProjectIcons: this.state.projects[j].icons,
// 			currentProjectIntro: this.state.projects[j].intro,
// 			currentProjectDesc: this.state.projects[j].desc,
// 			currentProjectUrl: this.state.projects[j].url,
// 			currentProjectGit: this.state.projects[j].git,
// 			currentProjectGitUrl: this.state.projects[j].gitUrl
// 		});
// 	}

// 	changePageFromProject(value: any) {
// 		window.scrollTo(0, 0);
// 		this.props.changePageFromProject(value);
// 	}

// 	render() {
// 		return (
// 			<React.Fragment>
// 				<MDBAnimation type='fadeIn'>
// 					<Container fluid className='responsiveMar'>
// 						<Row className='wrap marBotProject'>
// 							<Col sm={12} className='colWrap'>
// 								<h1 className={this.props.projectHeading}>
// 									{this.state.currentProjectName}
// 								</h1>
// 							</Col>
// 							<Col sm={12} lg={7} className='colWrap'>
// 								<h2 className={this.props.projectIntro}>
// 									{this.state.currentProjectIntro}
// 								</h2>
// 								<br />
// 								<p className={this.props.projectDesc}>{this.state.currentProjectDesc}</p>
// 							</Col>
// 							<Col sm={12} lg={5} className='colWrap right'>
// 								<ul>
// 									<li className='projectListItem'>
// 										<span className={this.props.projectDetails}>
// 											{this.state.currentProjectFields[0]}
// 											<span className='textLightGrey text700'> / </span>
// 											{this.state.currentProjectFields[1]}
// 											<span className='textLightGrey text700'> / </span>
// 											{this.state.currentProjectFields[2]}
// 										</span>
// 									</li>
// 									<li className='projectListItem'>
// 										<span className={this.props.projectDetails}>
// 											{this.state.currentProjectClient}
// 										</span>
// 									</li>
// 									<li className='projectListItem'>
// 										<span className={this.props.projectDetails}>
// 											{this.state.currentProjectTimeline}
// 										</span>
// 									</li>
// 									<li className='projectListItem marTop projectListItemVisible'>
// 										<span className={this.props.projectDetails}>
// 											<a
// 												target='_blank'
// 												rel='noopener noreferrer'
// 												className={this.props.link}
// 												href={this.state.currentProjectUrl}>
// 												{this.state.currentProjectWebsite}
// 											</a>
// 										</span>
// 									</li>
// 									<li className='projectListItem projectListItemVisible'>
// 										<span className={this.props.projectDetails}>
// 											<a
// 												target='_blank'
// 												rel='noopener noreferrer'
// 												className={this.props.link}
// 												href={this.state.currentProjectGitUrl}>
// 												{this.state.currentProjectGit}
// 											</a>
// 										</span>
// 									</li>
// 								</ul>
// 								<div className='projectIconsWrap responsiveWrap'>
// 									{this.state.currentProjectIcons.map((currentIcon: any) => (
// 										<FontAwesomeIcon
// 											key={currentIcon['id']}
// 											icon={['fab', currentIcon['src']]}
// 											className='projectIcon'
// 										/>
// 									))}
// 								</div>
// 							</Col>
// 							<Col sm={12} className='colWrap'>
// 								<div className='lineThin mar' />
// 							</Col>
// 							<Col sm={12} className='colWrap flex wrap'>
// 								<div className='iconWrap' onClick={this.prevProject}>
// 									<FontAwesomeIcon icon={faChevronLeft} className='prevIcon' />
// 								</div>
// 								<div
// 									className='iconWrap'
// 									onClick={this.changePageFromProject.bind(this, 'gallery')}>
// 									<FontAwesomeIcon icon={faTh} className='gridIcon' />
// 								</div>
// 								<div className='iconWrap' onClick={this.nextProject}>
// 									<FontAwesomeIcon icon={faChevronRight} className='nextIcon' />
// 								</div>
// 							</Col>
// 						</Row>
// 					</Container>
// 					<div className={this.props.projectRow}>
// 						<Container fluid>
// 							<Row className='marBotProject'>
// 								{this.state.currentProjectImages.map(
// 									(currentImage: { [x: string]: string }) => (
// 										<Col sm={12} key={currentImage['id']} className='projectWrap'>
// 											<MDBAnimation type='zoomIn'>
// 												<img
// 													src={require('./../img/project/' + currentImage['src'])}
// 													alt={this.state.currentProjectName}
// 												/>
// 											</MDBAnimation>
// 										</Col>
// 									)
// 								)}
// 							</Row>
// 						</Container>
// 					</div>
// 					<Container fluid>
// 						<div className='colWrap flex wrap col-12'>
// 							<div className='iconWrap' onClick={this.prevProject}>
// 								<FontAwesomeIcon icon={faChevronLeft} className='prevIcon' />
// 							</div>
// 							<div
// 								className='iconWrap'
// 								onClick={this.changePageFromProject.bind(this, 'gallery')}>
// 								<FontAwesomeIcon icon={faTh} className='gridIcon' />
// 							</div>
// 							<div className='iconWrap' onClick={this.nextProject}>
// 								<FontAwesomeIcon icon={faChevronRight} className='nextIcon' />
// 							</div>
// 						</div>
// 					</Container>
// 					<Container fluid>
// 						<Row>
// 							<Col sm={12} className='moreProjectsWrap'>
// 								<h3 className='center marBotProject textPeach'>MORE PROJECTS</h3>
// 							</Col>
// 							<Col xs={12} sm={4} className='imgWrapDark'>
// 								<img
// 									onClick={this.moreProjects.bind(this, this.props.randomNumber[0])}
// 									src={require('./../img/thumb/' +
// 										this.state.projects[this.props.randomNumber[0]].thumb[1])}
// 									alt='Gallery'
// 								/>
// 							</Col>
// 							<Col xs={12} sm={4} className='imgWrapDark'>
// 								<img
// 									onClick={this.moreProjects.bind(this, this.props.randomNumber[1])}
// 									src={require('./../img/thumb/' +
// 										this.state.projects[this.props.randomNumber[1]].thumb[1])}
// 									alt='Gallery'
// 								/>
// 							</Col>
// 							<Col xs={12} sm={4} className='imgWrapDark'>
// 								<img
// 									onClick={this.moreProjects.bind(this, this.props.randomNumber[2])}
// 									src={require('./../img/thumb/' +
// 										this.state.projects[this.props.randomNumber[2]].thumb[1])}
// 									alt='Gallery'
// 								/>
// 							</Col>
// 						</Row>
// 					</Container>
// 				</MDBAnimation>
// 			</React.Fragment>
// 		);
// 	}
// }

// export default Project;
