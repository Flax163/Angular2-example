import { Injectable } from "@angular/core";
import * as book from "../actions/book";
import { Effect, Actions } from "@ngrx/effects";
import { Observable } from "rxjs";
import {Action} from "@ngrx/store";
import {BookService} from "../service/book.service";
@Injectable()
export class BookEffects
{
    constructor(private actions$: Actions, private bookService: BookService) { }

    @Effect()
    load:Observable<Action> = this.actions$
        .ofType(book.BookActionTypes.LOAD)
        .debounceTime(300)
        .switchMap(query => {

            const nextSearch$ = this.actions$.ofType(book.ActionTypes.SEARCH).skip(1);

            return this.bookService.load(query)
                .takeUntil(nextSearch$)
                .map(books => new book.SearchCompleteAction(books))
                .catch(() => of(new book.SearchCompleteAction([])));
        });
}