import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserDashboardComponent } from "./user.dashboard.component";

const userDashboardRoutes:Routes = [
    { path: '',  component: UserDashboardComponent },
];

@NgModule({
    imports: [RouterModule.forChild(userDashboardRoutes)],
    exports:[RouterModule]
})
export class UserDashboardRoutingModule {}