import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookService } from "./service/book.service";
import { LibraryComponent } from "./component/library/library.component";
import { ListBookComponent } from "./component/listbook/list.book.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, LibraryComponent, ListBookComponent],
    providers: [BookService],
    bootstrap: [AppComponent]
})
export class AppModule { }