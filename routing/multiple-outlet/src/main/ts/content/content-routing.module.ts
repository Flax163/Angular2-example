import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {BookComponent} from "./component/book/book.component";
import {BookListComponent} from "./component/book-list/book.list.component";
import {ContentComponent} from "./content.component";

const contentRouters:Routes = [
    {path: "library", component: ContentComponent,
        children: [
            {path: '', redirectTo: "book", pathMatch: 'full'},
            {path: 'book', component: BookComponent},
            {path: 'book-list', component: BookListComponent}
        ]}
];

@NgModule({
    imports: [RouterModule.forChild(contentRouters)],
    exports: [RouterModule]
})
export class ContentRoutingModule {}