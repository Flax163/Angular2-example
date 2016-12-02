import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdministratorComponent } from "./administrator.component";

const administratorRoutes:Routes = [
    {path: 'administrator', component: AdministratorComponent}
];

@NgModule({
    imports: [RouterModule.forChild(administratorRoutes)],
    exports: [RouterModule]

})
export class AdministratorRoutingModule {}