import { Component } from "@angular/core";
import { QueryService } from "./service/query.service";

@Component({
    selector: "app-component",
    templateUrl: "app.component.html"
})
export class AppComponent {

    constructor(private queryService:QueryService) {}

    clickGet()
    {
        this.queryService.getQuery().then((response) => {
            alert(response.json().message)
        })
    }

    clickPost()
    {
        this.queryService.postQuery().then((response) => {
            alert(response.json().message)
        })
    }

    clickPut()
    {
        this.queryService.putQuery().then((response) => {
            alert(response.json().message)
        })
    }

    clickDelete()
    {
        this.queryService.deleteQuery().then((response) => {
            alert(response.json().message)
        })
    }
}