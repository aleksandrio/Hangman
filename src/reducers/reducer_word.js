import { FETCH_WORD, WORD_MAX_LENGTH } from '../actions';

const wordReducer = (state = "", action) => {

	switch (action.type) {

		case FETCH_WORD:
			
			let letters = action.payload.data.word.toUpperCase().split('');
			let word = [];

			while (letters.length < WORD_MAX_LENGTH) letters.unshift('');

			letters.map((letter, index) => {

				if (letter) {

					word.push({
						letter,
						visible: false
					})

				}else word.push({
					placeholder: true
				});
			})

			console.log(word);

			return word;

    	default:
      		return state;

	}

};

export default wordReducer;