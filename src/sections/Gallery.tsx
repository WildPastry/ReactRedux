import React from 'react';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBAnimation } from 'mdbreact';
import SetProjects from '../features/SetProjects';
import ProjectGallery from '../features/ProjectGallery';
import ProjectFilters from '../features/ProjectFilters';

// Gallery
const Gallery: React.FC = () => {
	return (
		<React.Fragment>
			<MDBAnimation type='fadeIn'>
				<Row className='wrap'>
					<ProjectFilters />
					<div className='filterWrap flex pad'>
						<h4 className='filterItemDark'>ALL</h4>
						<h4 className='filterItemDark'>UI/UX</h4>
						<h4 className='filterItemDark'>TypeScript</h4>
						<h4 className='filterItemDark'>JavaScript</h4>
						<h4 className='filterItemDark'>JQuery</h4>
						<h4 className='filterItemDark'>React</h4>
						<h4 className='filterItemDark'>Native</h4>
						<h4 className='filterItemDark'>API</h4>
						<h4 className='filterItemDark'>PHP</h4>
						<h4 className='filterItemDark'>Graphic</h4>
					</div>
					<div className='galleryWrap flex pad'>
						<img
							className='galleryRGBIcon'
							src={require('./../icon/rgb.svg')}
							alt='RBG Icon'
						/>
						<div>
							<FontAwesomeIcon
								icon={['fas', 'fill-drip']}
								className={'galleryFillIconDark'}
							/>
						</div>
					</div>
				</Row>
			</MDBAnimation>
			<ProjectGallery />
			<SetProjects />
		</React.Fragment>
	);
};

// EXPORT Gallery
Gallery.displayName = 'Gallery';
export default Gallery;

// class Gallery extends Component<any, any> {
// 	props: any;
// 	constructor(props: any) {
// 		super(props);
// 		this.state = {
// 			lessMore: true,
// 			currentSize: 9,
// 			currentProjects: [],
// 			currentText: 'MORE PROJECTS [ ... ]'
// 		};
// 		this.changePageFromGallery = this.changePageFromGallery.bind(this);
// 	}

// 	changePageFromGallery(value: any) {
// 		this.props.randomProject();
// 		var options = {
// 			page: 'project',
// 			project: value[0],
// 			projectName: value[1],
// 			projectFields: value[2],
// 			projectClient: value[3],
// 			projectTimeline: value[4],
// 			projectWebsite: value[5],
// 			projectThumb: value[6],
// 			projectImages: value[7],
// 			projectIcons: value[8],
// 			projectIntro: value[9],
// 			projectDesc: value[10],
// 			projectUrl: value[11],
// 			projectGit: value[12],
// 			projectGitUrl: value[13]
// 		};
// 		this.props.changePageFromGallery(options);
// 		window.scrollTo(0, 0);
// 	}

// 	recentProjects = (size: number) => {
// 		var lessMore;
// 		if (size === 9) {
// 			lessMore = true;
// 		} else if (size === 18) {
// 			lessMore = false;
// 		}

// 		this.setState({
// 			currentSize: size,
// 			lessMore: lessMore
// 		});
// 	};

// 	render() {
// 		function getRandomInt(max: number) {
// 			return Math.floor(Math.random() * max);
// 		}
// 		const renderLessMore = () => {
// 			if (this.state.lessMore) {
// 				return (
// 					<h4 className={this.props.loadMore} onClick={() => this.recentProjects(18)}>
// 						SHOW MORE PROJECTS <span className={this.props.singleProjectName}>[ </span>
// 						<span className={this.props.singleProjectDesc}>
// 							...
// 						</span>{' '}
// 						<span className={this.props.singleProjectName}>]</span>
// 					</h4>
// 				);
// 			} else {
// 				return (
// 					<h4 className={this.props.loadMore} onClick={() => this.recentProjects(9)}>
// 						SHOW LESS PROJECTS <span className={this.props.singleProjectName}>[ </span>
// 						<span className={this.props.singleProjectDesc}>
// 							...
// 						</span>{' '}
// 						<span className={this.props.singleProjectName}>]</span>
// 					</h4>
// 				);
// 			}
// 		};

// 		return (
// 			<React.Fragment>
// 				<Row>
// 					{this.props.projects.slice(0, this.state.currentSize).map(
// 						(singleProject: {
// 							id: React.Key;
// 							name: React.ReactNode;
// 							fields: Array<[]>;
// 							client: React.ReactNode;
// 							timeline: React.ReactNode;
// 							website: React.ReactNode;
// 							thumb: string;
// 							images: Array<[]>;
// 							icons: Array<[]>;
// 							intro: string;
// 							desc: string;
// 							url: string;
// 							git: string;
// 							gitUrl: string;
// 						}) => (
// 							<div key={singleProject.id} className={this.props.imgTheme}>
// 								<MDBAnimation type='zoomIn'>
// 									<img
// 										onClick={this.changePageFromGallery.bind(this, [
// 											singleProject.id,
// 											singleProject.name,
// 											singleProject.fields,
// 											singleProject.client,
// 											singleProject.timeline,
// 											singleProject.website,
// 											singleProject.thumb,
// 											singleProject.images,
// 											singleProject.icons,
// 											singleProject.intro,
// 											singleProject.desc,
// 											singleProject.url,
// 											singleProject.git,
// 											singleProject.gitUrl
// 										])}
// 										src={require('./../img/thumb/' +
// 											singleProject.thumb[getRandomInt(2)])}
// 										alt='Gallery'
// 									/>
// 								</MDBAnimation>
// 								<div className='descriptionWrap'>
// 									<p className={this.props.singleProjectName}>{singleProject.name}</p>
// 									<p>
// 										<span className={this.props.singleProjectDesc}>
// 											{singleProject.fields[0]}
// 											<span className='textLightGrey text400'> / </span>
// 											{singleProject.fields[1]}
// 											<span className='textLightGrey text400'> / </span>
// 											{singleProject.fields[2]}
// 										</span>
// 									</p>
// 								</div>
// 							</div>
// 						)
// 					)}
// 				</Row>
// 				<Row>
// 					<Col className='pad'>{renderLessMore()}</Col>
// 						<SetProjects />
// 						<ProjectGallery />
// 						<ProjectFilters />
// 				</Row>
// 			</React.Fragment>
// 		);
// 	}
// }

// export default Gallery;
