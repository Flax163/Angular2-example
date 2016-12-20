import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ComponentDto } from "../dto/component.dto";

@Component({
    selector: "dynamic-form",
    templateUrl: "dynamic.form.component.html"
})
export class DynamicFormComponent implements OnInit
{
    @Input()
    components:ComponentDto[];
    form: FormGroup;

    ngOnInit():void {
        let group: any = {};
        this.components.forEach(component => {
            group[component.id] = new FormControl(component);
        });
        this.form = new FormGroup(group);
    }
}