import { Book } from "../model/book";
import * as book from '../actions/book';
import { BookActionTypes } from "../actions/book";

export interface State {
    books: Book[]
}
const initialState: State = {
    books: [],
};

export function bookReducer (state = initialState, action: book.BookActions) {
    switch (action.type)
    {
        case BookActionTypes.LOAD_COMPLETE:
            return {books : action.payload};
        default:
            return state;
    }
}

export const getBooks = (state: State) =>  {
    return state.books;
};
