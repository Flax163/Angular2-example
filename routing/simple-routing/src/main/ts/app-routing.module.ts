import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookListComponent } from "./list-book/book-list.component";
import { BookComponent } from "./book/book.component";

const appRoutes: Routes = [
    {path: "list-book", component: BookListComponent},
    {path: "book", component: BookComponent}
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