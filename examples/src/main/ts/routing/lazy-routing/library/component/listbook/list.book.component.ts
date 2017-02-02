import { Component, OnInit } from "@angular/core";
import { LibraryService } from "../../service/library.service";
import { Book } from "../../model/book";


@Component({
    selector: "list-book",
    templateUrl: "list.book.component.html"
})
export class ListBookComponent implements OnInit {
    private books:Book[];

    constructor(private libraryService:LibraryService) {

    }

    ngOnInit():void {
        this.libraryService.loadBooks()
            .then(books => this.books = books);
    }
}