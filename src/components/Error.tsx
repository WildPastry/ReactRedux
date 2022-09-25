import React from 'react';
import { RootState } from '../redux/reducers/rootReducer';
import { useSelector } from 'react-redux';

const Error: React.FC = () => {
  // UseSelectors for app theme
  const appTheme = useSelector((state: RootState) => {
    return state.setTheme.appTheme;
  });

  return (
    <>
      <div className={`fullPageFixed${appTheme}`}>
        <div className="fullPageFixedInner">
          <h1 className={`marBot textCenter error${appTheme}`}>404</h1>
          <h4 className={`marBot20 textCenter text${appTheme}`}>
            Oops! Something is messy... Hit me up below if you feel like it!
          </h4>
          <h3 className={`textCenter list${appTheme}`}>
            <a href="mailto:mike@mikeparker.co.nz">
              <span>mike@mikeparker.co.nz</span>
            </a>
          </h3>
        </div>
      </div>
    </>
  );
};

Error.displayName = 'Error';
export default Error;
