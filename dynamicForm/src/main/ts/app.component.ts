import { Component } from "@angular/core";
import {DynamicFromComponent} from "./component/dynamic.form.component";
import {DynamicService} from "./service/dynamic.service";

@Component({
    selector: "app-component",
    templateUrl: "app.component.html"
})
export class AppComponent {

    constructor(private dynamicService:DynamicService) {
        this.dynamicService.getComponents();
    }
}