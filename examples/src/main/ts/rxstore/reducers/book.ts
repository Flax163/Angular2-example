import { Book } from "../model/book";
import * as book from '../actions/book';

export interface BookState {
    books: Book[]
}
const initialState: BookState = {
    books: [],
};

export function bookReducer (state = initialState, action: book.BookActions) {
    console.log(action.type);
}