import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Book } from "../../model/book";

@Component({
    selector: "list-book",
    templateUrl: "list.book.component.html",
    styleUrls: ["list.book.component.css"]
})
export class ListBookComponent {
    @Input("books")
    books:Book[];

    @Output()
    private clickItemBook: EventEmitter<Book> = new EventEmitter();

    private handlerClickBook(book:Book) {
        this.clickItemBook.emit(book);
    }
}