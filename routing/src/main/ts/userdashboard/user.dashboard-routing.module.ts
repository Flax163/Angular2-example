import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserDashboardComponent } from "./user.dashboard.component.ts";

const userDashboardRoutes:Routes = [
    { path: 'userDashboard',  component: UserDashboardComponent },
];

@NgModule({
    imports: [RouterModule.forChild(userDashboardRoutes)],
    exports:[RouterModule]
})
export class UserDashboardRoutingModule {}