import { Action } from "@ngrx/store";
import { type } from "../utils";
import { Book } from "../../coreLibraryModule/model/book";

export const BookActionTypes = {
    LOAD:           type("BOOK load"),
    LOAD_COMPLETE:  type("BOOKS load complete"),
    ADD:            type("BOOK add"),
};

export class LoadBookAction implements Action {
    type: string = BookActionTypes.LOAD;

    constructor(public payload?: any) {};
}

export class LoadBookCompleteAction implements Action {
    type: string = BookActionTypes.LOAD_COMPLETE;

    constructor(public payload: Book[]) {};
}

export class AddBookAction implements Action {
    type: string = BookActionTypes.ADD;

    constructor(public payload: Book) {};
}

export type BookActions = LoadBookAction | LoadBookCompleteAction | AddBookAction;