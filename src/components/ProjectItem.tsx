// imports
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { MDBAnimation } from 'mdbreact';

// set up ProjectProps interface
interface ProjectProps {
	id: string;
	name: string;
	fields: any[];
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
	name,
	fields,
	thumb,
	filtered,
	onClick
}: ProjectProps): JSX.Element {
	// useSelectors for app and img themes
	const appTheme = useSelector((state: RootState) => {
		return state.setTheme.appTheme;
	});
	const ImgTheme = useSelector((state: RootState) => {
		return state.setTheme.imgTheme;
	});
	// display random thumbnail
	function getRandomInt(max: number) {
		return Math.floor(Math.random() * max);
	}
	return (
		<React.Fragment>
			<div className={'col-xs-12 col-sm-6 col-md-4 col-lg-4 imgWrap' + ImgTheme}>
				<MDBAnimation type='zoomIn'>
					<img src={require('./../img/thumb/' + thumb[getRandomInt(2)])} alt={name} />
				</MDBAnimation>
				<div className='descriptionWrap'>
					<p
						onClick={onClick}
						style={{
							textDecoration: filtered ? 'line-through' : 'none'
						}}
						className={'text700 textMed' + appTheme}>
						{name}
					</p>
					<p className={'text400 textFlip' + appTheme}>
						{fields[0]}
						<span className='textLightGrey text400'> / </span>
						{fields[1]}
						<span className='textLightGrey text400'> / </span>
						{fields[2]}
					</p>
				</div>
			</div>
		</React.Fragment>
	);
}
