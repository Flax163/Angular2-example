import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component.ts';
import { BookService } from "./app/service/book.service";
import { LibraryComponent } from "./app/component/library/library.component";
import { ListBookComponent } from "./app/component/listbook/list.book.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, LibraryComponent, ListBookComponent],
    providers: [BookService],
    bootstrap: [AppComponent]
})
export class AppModule { }