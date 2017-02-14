import { Book } from "../model/book";
import * as book from '../actions/book';
import {BookActionTypes} from "../actions/book";

export interface BookState {
    books: Book[]
}
const initialState: BookState = {
    books: [],
};

export function bookReducer (state = initialState, action: book.BookActions) {
    switch (action.type)
    {
        case BookActionTypes.LOAD_COMPLETE:
            return {books : action.payload};
    }
}