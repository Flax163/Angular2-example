import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LibraryComponent } from "./library.component";
import { DetailBookComponent } from "./component/detailbook/detail.book.component.ts";
import { HomeLibraryComponent } from "./component/homelibrary/home.library.component";
import { ListBookComponent } from "./component/listbook/list.book.component";
import { CanDeactivateGuard } from "../service/can-deactivate-guard.service"

const libraryRoutes:Routes = [
    {
        path: '', redirectTo: 'library', pathMatch: 'full'},
    {
        path: 'library', component: LibraryComponent, children: [
        {
            path: 'book/:id', component: DetailBookComponent
        },
        {
            path: 'book', component: ListBookComponent,
        },
        {
            path: '', component: HomeLibraryComponent, canDeactivate: [CanDeactivateGuard]
        }
    ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(libraryRoutes)],
    exports: [RouterModule]
})
export class LibraryRoutingModule {}