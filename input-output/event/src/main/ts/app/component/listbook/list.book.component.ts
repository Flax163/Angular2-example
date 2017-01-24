import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { BookDto } from "../../dto/book.dto";
import { BookService } from "../../service/book.service";

@Component({
    selector: "list-book",
    templateUrl: "list.book.component.html",
    styleUrls: ["list.book.component.css"]
})
export class ListBookComponent implements OnChanges{
    @Input("books")
    books:BookDto[];
    @Output()
    bookUpdateEvent:EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(changes:SimpleChanges):void {
        if (this.books !== null) {
            this.bookUpdateEvent.next("book update");
        }
    }
}