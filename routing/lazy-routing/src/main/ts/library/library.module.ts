import { NgModule } from "@angular/core";
import { CommonModule }   from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LibraryComponent } from "./library.component.ts";
import { LibraryRoutingModule } from "./library-routing.module.ts";
import { DetailBookComponent } from "./component/detailbook/detail.book.component.ts";
import { HomeLibraryComponent } from "./component/homelibrary/home.library.component.ts";
import { ListBookComponent } from "./component/listbook/list.book.component.ts";
import { LibraryService } from "./service/library.service.ts";

@NgModule({
    imports: [CommonModule, FormsModule, LibraryRoutingModule],
    declarations: [LibraryComponent, DetailBookComponent, HomeLibraryComponent, ListBookComponent],
    providers: [LibraryService]
})
export class LibraryModule {}