// IMPORTS
import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTh } from '@fortawesome/free-solid-svg-icons';
import { MDBAnimation } from 'mdbreact';

// import store from '../redux';

// CLASS PROJECT
class Project extends Component<any, any> {
	// PROJECT STATE
	constructor(props: any) {
		super(props);
		this.state = {
			// STATE FROM EXTERNAL PROPS
			projects: this.props.projects,
			currentProject: this.props.currentProject,
			currentProjectName: this.props.currentProjectName,
			currentProjectFields: this.props.currentProjectFields,
			currentProjectClient: this.props.currentProjectClient,
			currentProjectTimeline: this.props.currentProjectTimeline,
			currentProjectWebsite: this.props.currentProjectWebsite,
			currentProjectThumb: this.props.currentProjectThumb,
			currentProjectImages: this.props.currentProjectImages,
			currentProjectIcons: this.props.currentProjectIcons,
			currentProjectIntro: this.props.currentProjectIntro,
			currentProjectDesc: this.props.currentProjectDesc,
			currentProjectUrl: this.props.currentProjectUrl,
			currentProjectGit: this.props.currentProjectGit,
			currentProjectGitUrl: this.props.currentProjectGitUrl
		};
		this.prevProject = this.prevProject.bind(this);
		this.nextProject = this.nextProject.bind(this);
		this.changeProject = this.changeProject.bind(this);
		this.moreProjects = this.moreProjects.bind(this);
		this.changePageFromProject = this.changePageFromProject.bind(this);
		this.changeProjectName = this.changeProjectName.bind(this);
	}

	// CHANGE PROJECT NAME
	changeProjectName(value: any) {
		this.props.changeProjectName(value);
	}

	// CHANGE PROJECT FUNCTION
	changeProject() {
		this.setState({
			// SET EMPTY DATA STATES
			currentProject: '',
			currentProjectName: '',
			currentProjectFields: [],
			currentProjectClient: '',
			currentProjectTimeline: '',
			currentProjectWebsite: '',
			currentProjectThumb: '',
			currentProjectImages: [],
			currentProjectIcons: [],
			currentProjectIntro: '',
			currentProjectDesc: '',
			currentProjectUrl: '',
			currentProjectGit: '',
			currentProjectGitUrl: ''
		});
	}

	// PREVIOUS PROJECT FUNCTION
	prevProject() {
		this.props.randomProject();
		window.scrollTo(0, 0);
		var i;
		if (this.state.currentProject === '001') {
			i = 13;
		} else if (this.state.currentProject === '002') {
			i = 0;
		} else if (this.state.currentProject === '003') {
			i = 1;
		} else if (this.state.currentProject === '004') {
			i = 2;
		} else if (this.state.currentProject === '005') {
			i = 3;
		} else if (this.state.currentProject === '006') {
			i = 4;
		} else if (this.state.currentProject === '007') {
			i = 5;
		} else if (this.state.currentProject === '008') {
			i = 6;
		} else if (this.state.currentProject === '009') {
			i = 7;
		} else if (this.state.currentProject === '010') {
			i = 8;
		} else if (this.state.currentProject === '011') {
			i = 9;
		} else if (this.state.currentProject === '012') {
			i = 10;
		} else if (this.state.currentProject === '013') {
			i = 11;
		} else if (this.state.currentProject === '014') {
			i = 12;
		} else if (this.state.currentProject === '015') {
			i = 13;
		} else if (this.state.currentProject === '016') {
			i = 14;
		} else if (this.state.currentProject === '017') {
			i = 15;
		} else if (this.state.currentProject === '018') {
			i = 16;
		} else if (this.state.currentProject === '019') {
			i = 17;
		} else if (this.state.currentProject === '020') {
			i = 18;
		} else if (this.state.currentProject === '021') {
			i = 19;
		} else if (this.state.currentProject === '022') {
			i = 20;
		} else if (this.state.currentProject === '023') {
			i = 21;
		} else if (this.state.currentProject === '024') {
			i = 22;
		}
		this.setState({
			// SET STATE WITH DATA
			currentProject: this.state.projects[i].id,
			currentProjectName: this.state.projects[i].name,
			currentProjectFields: this.state.projects[i].fields,
			currentProjectClient: this.state.projects[i].client,
			currentProjectTimeline: this.state.projects[i].timeline,
			currentProjectWebsite: this.state.projects[i].website,
			currentProjectThumb: this.state.projects[i].thumb,
			currentProjectImages: this.state.projects[i].images,
			currentProjectIcons: this.state.projects[i].icons,
			currentProjectIntro: this.state.projects[i].intro,
			currentProjectDesc: this.state.projects[i].desc,
			currentProjectUrl: this.state.projects[i].url,
			currentProjectGit: this.state.projects[i].git,
			currentProjectGitUrl: this.state.projects[i].gitUrl
		});
		this.changeProjectName(this.state.projects[i].name);
	}

