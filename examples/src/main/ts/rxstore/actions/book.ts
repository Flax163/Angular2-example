import { Action } from "@ngrx/store";
import { type } from "../utils";

export const BookActionTypes = {
    LOAD:           type("BOOK load"),
    LOAD_COMPLETE:  type("BOOKS load complete"),
    ADD:            type("BOOK add"),
};

export class LoadBookAction implements Action {
    type: string = BookActionTypes.LOAD;
}

export class AddBookAction implements Action {
    type: string = BookActionTypes.ADD;
}

export type BookActions = LoadBookAction | AddBookAction;