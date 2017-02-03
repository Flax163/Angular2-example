import { NgModule } from "@angular/core";
import { ContentRoutingModule } from "./content-routing.module";
import { BookListComponent } from "./component/book-list/book.list.component";
import { BookComponent } from "./component/book/book.component";
import { ContentComponent } from "./content.component";
import { ToolbarModule } from "../toolbar/toolbar.module";

@NgModule({
    imports: [ContentRoutingModule, ToolbarModule],
    declarations: [BookListComponent, BookComponent, ContentComponent]
})
export class ContentModule {}