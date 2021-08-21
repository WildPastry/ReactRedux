// imports
import React from 'react';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { initType } from '../utilities/type';

// Type
const Type: React.FC = () => {
	// useSelector for app theme
	const appTheme = useSelector((state: RootState) => {
		return state.setTheme.appTheme;
	});

	// handle reference to external JS fucntion
	function useHandleSpace<T extends HTMLElement>() {
		const currentRef = useRef<T>(null);
		return { ref: currentRef };
	}

	const { ref: typeRef } = useHandleSpace<HTMLDivElement>();

	// load external JS function
	useEffect(() => initType(), [appTheme]);

	return (
		<React.Fragment>
			<div className='typeWrap pad'>
				<p className={'textHide text' + appTheme}>
					<span className='textThis'>this </span>stack using react
					<span className='textLightGrey text400'> / </span>redux
					<span className='textLightGrey text400'> / </span>typescript
				</p>
				<div
					id='type'
					className={'text' + appTheme}
					ref={typeRef as React.RefObject<HTMLDivElement>}
				/>
			</div>
			<div className='lineNoMar' />
		</React.Fragment>
	);
};

// EXPORT Type
Type.displayName = 'Type';
export default Type;