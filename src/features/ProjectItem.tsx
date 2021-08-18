import React from 'react';
import { MDBAnimation } from 'mdbreact';

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

export default function ProjectItem({
	id,
	name,
	fields,
	client,
	timeline,
	website,
	thumb,
	images,
	icons,
	intro,
	desc,
	url,
	git,
	gitUrl,
	filtered,
	onClick
}: ProjectProps) {
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
	return (
    <React.Fragment>
		<div className='imgWrapDark col-xs-12 col-sm-6 col-md-4 col-lg-4'>
      <MDBAnimation type='zoomIn'>
			{/* <li
				onClick={onClick}
				style={{
					color: 'white',
					textDecoration: filtered ? 'line-through' : 'none'
				}}>
				{id} {name}
			</li> */}
				
					{/* <span key={field.id}>{field.src}</span> */}
				<img src={require('./../img/thumb/' + thumb[getRandomInt(2)])} alt={name} />
      </MDBAnimation>
      <div className='descriptionWrap'>
      {/* {fields.map((field) => ( */}
									<p className={'textWhite text700'}>{name}</p>
									<p>
										<span className={'textSpotGrey text400'}>
											{fields[0].src}
											<span className='textLightGrey text400'> / </span>
											...
											<span className='textLightGrey text400'> / </span>
											...
										</span>
									</p>
								</div>
              
		</div>
            </React.Fragment>

	);
}
