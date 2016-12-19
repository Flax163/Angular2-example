import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserModule }  from "@angular/platform-browser";
import { AppComponent } from "./app.component.ts";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicService } from "./service/dynamic.form.service";
import { DynamicFromComponent } from "./component/dynamic.form.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, DynamicFromComponent],
    bootstrap: [AppComponent],
    providers: [DynamicService]
})
export class AppModule { }