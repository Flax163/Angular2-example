import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { BookService } from "./app/service/book.service";
import { BookDto } from "./app/dto/book.dto";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit():void {
        console.log(this.elementRef.nativeElement.getAttribute('outerRootTest'));
    }
}