	// NEXT PROJECT FUNCTION
	nextProject() {
		this.props.randomProject();
		window.scrollTo(0, 0);
		var i;
		if (this.state.currentProject === '001') {
			i = 1;
		} else if (this.state.currentProject === '002') {
			i = 2;
		} else if (this.state.currentProject === '003') {
			i = 3;
		} else if (this.state.currentProject === '004') {
			i = 4;
		} else if (this.state.currentProject === '005') {
			i = 5;
		} else if (this.state.currentProject === '006') {
			i = 6;
		} else if (this.state.currentProject === '007') {
			i = 7;
		} else if (this.state.currentProject === '008') {
			i = 8;
		} else if (this.state.currentProject === '009') {
			i = 9;
		} else if (this.state.currentProject === '010') {
			i = 10;
		} else if (this.state.currentProject === '011') {
			i = 11;
		} else if (this.state.currentProject === '012') {
			i = 12;
		} else if (this.state.currentProject === '013') {
			i = 13;
		} else if (this.state.currentProject === '014') {
			i = 14;
		} else if (this.state.currentProject === '015') {
			i = 15;
		} else if (this.state.currentProject === '016') {
			i = 16;
		} else if (this.state.currentProject === '017') {
			i = 17;
		} else if (this.state.currentProject === '018') {
			i = 18;
		} else if (this.state.currentProject === '019') {
			i = 19;
		} else if (this.state.currentProject === '020') {
			i = 20;
		} else if (this.state.currentProject === '021') {
			i = 21;
		} else if (this.state.currentProject === '022') {
			i = 22;
		} else if (this.state.currentProject === '023') {
			i = 23;
		} else if (this.state.currentProject === '024') {
			i = 0;
		}
		this.setState({
			// SET STATE WITH DATA
			currentProject: this.state.projects[i].id,
			currentProjectName: this.state.projects[i].name,
			currentProjectFields: this.state.projects[i].fields,
			currentProjectClient: this.state.projects[i].client,
			currentProjectTimeline: this.state.projects[i].timeline,
			currentProjectWebsite: this.state.projects[i].website,
			currentProjectThumb: this.state.projects[i].thumb,
			currentProjectImages: this.state.projects[i].images,
			currentProjectIcons: this.state.projects[i].icons,
			currentProjectIntro: this.state.projects[i].intro,
			currentProjectDesc: this.state.projects[i].desc,
			currentProjectUrl: this.state.projects[i].url,
			currentProjectGit: this.state.projects[i].git,
			currentProjectGitUrl: this.state.projects[i].gitUrl
		});
		this.changeProjectName(this.state.projects[i].name);
	}

