import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdministratorComponent } from "./administrator.component.ts";
import { AuthGuard } from "../service/auth-guard.service.ts";
import { LoginComponent } from "./component/login/login.component.ts";

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