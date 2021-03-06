import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule }  from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { QueryService } from "./service/query.service";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent],
    providers: [QueryService],
    bootstrap: [AppComponent]
})
export class AppModule { }