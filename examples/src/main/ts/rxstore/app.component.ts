import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { State } from "./reducers/book";
import { LoadBookAction, AddBookAction } from "./actions/book";
import { Observable } from "rxjs";
import { Book } from "../coreLibraryModule/model/book";
import * as bookReducer from "./reducers/book";

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    $books: Observable<Book[]>;

    constructor(private store: Store<State>) {
        this.$books = store.select(bookReducer.getBooks);
    }

    ngOnInit(): void {
        this.store.dispatch(new LoadBookAction());
    }

    HandlerCreateNewBook(newBook: Book): void {
        this.store.dispatch(new AddBookAction(newBook));
    }
}