	// RANDOM PROJECTS BEFORE FOOTER
	moreProjects(value: any) {
		this.props.randomProject();
		window.scrollTo(0, 0);
		var j;
		if (value === 0) {
			j = 0;
		} else if (value === 1) {
			j = 1;
		} else if (value === 2) {
			j = 2;
		} else if (value === 3) {
			j = 3;
		} else if (value === 4) {
			j = 4;
		} else if (value === 5) {
			j = 5;
		} else if (value === 6) {
			j = 6;
		} else if (value === 7) {
			j = 7;
		} else if (value === 8) {
			j = 8;
		} else if (value === 9) {
			j = 9;
		} else if (value === 10) {
			j = 10;
		} else if (value === 11) {
			j = 11;
		} else if (value === 12) {
			j = 12;
		} else if (value === 13) {
			j = 13;
		} else if (value === 14) {
			j = 14;
		} else if (value === 15) {
			j = 15;
		} else if (value === 16) {
			j = 16;
		} else if (value === 17) {
			j = 17;
		} else if (value === 18) {
			j = 18;
		} else if (value === 19) {
			j = 19;
		} else if (value === 20) {
			j = 20;
		} else if (value === 21) {
			j = 21;
		} else if (value === 22) {
			j = 22;
		} else if (value === 23) {
			j = 23;
		} else if (value === 24) {
			j = 24;
		}
		this.setState({
			// SET STATE WITH DATA
			currentProject: this.state.projects[j].id,
			currentProjectName: this.state.projects[j].name,
			currentProjectFields: this.state.projects[j].fields,
			currentProjectClient: this.state.projects[j].client,
			currentProjectTimeline: this.state.projects[j].timeline,
			currentProjectWebsite: this.state.projects[j].website,
			currentProjectThumb: this.state.projects[j].thumb,
			currentProjectImages: this.state.projects[j].images,
			currentProjectIcons: this.state.projects[j].icons,
			currentProjectIntro: this.state.projects[j].intro,
			currentProjectDesc: this.state.projects[j].desc,
			currentProjectUrl: this.state.projects[j].url,
			currentProjectGit: this.state.projects[j].git,
			currentProjectGitUrl: this.state.projects[j].gitUrl
		});
	}

	// CHANGE PAGE FUNCTION
	changePageFromProject(value: any) {
		window.scrollTo(0, 0);
		this.props.changePageFromProject(value);
	}

