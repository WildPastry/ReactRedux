// imports
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { setTheme, setImgTheme } from '../redux/slices/themeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// AppTheme
export default function AppTheme(): JSX.Element {
	// dispatch
	const dispatch = useDispatch();

	const [toggle, setToggle] = useState(false);

	const triggerToggle = () => {
		setToggle(!toggle);
		handleAppTheme();
	};

	// useSelectors for app theme and img themes
	const appTheme = useSelector((state: RootState) => {
		return state.setTheme.appTheme;
	});

	const ImgTheme = useSelector((state: RootState) => {
		return state.setTheme.imgTheme;
	});

	// handle functions for app theme and img themes
	const handleAppTheme = () => {
		let currentTheme: string;
		appTheme === 'DARK' ? (currentTheme = 'LIGHT') : (currentTheme = 'DARK');
		dispatch(setTheme(currentTheme));
	};

	const handleImgTheme = () => {
		let currentTheme: string;
		ImgTheme === 'DARK' ? (currentTheme = 'LIGHT') : (currentTheme = 'DARK');
		dispatch(setImgTheme(currentTheme));
	};

	return (
		<React.Fragment>
			<FontAwesomeIcon
				onClick={() => handleImgTheme()}
				icon={['fas', 'image']}
				className={'imgThemeIcon' + appTheme}
			/>
			<div
				onClick={triggerToggle}
				className={`wrg-toggle ${toggle ? 'wrg-toggle--checked' : ''}`}>
				<div className='wrg-toggle-container'>
					<div className='wrg-toggle-check'>
						<span>🌞</span>
					</div>
					<div className='wrg-toggle-uncheck'>
						<span>🌜</span>
					</div>
				</div>
				<div className='wrg-toggle-circle'></div>
				<input className='wrg-toggle-input' type='checkbox' aria-label='Toggle Button' />
			</div>
		</React.Fragment>
	);
}
