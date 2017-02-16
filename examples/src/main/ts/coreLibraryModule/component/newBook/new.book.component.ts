import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Book } from "../../model/book";

@Component({
    selector: "new-book",
    templateUrl: "new.book.component.html",
})
export class NewBookComponent implements OnInit {
    private newBook: Book;

    @Output()
    private createNewBookEvent: EventEmitter<Book> = new EventEmitter();

    ngOnInit(): void {
        this.newBook = {id: "", name: "", description: ""};
    }

    create() {
        this.createNewBookEvent.emit({id : "",name: this.newBook.name, description: this.newBook.description});
    }
}

