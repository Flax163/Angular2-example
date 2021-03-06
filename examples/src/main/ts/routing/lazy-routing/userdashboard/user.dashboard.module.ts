import { NgModule } from "@angular/core";
import { CommonModule }   from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UserDashboardRoutingModule } from "./user.dashboard-routing.module";
import { UserDashboardComponent } from "./user.dashboard.component";

@NgModule({
    imports: [CommonModule, FormsModule, UserDashboardRoutingModule],
    declarations: [UserDashboardComponent]
})
export class UserDashboardModule {}