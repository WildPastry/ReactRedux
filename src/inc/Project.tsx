// IMPORTS
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBAnimation } from 'mdbreact';

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
			currentProjectGitUrl: this.props.currentProjectGitUrl,
		};
		this.prevProject = this.prevProject.bind(this);
		this.nextProject = this.nextProject.bind(this);
		this.changeProject = this.changeProject.bind(this);
		this.moreProjects = this.moreProjects.bind(this);
		this.changePageFromProject = this.changePageFromProject.bind(this);
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
			currentProjectGitUrl: '',
		});
	}

	// PREVIOUS PROJECT FUNCTION
	prevProject() {
		this.props.randomProject();
		window.scrollTo(0, 0);
		var i;
		if (this.state.currentProject === '001') {
			i = 11;
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
			currentProjectGitUrl: this.state.projects[i].gitUrl,
		});
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
			currentProjectGitUrl: this.state.projects[i].gitUrl,
		});
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
			currentProjectGitUrl: this.state.projects[j].gitUrl,
		});
	}

	// CHANGE PAGE FUNCTION
	changePageFromProject(value: any) {
		window.scrollTo(0, 0);
		this.props.changePageFromProject(value);
	}

	// RENDER COMPONENT
	render() {
		// RETURN
		return (
			// FRAGMENTS AND ANIMATION
			<React.Fragment>
				<MDBAnimation type='fadeIn'>
					{/* DESCRIPTION */}
					<div className='container-fluid responsiveMar'>
						<div className='row wrap marBotProject'>
							<div className='colWrap col-12'>
								{/* HEADING */}
								<h1 className={this.props.projectHeading}>{this.state.currentProjectName}</h1>
							</div>
							<div className='colWrap col-sm-12 col-lg-7'>
								{/* INTRO */}
								<h2 className={this.props.projectIntro}>{this.state.currentProjectIntro}</h2>
								<br />
								{/* BODY */}
								<p className={this.props.projectDesc}>{this.state.currentProjectDesc}</p>
							</div>
							{/* PROJECT DETAILS */}
							<div className='colWrap right col-sm-12 col-lg-5'>
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
							</div>
							{/* LINE BREAK */}
							<div className='colWrap col-12'>
								<div className='lineThin mar' />
							</div>
							{/* TOP PROJECT CONTROL ICONS */}
							<div className='colWrap flex wrap col-12'>
								{/* PREVIOUS PROJECT ICON */}
								<div className='iconWrap' onClick={this.prevProject}>
									<FontAwesomeIcon icon={['fas', 'chevron-left']} className='prevIcon' />
								</div>
								{/* GALLERY ICON */}
								<div
									className='iconWrap'
									onClick={this.changePageFromProject.bind(this, 'gallery')}>
									<FontAwesomeIcon icon={['fas', 'th']} className='gridIcon' />
								</div>
								{/* NEXT PROJECT ICON */}
								<div className='iconWrap' onClick={this.nextProject}>
									<FontAwesomeIcon icon={['fas', 'chevron-right']} className='nextIcon' />
								</div>
							</div>
						</div>
					</div>
					{/* IMAGES */}
					<div className={this.props.projectRow}>
						<div className='container-fluid'>
							<div className='row marBotProject'>
								{/* IMAGE MAP */}
								{this.state.currentProjectImages.map((currentImage: { [x: string]: string }) => (
									<div
										key={currentImage['id']}
										className='projectWrap col-12'>
										<MDBAnimation type='zoomIn'>
											{/* IMAGE LOOP PULLED FROM JSON */}
											<img
												src={require('./../img/project/' + currentImage['src'])}
												alt={this.state.currentProjectName}
											/>
										</MDBAnimation>
									</div>
								))}
							</div>
						</div>
					</div>
					{/* BOTTOM PROJECT CONTROL ICONS */}
					<div className='container-fluid'>
						<div className='colWrap flex wrap col-12'>
							{/* PREVIOUS PROJECT ICON */}
							<div className='iconWrap' onClick={this.prevProject}>
								<FontAwesomeIcon icon={['fas', 'chevron-left']} className='prevIcon' />
							</div>
							{/* GALLERY ICON */}
							<div className='iconWrap' onClick={this.changePageFromProject.bind(this, 'gallery')}>
								<FontAwesomeIcon icon={['fas', 'th']} className='gridIcon' />
							</div>
							{/* NEXT PROJECT ICON */}
							<div className='iconWrap' onClick={this.nextProject}>
								<FontAwesomeIcon icon={['fas', 'chevron-right']} className='nextIcon' />
							</div>
						</div>
					</div>
					{/* MORE PROJECTS */}
					<div className='container-fluid'>
						<div className='row'>
							<div className='moreProjectsWrap col-12'>
								{/* HEADING */}
								<h3 className='center marBotProject textPeach'>more projects</h3>
							</div>
							<div className='imgWrapDark col-sm-12 col-lg-4'>
								{/* RANDOM PROJECT IMAGE 1 */}
								<img
									onClick={this.moreProjects.bind(this, this.props.randomNumber[0])}
									src={require('./../img/thumb/' +
										this.state.projects[this.props.randomNumber[0]].thumb[1])}
									alt='Gallery'
								/>
							</div>
							<div className='imgWrapDark col-sm-12 col-lg-4'>
								{/* RANDOM PROJECT IMAGE 2 */}
								<img
									onClick={this.moreProjects.bind(this, this.props.randomNumber[1])}
									src={require('./../img/thumb/' +
										this.state.projects[this.props.randomNumber[1]].thumb[1])}
									alt='Gallery'
								/>
							</div>
							<div className='imgWrapDark col-sm-12 col-lg-4'>
								{/* RANDOM PROJECT IMAGE 3 */}
								<img
									onClick={this.moreProjects.bind(this, this.props.randomNumber[2])}
									src={require('./../img/thumb/' +
										this.state.projects[this.props.randomNumber[2]].thumb[1])}
									alt='Gallery'
								/>
							</div>
						</div>
					</div>
				</MDBAnimation>
			</React.Fragment>
		);
	}
}

// EXPORT
export default Project;
