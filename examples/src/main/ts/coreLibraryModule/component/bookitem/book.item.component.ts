import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Book } from "../../model/book";

@Component({
    selector: "book-item",
    templateUrl: "book.item.component.html",
    styleUrls: ["book.item.component.css"]
})
export class BookItemComponent {
    @Input("book")
    book:Book;

    @Output()
    private clickBook: EventEmitter<Book> = new EventEmitter();

    private clickItem(): void
    {
        this.clickBook.emit(this.book);
    }
}