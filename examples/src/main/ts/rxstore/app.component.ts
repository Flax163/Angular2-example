import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { BookState } from "./reducers/book";
import { LoadBookAction } from "./actions/book";
import { Observable } from "rxjs";

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    counter: Observable<number>;

    constructor(private store: Store<BookState>) {
        this.counter = store.select('books');
    }

    ngOnInit():void {
    }

    test1():void{
        this.store.dispatch(new LoadBookAction());
    }
}