// IMPORTS
import React from 'react';
import List from "./List";
// import { ReactChild, ReactFragment, ReactPortal } from 'react';
// import { connect } from 'react-redux';

// const Test = (props: { title: boolean | ReactChild | ReactFragment | ReactPortal }) => {
// 	return (
// 		<div>
// 			<h1>{props.title}</h1>
// 		</div>
// 	);
// };
const Test = () => {
	return (
		<div>
    <h2>Articles</h2>
      <List />
  </div>
	);
};

export default Test;
// const mapStateToProps = (state: { title: any }) => {
// 	return {
// 		title: state.title
// 	};
// };

// export default connect(mapStateToProps)(Test);
