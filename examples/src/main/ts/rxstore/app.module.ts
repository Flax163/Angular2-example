import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { CoreLibraryModule } from "../coreLibraryModule/core.library.module";

@NgModule({
    imports: [BrowserModule, CoreLibraryModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }