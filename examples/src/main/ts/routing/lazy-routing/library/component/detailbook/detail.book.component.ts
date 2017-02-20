import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: "detail-book",
    templateUrl: "detail.book.component.html"
})
export class DetailBookComponent implements OnInit {
    idBook:string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.idBook = params['id']
        });
    }
}