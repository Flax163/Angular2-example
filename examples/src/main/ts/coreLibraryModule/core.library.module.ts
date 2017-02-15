import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListBookComponent } from "./component/listbook/list.book.component";

@NgModule({
    imports: [CommonModule],
    exports: [ListBookComponent],
    declarations: [ListBookComponent],
})
export class CoreLibraryModule {}