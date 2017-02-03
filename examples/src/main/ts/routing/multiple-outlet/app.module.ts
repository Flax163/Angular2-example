import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule }  from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import {ContentModule} from "./content/content.module";

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, ContentModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }