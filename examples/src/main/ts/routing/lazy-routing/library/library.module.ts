import { NgModule } from "@angular/core";
import { CommonModule }   from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LibraryComponent } from "./library.component";
import { LibraryRoutingModule } from "./library-routing.module";
import { DetailBookComponent } from "./component/detailbook/detail.book.component";
import { HomeLibraryComponent } from "./component/homelibrary/home.library.component";
import { LibraryService } from "./service/library.service";
import { CoreLibraryModule } from "../../../coreLibraryModule/core.library.module";

@NgModule({
    imports: [CommonModule, FormsModule, LibraryRoutingModule, CoreLibraryModule],
    declarations: [LibraryComponent, DetailBookComponent, HomeLibraryComponent],
    providers: [LibraryService]
})
export class LibraryModule {}