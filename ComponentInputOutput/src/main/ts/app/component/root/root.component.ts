import { Component } from "@angular/core";
import { BookDto } from "../../dto/book.dto";
import { BookService } from "../../service/book.service";

@Component({
    selector: 'root-component',
    templateUrl: './root.component.html'
})
export class RootComponent {
    booksDto:BookDto[];

    constructor(private bookService:BookService) {
    }

    ngOnInit():void {
        this.bookService.loadBooks().then(books => {
                this.booksDto = books;
            }
        );
    }

    handleCompleteEvent(arg:BookDto[]){
        console.log("complete Event");
    }
}