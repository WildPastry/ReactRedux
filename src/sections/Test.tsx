// IMPORTS
import React from 'react';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { connect } from 'react-redux';

const Test = (props: { title: boolean | ReactChild | ReactFragment | ReactPortal }) => {
	return (
		<div>
			<h1>{props.title}</h1>
		</div>
	);
};

const mapStateToProps = (state: { title: any }) => {
	return {
		title: state.title
	};
};

export default connect(mapStateToProps)(Test);
