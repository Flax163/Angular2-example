import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AdministratorRoutingModule } from "./administrator-routing.module";
import { AdministratorComponent } from "./administrator.component";
import {LoginComponent} from "./component/login/login.component";
import {AuthService} from "../service/auth.service";

@NgModule({
    imports: [CommonModule, FormsModule, AdministratorRoutingModule],
    declarations: [AdministratorComponent, LoginComponent],
    providers: [AuthService]
})
export class AdministratorModule {}