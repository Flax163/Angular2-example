import { NgModule } from "@angular/core";
import { ContentRoutingModule } from "./content-routing.module";
import { BookComponent } from "./component/book/book.component";
import { ContentComponent } from "./content.component";
import { ToolbarModule } from "../toolbar/toolbar.module";
import { CoreLibraryModule } from "../../../coreLibraryModule/core.library.module";

@NgModule({
    imports: [ContentRoutingModule, ToolbarModule, CoreLibraryModule],
    declarations: [BookComponent, ContentComponent]
})
export class ContentModule {}