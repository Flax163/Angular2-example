import {Action} from "@ngrx/store";
export enum BookActionTypes {
    LOAD,
    ADD
}

export class LoadBookAction implements Action {
    type: string = BookActionTypes.LOAD;
}

export class AddBookAction implements Action {
    type: string = BookActionTypes.ADD;
}