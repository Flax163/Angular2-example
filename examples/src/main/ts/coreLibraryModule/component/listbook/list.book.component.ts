import { Component, Input } from "@angular/core";
import { BookDto } from "../../dto/book.dto";


@Component({
    selector: "list-book",
    templateUrl: "list.book.component.html",
    styleUrls: ["list.book.component.css"]
})
export class ListBookComponent {
    @Input("books")
    books:BookDto[];


}