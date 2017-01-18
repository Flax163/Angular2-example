import { NgModule } from "@angular/core";
import { CommonModule }   from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UserDashboardRoutingModule } from "./user.dashboard-routing.module.ts";
import { UserDashboardComponent } from "./user.dashboard.component.ts";

@NgModule({
    imports: [CommonModule, FormsModule, UserDashboardRoutingModule],
    declarations: [UserDashboardComponent]
})
export class UserDashboardModule {}