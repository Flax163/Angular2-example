import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { BookState } from "./reducers/book";
import { LoadBookAction } from "./actions/book";
import { Observable } from "rxjs";
import { Book } from "./model/book";

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    $books: Observable<Book[]>;

    constructor(private store: Store<BookState>) {
        this.$books = store.select('books');
        console.log(this.$books);
    }

    ngOnInit():void {
    }

    loadBooks():void{
        this.store.dispatch(new LoadBookAction());
    }
}