	// RENDER COMPONENT
	render() {

		// console.log(store.getState())
		// Object.defineProperty(window, 'reduxStore', {
		// 	get() {
		// 		return store.getState();
		// 	},
		// });

		// RETURN
		return (
			// FRAGMENTS AND ANIMATION
			<React.Fragment>
				<MDBAnimation type='fadeIn'>
					{/* DESCRIPTION */}
					<Container fluid className='responsiveMar'>
						<Row className='wrap marBotProject'>
							<Col sm={12} className='colWrap'>
								{/* HEADING */}
								<h1 className={this.props.projectHeading}>
									{this.state.currentProjectName}
								</h1>
							</Col>
							<Col sm={12} lg={7} className='colWrap'>
								{/* INTRO */}
								<h2 className={this.props.projectIntro}>
									{this.state.currentProjectIntro}
								</h2>
								<br />
								{/* BODY */}
								<p className={this.props.projectDesc}>{this.state.currentProjectDesc}</p>
							</Col>
							{/* PROJECT DETAILS */}
							<Col sm={12} lg={5} className='colWrap right'>
								<ul>
									<li className='projectListItem'>
										{/* FIELDS */}
										<span className={this.props.projectDetails}>
											{this.state.currentProjectFields[0]}
											<span className='textLightGrey text700'> / </span>
											{this.state.currentProjectFields[1]}
											<span className='textLightGrey text700'> / </span>
											{this.state.currentProjectFields[2]}
										</span>
									</li>
									<li className='projectListItem'>
										{/* CLIENT */}
										<span className={this.props.projectDetails}>
											{this.state.currentProjectClient}
										</span>
									</li>
									<li className='projectListItem'>
										{/* TIMELINE */}
										<span className={this.props.projectDetails}>
											{this.state.currentProjectTimeline}
										</span>
									</li>
									<li className='projectListItem marTop projectListItemVisible'>
										{/* WEBSITE */}
										<span className={this.props.projectDetails}>
											<a
												target='_blank'
												rel='noopener noreferrer'
												className={this.props.link}
												href={this.state.currentProjectUrl}>
												{this.state.currentProjectWebsite}
											</a>
										</span>
									</li>
									<li className='projectListItem projectListItemVisible'>
										{/* GITHUB */}
										<span className={this.props.projectDetails}>
											<a
												target='_blank'
												rel='noopener noreferrer'
												className={this.props.link}
												href={this.state.currentProjectGitUrl}>
												{this.state.currentProjectGit}
											</a>
										</span>
									</li>
								</ul>
								{/* TOOLS */}
								<div className='projectIconsWrap responsiveWrap'>
									{this.state.currentProjectIcons.map((currentIcon: any) => (
										<FontAwesomeIcon
											key={currentIcon['id']}
											icon={['fab', currentIcon['src']]}
											className='projectIcon'
										/>
									))}
								</div>
							</Col>
							{/* LINE BREAK */}
							<Col sm={12} className='colWrap'>
								<div className='lineThin mar' />
							</Col>
							{/* TOP PROJECT CONTROL ICONS */}
							<Col sm={12} className='colWrap flex wrap'>
								{/* PREVIOUS PROJECT ICON */}
								<div className='iconWrap' onClick={this.prevProject}>
									<FontAwesomeIcon icon={faChevronLeft} className='prevIcon' />
								</div>
								{/* GALLERY ICON */}
								<div
									className='iconWrap'
									onClick={this.changePageFromProject.bind(this, 'gallery')}>
									<FontAwesomeIcon icon={faTh} className='gridIcon' />
								</div>
								{/* NEXT PROJECT ICON */}
								<div className='iconWrap' onClick={this.nextProject}>
									<FontAwesomeIcon icon={faChevronRight} className='nextIcon' />
								</div>
							</Col>
						</Row>
					</Container>
					{/* IMAGES */}
					<div className={this.props.projectRow}>
						<Container fluid>
							<Row className='marBotProject'>
								{/* IMAGE MAP */}
								{this.state.currentProjectImages.map(
									(currentImage: { [x: string]: string }) => (
										<Col sm={12} key={currentImage['id']} className='projectWrap'>
											<MDBAnimation type='zoomIn'>
												{/* IMAGE LOOP INSIDE MAP */}
												<img
													src={require('./../img/project/' + currentImage['src'])}
													alt={this.state.currentProjectName}
												/>
											</MDBAnimation>
										</Col>
									)
								)}
							</Row>
						</Container>
					</div>
					{/* BOTTOM PROJECT CONTROL ICONS */}
					<Container fluid>
						<div className='colWrap flex wrap col-12'>
							{/* PREVIOUS PROJECT ICON */}
							<div className='iconWrap' onClick={this.prevProject}>
								<FontAwesomeIcon icon={faChevronLeft} className='prevIcon' />
							</div>
							{/* GALLERY ICON */}
							<div
								className='iconWrap'
								onClick={this.changePageFromProject.bind(this, 'gallery')}>
								<FontAwesomeIcon icon={faTh} className='gridIcon' />
							</div>
							{/* NEXT PROJECT ICON */}
							<div className='iconWrap' onClick={this.nextProject}>
								<FontAwesomeIcon icon={faChevronRight} className='nextIcon' />
							</div>
						</div>
					</Container>
					{/* MORE PROJECTS */}
					<Container fluid>
						<Row>
							<Col sm={12} className='moreProjectsWrap'>
								{/* HEADING */}
								<h3 className='center marBotProject textPeach'>MORE PROJECTS</h3>
							</Col>
							<Col xs={12} sm={4} className='imgWrapDark'>
								{/* RANDOM PROJECT IMAGE 1 */}
								<img
									onClick={this.moreProjects.bind(this, this.props.randomNumber[0])}
									src={require('./../img/thumb/' +
										this.state.projects[this.props.randomNumber[0]].thumb[1])}
									alt='Gallery'
								/>
							</Col>
							<Col xs={12} sm={4} className='imgWrapDark'>
								{/* RANDOM PROJECT IMAGE 2 */}
								<img
									onClick={this.moreProjects.bind(this, this.props.randomNumber[1])}
									src={require('./../img/thumb/' +
										this.state.projects[this.props.randomNumber[1]].thumb[1])}
									alt='Gallery'
								/>
							</Col>
							<Col xs={12} sm={4} className='imgWrapDark'>
								{/* RANDOM PROJECT IMAGE 3 */}
								<img
									onClick={this.moreProjects.bind(this, this.props.randomNumber[2])}
									src={require('./../img/thumb/' +
										this.state.projects[this.props.randomNumber[2]].thumb[1])}
									alt='Gallery'
								/>
							</Col>
						</Row>
					</Container>
				</MDBAnimation>
			</React.Fragment>
		);
	}
}

// EXPORT
export default Project;