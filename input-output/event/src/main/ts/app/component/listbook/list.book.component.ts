import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { BookDto } from "../../dto/book.dto";
import { BookService } from "../../service/book.service";

@Component({
    selector: "list-book",
    templateUrl: "list.book.component.html",
})
export class ListBookComponent implements OnChanges{
    @Input("books")
    books:BookDto[];
    @Output()
    booksChange:EventEmitter<BookDto[]> = new EventEmitter<BookDto[]>();
    @Input()
    userId:number;
    @Output()
    bookUpdateEvent:EventEmitter<string> = new EventEmitter<string>();

    constructor(private bookService:BookService) {
    }


    ngOnChanges(changes:SimpleChanges):void {
        if (this.userId && this.books == null) {
            this.bookService.loadBooks().then(books => {
                    this.books = books;
                    this.booksChange.emit(books);
                    this.bookService.nextBooks(books);
                }
            );
            console.log('book update for user: ' + this.userId + " : "+ this.books);
            this.bookUpdateEvent.next("book update for user");
        }
    }
}