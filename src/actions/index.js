import axios from 'axios';

const API_KEY = "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
const ROOT_URL = `http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&`;

export const WORD_MAX_LENGTH = 10;
export const FETCH_WORD = "FETCH_WORD";
export const KEY_PRESSED = "KEY_PRESSED";

export function fetchWord() {

	const url = `${ROOT_URL}maxLength=${WORD_MAX_LENGTH}&api_key=${API_KEY}`;
	const request = axios.get(url);

	return {
		type: FETCH_WORD,
		payload: request
	};
}

export function keyPressed(letter) {

	return {
		type: KEY_PRESSED,
		payload: letter
	};
}