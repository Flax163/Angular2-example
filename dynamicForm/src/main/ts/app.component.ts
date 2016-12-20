import { Component, OnInit } from "@angular/core";
import {DynamicService} from "./service/dynamic.service";
import {ComponentDto} from "./dto/component.dto";

@Component({
    selector: "app-component",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    components:ComponentDto[];

    constructor(private dynamicService:DynamicService) {
    }

    ngOnInit():void {
        this.components = this.dynamicService.getComponents();
    }
}