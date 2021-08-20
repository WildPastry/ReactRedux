// imports
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { setTheme, setImgTheme } from '../redux/slices/themeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// AppTheme
export default function AppTheme(): JSX.Element {
	// dispatch
	const dispatch = useDispatch();

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
		<div className='galleryWrap flex pad'>
			<h4 className={'textWhite text400'}>THEME</h4>
			<img
				onClick={() => handleImgTheme()}
				className='galleryRGBIcon'
				src={require('./../icon/rgb.svg')}
				alt='RBG Icon'
			/>
			<div>
				<FontAwesomeIcon
					onClick={() => handleAppTheme()}
					icon={['fas', 'fill-drip']}
					className={'galleryFillIconDark'}
				/>
			</div>
		</div>
	);
}
