import { NgModule } from "@angular/core";
import { ContentRoutingModule } from "./content-routing.module";
import { BookListComponent } from "./component/book-list/book.list.component";
import { BookComponent } from "./component/book/book.component";
import { ContentComponent } from "./content.component";

@NgModule({
    imports: [ContentRoutingModule],
    declarations: [BookListComponent, BookComponent, ContentComponent]
})
export class ContentModule {}