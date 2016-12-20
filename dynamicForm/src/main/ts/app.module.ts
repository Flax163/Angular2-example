import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserModule }  from "@angular/platform-browser";
import { AppComponent } from "./app.component.ts";
import { DynamicService } from "./service/dynamic.service";
import { DynamicFormComponent } from "./component/dynamic.form.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, DynamicFormComponent],
    bootstrap: [AppComponent],
    providers: [DynamicService]
})
export class AppModule { }