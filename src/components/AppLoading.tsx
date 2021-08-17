// import frameworks
import React from 'react';

// AppLoading
const AppLoading = () => {
	return (
		<>
			<div className='loader'>
				<div className='loader-inner'>
					<div className='loader-line-wrap'>
						<div className='loader-line'></div>
					</div>
					<div className='loader-line-wrap'>
						<div className='loader-line'></div>
					</div>
					<div className='loader-line-wrap'>
						<div className='loader-line'></div>
					</div>
					<div className='loader-line-wrap'>
						<div className='loader-line'></div>
					</div>
					<div className='loader-line-wrap'>
						<div className='loader-line'></div>
					</div>
				</div>
			</div>
		</>
	);
};

// export AppLoading
AppLoading.displayName = 'AppLoading';
export default AppLoading;