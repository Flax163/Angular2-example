import { Component, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import {ComponentDto} from "../dto/component.dto";

@Component({
    selector: "dynamic-from",
    templateUrl: "dynamic.form.component.html"
})
export class DynamicFromComponent
{
    @Input()
    component:ComponentDto;
    @Input()
    form: FormGroup;

    constructor() {
        //let form = new FormControl(this.component);
        //this.form = new FormGroup(form);
    }
}