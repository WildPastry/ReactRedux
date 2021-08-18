import React from 'react';

// Error
const Error: React.FC = () => {
	return (
		<>
			<div className='fullPageFixed bg-dark'>
				<div className='fullPageFixedInner'>
					<h1 className='spotOrange text-center'>ERROR LOADING DATA</h1>
					<h5 className='light text-center'>Please try again later</h5>
				</div>
			</div>
		</>
	);
};

// EXPORT Error
Error.displayName = 'Error';
export default Error;
