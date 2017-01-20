import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExternalToolbarComponent } from "./component/externalToolbar/external.toolbar.component";
import { SimpleToolbarComponent } from "./component/simpleToolbar/simple.toolbar.component";
import { ToolbarComponent } from "./toolbar.component";

const toolbarRoutes:Routes = [
    {path: "toolbar", component: ToolbarComponent, outlet: 'toolbar',
        children: [
            {path: '', redirectTo: "simple", pathMatch: 'full'},
            {path: 'simple', component: SimpleToolbarComponent},
            {path: 'external', component: ExternalToolbarComponent}
        ]}
];

@NgModule({
    imports: [RouterModule.forChild(toolbarRoutes)],
    exports: [RouterModule]
})
export class ToolbarRouterModule {}