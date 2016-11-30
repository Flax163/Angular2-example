import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component.ts';
import { ChildComponent } from "./app/component/child/child.component";
import { BookService } from "./app/service/book.service";
import { RootComponent } from "./app/component/root/root.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, RootComponent, ChildComponent],
    providers: [BookService],
    bootstrap: [AppComponent]
})
export class AppModule { }