import React from 'react';
import SetProjects from '../components/SetProjects';
import ProjectGallery from '../components/ProjectGallery';
import ProjectFilters from '../components/ProjectFilters';
import AppTheme from '../components/AppTheme';
import { Row } from 'react-bootstrap';

// Gallery
const Gallery: React.FC = () => {
	return (
		<React.Fragment>
			<Row className='wrap'>
			<ProjectFilters />
			<AppTheme />
		</Row>
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
