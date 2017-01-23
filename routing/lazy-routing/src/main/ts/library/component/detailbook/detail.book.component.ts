import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: "detail-book",
    templateUrl: "detail.book.component.html"
})
export class DetailBookComponent implements OnInit {
    idBook:number;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => {
                this.idBook = params['id']
                console.log(this.idBook);
            });
    }
}