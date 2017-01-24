import { Component, Input } from "@angular/core";
import { BookDto } from "../../dto/book.dto";

@Component({
    selector: 'library',
    templateUrl: './library.component.html'
})
export class LibraryComponent {
    @Input()
    books:BookDto[];

    handleBookUpdateEvent(arg:string){
        console.log("book update");
    }
}