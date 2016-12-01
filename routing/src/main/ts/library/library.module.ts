import { NgModule } from "@angular/core";
import { CommonModule }   from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LibraryComponent } from "./library.component";
import { LibraryRoutingModule } from "./library-routing.module";

@NgModule({
    imports: [CommonModule, FormsModule, LibraryRoutingModule],
    declarations: [LibraryComponent]
})
export class LibraryModule {}