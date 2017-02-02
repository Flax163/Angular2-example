import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { DynamicService } from "./service/dynamic.service";
import { DynamicFormComponent } from "./component/dynamic.form.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, DynamicFormComponent],
    bootstrap: [AppComponent],
    providers: [DynamicService]
})
export class AppModule {}