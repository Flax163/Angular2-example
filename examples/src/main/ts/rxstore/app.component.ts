import { Component, OnInit } from '@angular/core';
import { Action } from "@ngrx/store";

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    private count:number;

    constructor() {
    }

    ngOnInit():void {
    }
}