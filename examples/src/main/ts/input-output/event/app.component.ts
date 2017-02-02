import { Component, OnInit } from '@angular/core';
import { BookService } from "./service/book.service";
import { BookDto } from "./dto/book.dto";

@Component({
    selector: 'app-component',
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