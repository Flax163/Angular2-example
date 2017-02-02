import { NgModule } from "@angular/core";
import { RouterModule, PreloadAllModules, Routes } from "@angular/router";

const appRoutes: Routes = [
    {path: "", loadChildren: "./library/library.module#LibraryModule"},
    {path: "userdashboard", loadChildren: "./userdashboard/user.dashboard.module#UserDashboardModule"},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules, useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}