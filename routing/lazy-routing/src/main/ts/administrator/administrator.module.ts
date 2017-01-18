import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AdministratorRoutingModule } from "./administrator-routing.module.ts";
import { AdministratorComponent } from "./administrator.component.ts";
import {LoginComponent} from "./component/login/login.component.ts";
import {AuthService} from "../service/auth.service.ts";

@NgModule({
    imports: [CommonModule, FormsModule, AdministratorRoutingModule],
    declarations: [AdministratorComponent, LoginComponent],
    providers: [AuthService]
})
export class AdministratorModule {}