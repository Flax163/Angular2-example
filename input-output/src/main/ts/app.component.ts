import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { BookService } from "./app/service/book.service";
import { BookDto } from "./app/dto/book.dto";

@Component({
    selector: 'input-output',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(private elementRef: ElementRef,
                private booksService:BookService) {
    }

    ngOnInit():void {
        console.log(this.elementRef.nativeElement.getAttribute('outerRootTest'));
        this.booksService.books.subscribe(result => console.log('subscribe: ' + result));
    }
}