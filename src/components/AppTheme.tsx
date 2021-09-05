// imports
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { setTheme } from '../redux/slices/themeSlice';

// AppTheme
export default function AppTheme(): JSX.Element {
	// dispatch
	const dispatch = useDispatch();

	// trigger the toggle of dark/light mode
	const [toggle, setToggle] = useState(false);

	const triggerToggle = () => {
		setToggle(!toggle);
		handleAppTheme();
	};

	// useSelector for app theme
	const appTheme = useSelector((state: RootState) => {
		return state.setTheme.appTheme;
	});

	// handle function for app theme
	const handleAppTheme = () => {
		let currentTheme: string;
		appTheme === 'DARK' ? (currentTheme = 'LIGHT') : (currentTheme = 'DARK');
		dispatch(setTheme(currentTheme));
	};

	return (
		<section aria-label='Dark And Light Mode Section'>
			<div
				onClick={triggerToggle}
				className={`appTheme ${toggle ? 'appThemeChecked' : ''}`}>
				<div className='appThemeContainer'>
					<div className='appThemeCheck'>
						<span role='img' aria-label='Activate Dark Mode'>🌞</span>
					</div>
					<div className='appThemeUncheck'>
						<span role='img' aria-label='Activate Light Mode'>🌜</span>
					</div>
				</div>
				<div className='appThemeCircle'></div>
				<input className='appThemeInput' type='checkbox' aria-label='Toggle Button' />
			</div>
		</section>
	);
}
