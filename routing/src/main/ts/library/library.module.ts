import { NgModule } from "@angular/core";
import { CommonModule }   from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LibraryComponent } from "./library.component";
import { LibraryRoutingModule } from "./library-routing.module";
import { DetailBookComponent } from "./component/detailbook/detail.book.component.ts";
import { HomeLibraryComponent } from "./component/homelibrary/home.library.component";

@NgModule({
    imports: [CommonModule, FormsModule, LibraryRoutingModule],
    declarations: [LibraryComponent, DetailBookComponent, HomeLibraryComponent]
})
export class LibraryModule {}