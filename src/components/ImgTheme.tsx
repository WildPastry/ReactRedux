// imports
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { setImgTheme } from '../redux/slices/themeSlice';

// ImgTheme
export default function ImgTheme(): JSX.Element {
	// dispatch
	const dispatch = useDispatch();

	// useSelector for img theme
	const ImgTheme = useSelector((state: RootState) => {
		return state.setTheme.imgTheme;
	});

	// handle function for img theme
	const handleImgTheme = () => {
		let currentTheme: string;
		ImgTheme === 'DARK' ? (currentTheme = 'LIGHT') : (currentTheme = 'DARK');
		dispatch(setImgTheme(currentTheme));
	};

	return (
		<React.Fragment>
			<img
				className={'imgThemeIcon' + ImgTheme}
				src={require('./../icon/rgb.svg')}
				onClick={() => handleImgTheme()}
				alt='RBG Icon'
			/>
		</React.Fragment>
	);
}
