import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserModule }  from "@angular/platform-browser";
import { AppComponent } from "./app.component.ts";
import { LibraryModule } from "./library/library.module";
import { AppRoutingModule } from "./app-routing.module";
import { UserDashboardModule } from "./userdashboard/user.dashboard.module";
import { AdministratorModule } from "./administrator/administrator.module";

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, LibraryModule, UserDashboardModule, AdministratorModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }