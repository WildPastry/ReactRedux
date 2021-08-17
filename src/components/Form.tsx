import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProject } from '../redux/actions/projectActions';

function mapDispatchToProps(dispatch: (arg0: any) => any) {
	return {
		setProject: (project: any) => dispatch(setProject(project))
	};
}

class ConnectedForm extends Component<{}, { title: any }> {
	constructor(props: any) {
		super(props);
		this.state = {
			title: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event: { target: { id: any; value: any } }) {
		this.setState({ title: 'THIS' });
	}

	handleSubmit(event: { preventDefault: () => void }) {
		event.preventDefault();
		const { title } = this.state;
		// this.props.setProject({ title });
		this.setState({ title: '' });
	}
	render() {
		const { title } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor='title'>Title</label>
					<input type='text' id='title' value={title} onChange={this.handleChange} />
				</div>
				<button type='submit'>SAVE</button>
			</form>
		);
	}
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
