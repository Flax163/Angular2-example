import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { BookDto } from "../../dto/book.dto";

@Component({
    selector: "child-component",
    templateUrl: "./child.component.html",
})
export class ChildComponent implements OnInit, OnChanges{
    @Input("books")
    books:BookDto[];
    @Output()
    completeEvent:EventEmitter<BookDto[]> = new EventEmitter<BookDto[]>();

    ngOnInit():void {
    }

    ngOnChanges(changes:SimpleChanges):void {
        if (this.books) {
            console.log('book loading: ' + this.books);
            this.completeEvent.next(this.books);
        }
    }
}