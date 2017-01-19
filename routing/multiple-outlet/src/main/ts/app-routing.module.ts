import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ToolbarComponent } from "./toolbar/toolbar.component";

const appRoutes: Routes = [
    { path: "toolbar", component: ToolbarComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}