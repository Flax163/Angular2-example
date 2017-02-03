import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    { path: '',   redirectTo: '/library', pathMatch: 'full' },
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