import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserModule }  from "@angular/platform-browser";
import { AppComponent } from "./app.component.ts";
import { AppRoutingModule } from "./app-routing.module.ts";
import { BookComponent } from "./book/book.component";
import { BookListComponent } from "./list-book/book-list.component";

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    declarations: [AppComponent, BookComponent, BookListComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }