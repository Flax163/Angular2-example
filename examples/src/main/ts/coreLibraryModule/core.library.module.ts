import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ListBookComponent } from "./component/listbook/list.book.component";
import { NewBookComponent } from "./component/newBook/new.book.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [ListBookComponent, NewBookComponent],
    declarations: [ListBookComponent, NewBookComponent],
})
export class CoreLibraryModule {
}