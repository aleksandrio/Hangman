import React, { Component } from 'react';
import keydown from 'react-keydown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HangmanSide from './HangmanSide';
import Word from './word';
import UsedLetters from './usedLetters';

import { keyPressed } from '../actions';

const style = {
  height: screen.height*60/100,
  width: screen.width*60/100,
  textAlign: 'center',
  display: 'inline-block',

};

const App = ({ keyPressed }) => {

	let currentLetter = "";

    if ( keydown.event ) {

   		currentLetter = String.fromCharCode(keydown.event.keyCode);
   		keyPressed(currentLetter);
   		console.log(currentLetter);

   	}
	
    return (
	    <MuiThemeProvider>
		    <Paper style={style} zDepth={2} >
				<HangmanSide />
			   		 Hangman
			    <UsedLetters />
			    <Word currentLetter={currentLetter} />
		    </ Paper>
	    </MuiThemeProvider>
    );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ keyPressed }, dispatch);
}

export default connect(mapDispatchToProps)(keydown( App ));