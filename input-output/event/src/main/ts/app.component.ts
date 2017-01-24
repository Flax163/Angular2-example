import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { BookService } from "./app/service/book.service";
import { BookDto } from "./app/dto/book.dto";

@Component({
    selector: 'input-output',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    books:BookDto[];

    constructor(private booksService:BookService) {
    }

    ngOnInit():void {
        this.booksService.loadBooks()
            .then((books) => this.books = books);
    }
}