import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { setTheme } from '../redux/slices/themeSlice';

export default function AppTheme(): JSX.Element {
  const dispatch = useDispatch();

  // Trigger the toggle of dark/light mode
  const [toggle, setToggle] = useState(false);

  const triggerToggle = () => {
    setToggle(!toggle);
    handleAppTheme();
  };

  // UseSelector for app theme
  const appTheme = useSelector((state: RootState) => {
    return state.setTheme.appTheme;
  });

  // Handle function for app theme
  const handleAppTheme = () => {
    appTheme === 'DARK' ? dispatch(setTheme('LIGHT')) : dispatch(setTheme('DARK'));
  };

  return (
    <section aria-label="Dark And Light Mode Section">
      <div
        onClick={triggerToggle}
        className={`appTheme ${toggle ? 'appThemeChecked' : ''}`}>
        <div className="appThemeContainer">
          <div className="appThemeCheck">
            <span role="img" aria-label="Activate Dark Mode">🌞</span>
          </div>
          <div className="appThemeUncheck">
            <span role="img" aria-label="Activate Light Mode">🌜</span>
          </div>
        </div>
        <div className="appThemeCircle"></div>
        <input className="appThemeInput" type="checkbox" aria-label="Toggle Button" />
      </div>
    </section>
  );
}
