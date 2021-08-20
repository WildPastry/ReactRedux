// imports
import React from 'react';
import { MDBAnimation } from 'mdbreact';

// set up ProjectProps interface
interface ProjectProps {
	id: string;
	name: string;
	fields: [{ src: string; id: string }];
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
}: ProjectProps) {
	function getRandomInt(max: number) {
		return Math.floor(Math.random() * max);
	}
	return (
		<React.Fragment>
			<div className='imgWrapDARK col-xs-12 col-sm-6 col-md-4 col-lg-4'>
				<MDBAnimation type='zoomIn'>
					<img src={require('./../img/thumb/' + thumb[getRandomInt(2)])} alt={name} />
				</MDBAnimation>
				<div className='descriptionWrap'>
					<p
						onClick={onClick}
						style={{
							textDecoration: filtered ? 'line-through' : 'none'
						}}
						className={'textWhite text700'}>
						{name}
					</p>
					<p className={'textSpotGrey text400'}>
						{fields.map((field) => (
							<span key={field.id} className='me-2'>
								{field.src}
								{/* <span className='textLightGrey text400'> / </span> */}
							</span>
						))}
					</p>
				</div>
			</div>
		</React.Fragment>
	);
}
