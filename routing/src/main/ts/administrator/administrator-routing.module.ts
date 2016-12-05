import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdministratorComponent } from "./administrator.component";
import { AuthGuard } from "../service/auth-guard.service";
import { LoginComponent } from "./component/login/login.component";

const administratorRoutes:Routes = [
    {path: '', component: AdministratorComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forChild(administratorRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]

})
export class AdministratorRoutingModule {}