import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { keyPressed } from '../actions';

const UsedLetters = ({ letter, usedLetters }) => {
		let letters = [];
	
	letters.push(letter);

console.log(letter);

	return(
		<div>
		Used Letters: {letters}
		</div>
	);
}

function mapStateToProps({ letter }) {
	return { letter };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ keyPressed }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UsedLetters);