import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";

@NgModule({
    imports: [BrowserModule, StoreModule.provideStore()],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }