import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserModule }  from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LibraryModule } from "./library/library.module";
import { AppRoutingModule } from "./app-routing.module";
import { UserDashboardModule } from "./userdashboard/user.dashboard.module";

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }