import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { setProjectFilter } from '../redux/slices/filterSlice';
import { ProjectFilter } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { setTheme, setImgTheme  } from '../redux/slices/themeSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AppTheme(): JSX.Element {
  // dispatch
  const dispatch = useDispatch();

  const handleDispatch = useCallback(
		(themeType: string) => {
      console.log(themeType)

      // useSelector((state: RootState) => {
      //   console.log(state.setTheme);

      // });
			dispatch(setTheme('LIGHT'));
		},
		[dispatch]
	);

	return (
    <div className='galleryWrap flex pad'>
    <h4 className={'textWhite text400'}>THEME</h4>
      <img
        onClick={() => handleDispatch('IMG')}
        className='galleryRGBIcon'
        src={require('./../icon/rgb.svg')}
        alt='RBG Icon'
      />
      <div>
        <FontAwesomeIcon
          onClick={() => handleDispatch('APP')}
          icon={['fas', 'fill-drip']}
          className={'galleryFillIconDark'}
        />
      </div>
    </div>
	);
}
