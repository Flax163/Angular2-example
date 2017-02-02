import { NgModule } from "@angular/core";
import { CommonModule }   from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LibraryComponent } from "./library.component";
import { LibraryRoutingModule } from "./library-routing.module";
import { DetailBookComponent } from "./component/detailbook/detail.book.component";
import { HomeLibraryComponent } from "./component/homelibrary/home.library.component";
import { ListBookComponent } from "./component/listbook/list.book.component";
import { LibraryService } from "./service/library.service";

@NgModule({
    imports: [CommonModule, FormsModule, LibraryRoutingModule],
    declarations: [LibraryComponent, DetailBookComponent, HomeLibraryComponent, ListBookComponent],
    providers: [LibraryService]
})
export class LibraryModule {}