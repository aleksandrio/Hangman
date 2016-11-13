import { KEY_PRESSED } from '../actions';

const usedReducer = (state = "", action) => {

	switch (action.type) {

		case KEY_PRESSED:
			letter += action.payload;
			// console.log(letter);
			return letter;

		default:
			return state;

	}

};

export default usedReducer;