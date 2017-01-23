import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExternalToolbarComponent } from "./component/externalToolbar/external.toolbar.component";
import { SimpleToolbarComponent } from "./component/simpleToolbar/simple.toolbar.component";
import { ToolbarComponent } from "./toolbar.component";

const toolbarRoutes:Routes = [
    {path: 'simple', component: SimpleToolbarComponent, outlet: 'toolbar'},
    {path: 'external', component: ExternalToolbarComponent, outlet: 'toolbar'}
];

@NgModule({
    imports: [RouterModule.forChild(toolbarRoutes)],
    exports: [RouterModule]
})
export class ToolbarRouterModule {}