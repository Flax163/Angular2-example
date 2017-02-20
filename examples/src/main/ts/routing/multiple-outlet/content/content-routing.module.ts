import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookComponent } from "./component/book/book.component";
import { ContentComponent } from "./content.component";
import { ListBookComponent } from "../../../coreLibraryModule/component/listbook/list.book.component";

const contentRouters:Routes = [
    {path: "library", component: ContentComponent,
        children: [
            {path: '', component: BookComponent},
            {path: 'book', component: BookComponent},
            {path: 'list-book', component: ListBookComponent},
        ]}
];

@NgModule({
    imports: [RouterModule.forChild(contentRouters)],
    exports: [RouterModule]
})
export class ContentRoutingModule {}