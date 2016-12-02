import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {AdministratorRoutingModule} from "./administrator-routing.module";
import {AdministratorComponent} from "./administrator.component";

@NgModule({
    imports: [CommonModule, FormsModule, AdministratorRoutingModule],
    declarations: [AdministratorComponent]
})
export class AdministratorModule {}