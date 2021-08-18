import React from 'react';

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
	filtered,
	id,
	name,
	fields,
	onClick
}: ProjectProps) {
	return (
		<div className='row'>
			<li
				onClick={onClick}
				style={{
					color: 'white',
					textDecoration: filtered ? 'line-through' : 'none'
				}}>
				{id} {name}
			</li>
			<li style={{ color: 'white' }}>
				{fields.map((field) => (
					<span key={field.id}>{field.src}</span>
				))}
			</li>
		</div>
	);
}
