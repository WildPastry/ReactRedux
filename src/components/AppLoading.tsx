import React from 'react';

// AppLoading
const AppLoading = () => {
  return (
    <>
      <div className="loader">
        <div className="loaderInner">
          <div className="loaderLineWrap">
            <div className="loaderLine"></div>
          </div>
          <div className="loaderLineWrap">
            <div className="loaderLine"></div>
          </div>
          <div className="loaderLineWrap">
            <div className="loaderLine"></div>
          </div>
          <div className="loaderLineWrap">
            <div className="loaderLine"></div>
          </div>
          <div className="loaderLineWrap">
            <div className="loaderLine"></div>
          </div>
        </div>
      </div>
    </>
  );
};

// EXPORT AppLoading
AppLoading.displayName = 'AppLoading';
export default AppLoading;
