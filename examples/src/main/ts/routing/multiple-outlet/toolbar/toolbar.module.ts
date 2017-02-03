import { NgModule } from "@angular/core";
import { ToolbarRouterModule } from "./toolbar-routing.module";
import { SimpleToolbarComponent } from "./component/simpleToolbar/simple.toolbar.component";
import { ExternalToolbarComponent } from "./component/externalToolbar/external.toolbar.component";
import { ToolbarComponent } from "./toolbar.component";

@NgModule({
    imports: [ToolbarRouterModule],
    declarations: [SimpleToolbarComponent, ExternalToolbarComponent, ToolbarComponent]
})
export class ToolbarModule {}