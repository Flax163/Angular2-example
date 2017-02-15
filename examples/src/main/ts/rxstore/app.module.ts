import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { CoreLibraryModule } from "../coreLibraryModule/core.library.module";
import { bookReducer } from "./reducers/book";
import { BookEffects } from "./effects/book";
import { BookService } from "./service/book.service";

@NgModule({
    imports: [BrowserModule, CoreLibraryModule,
        StoreModule.provideStore(bookReducer),
        EffectsModule.run(BookEffects)],
    declarations: [AppComponent],
    providers: [BookService],
    bootstrap: [AppComponent]
})
export class AppModule {}