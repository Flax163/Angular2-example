import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserModule }  from "@angular/platform-browser";
import { AppComponent } from "./app.component.ts";
import { AppRoutingModule } from "./app-routing.module.ts";
import { ToolbarModule } from "./toolbar/toolbar.module";
import {ContentModule} from "./content/content.module";

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, ToolbarModule, ContentModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }