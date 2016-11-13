import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Letter from './letter';
import Placeholder from './placeholder';
import UsedLetters from './usedLetters';
import { keyPressed, fetchWord, WORD_MAX_LENGTH } from '../actions';

const Word  = ({ keyPressed, fetchWord, word, letter, currentLetter }) => {

	if (!word.length) {
		fetchWord(); 
		return null;
	}

	for (let i = 0; i < WORD_MAX_LENGTH; i++) {
		if (word[i].letter == currentLetter) {
			word[i].visible = true;
		}
	}

	return(
		<div>
			{
				word.map((letter, index) => {
					if (word[index].placeholder)
						return <Placeholder key={index} /> 
					if (!word[index].visible) 
					 	return <Letter key={index} /> 
					else 
					 	return <Letter key={index} letter={word[index].letter}/>
				})
			}
		</div>
	);
};

function mapStateToProps({ word, letter }) {
	return { word, letter };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWord, keyPressed }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Word);