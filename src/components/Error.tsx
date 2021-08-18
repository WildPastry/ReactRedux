import React from 'react';

// Error
const Error: React.FC = () => {
	return (
		<>
			<div className='fullPageFixed'>
				<div className='fullPageFixedInner'>
					<h1 className='textYellow textCenter mb-2'>ERROR LOADING PAGE</h1>
					<h4 className='textWhite textCenter mb-2'>
						Oops! I'm sure it will be an easy fix. Hit me up below if you feel like it...
					</h4>
					<h3 className='listDark textCenter'>
						<a href='mailto:mike@mikeparker.co.nz'>
							<span>mike@mikeparker.co.nz</span>
						</a>
					</h3>
				</div>
			</div>
		</>
	);
};

// EXPORT Error
Error.displayName = 'Error';
export default Error;
