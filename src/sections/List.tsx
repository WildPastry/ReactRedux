import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state: { projects: any }) => {
	return { projects: state.projects };
};

const ConnectedList = ({ projects }: { projects: any }) => (
	<ul>
		{projects.map(
			(el: {
				id: React.Key;
				title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
			}) => (
				<li key={el.id}>{el.title}</li>
			)
		)}
	</ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
