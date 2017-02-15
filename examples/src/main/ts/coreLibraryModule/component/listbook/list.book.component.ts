import { Component, Input } from "@angular/core";
import { Book } from "../../model/book";


@Component({
    selector: "list-book",
    templateUrl: "list.book.component.html",
    styleUrls: ["list.book.component.css"]
})
export class ListBookComponent {
    @Input("books")
    books:Book[];
}