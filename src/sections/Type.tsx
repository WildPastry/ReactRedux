// IMPORTS
import React, { Component } from 'react';
import { initType } from '../data/type';

// CLASS TYPE
class Type extends Component<any, any> {
	private type: React.RefObject<HTMLDivElement>;
	props: any;
	// TYPE STATE
	constructor(props: any) {
		super(props);
		this.type = React.createRef();
	}

	// INITIATE FUNCTION ON LOAD
	componentDidMount() {
		initType();
	}

	// RENDER COMPONENT
	render() {
		// RETURN
		return (
			// FRAGMENT
			<React.Fragment>
				<div className='typeWrap pad'>
					{/* THIS SITE */}
						<p className={this.props.thisType}>
							<span className='textThis'>this </span>stack using react<span className='textLightGrey text400'> / </span>redux<span className='textLightGrey text400'> / </span>typescript
						</p>
					{/* ANIMATED TYPE */}
					<div id='type' className={this.props.type} ref={this.type} />
				</div>
				<div className='lineNoMar' />
			</React.Fragment>
		);
	}
	// INITIATE ERROR
	initType(): React.ReactNode {
		throw new Error('Method not implemented.');
	}
}

// EXPORT
export default Type;
