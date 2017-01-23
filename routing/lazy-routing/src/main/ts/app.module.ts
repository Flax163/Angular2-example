import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserModule }  from "@angular/platform-browser";
import { AppComponent } from "./app.component.ts";
import { LibraryModule } from "./library/library.module.ts";
import { AppRoutingModule } from "./app-routing.module.ts";
import { UserDashboardModule } from "./userdashboard/user.dashboard.module.ts";
import { AdministratorModule } from "./administrator/administrator.module.ts";
import { CanDeactivateGuard } from "./service/can-deactivate-guard.service.ts";

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, LibraryModule, UserDashboardModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [CanDeactivateGuard]
})
export class AppModule { }