import { Component } from "@angular/core";
import { BookDto } from "../../dto/book.dto";

@Component({
    selector: 'library',
    templateUrl: './library.component.html'
})
export class LibraryComponent {
    booksDto:BookDto[];
    userId:number;

    ngOnInit():void {
        this.userId = 1;
    }

    handleBookUpdateEvent(arg:string){
        console.log("listener child complete");
    }
}