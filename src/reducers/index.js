import { combineReducers } from 'redux';
import WordReducer from './reducer_word';

const rootReducer = combineReducers({
  word: WordReducer,
  
});

export default rootReducer;
