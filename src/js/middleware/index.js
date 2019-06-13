import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            // do your stuff
            if (action.type === ADD_ARTICLE) {

                const foundWord = forbiddenWords.filter(word =>
                    action.payload.title.includes(word)
                );
                if (foundWord.length) {
                    return dispatch({ type: FOUND_BAD_WORD, payload: {foundWord: foundWord[0]} });
                }
            }
            return next(action);
        };
    };
}