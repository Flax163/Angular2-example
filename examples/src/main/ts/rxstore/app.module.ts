import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { CoreLibraryModule } from "../coreLibraryModule/core.library.module";
import { bookReducer } from "./reducers/book";
import { BookService } from "../input-output/event/service/book.service";
import { BookEffects } from "./effects/book";

@NgModule({
    imports: [BrowserModule, CoreLibraryModule,
        StoreModule.provideStore({books: bookReducer}),
        EffectsModule.run(BookEffects),],
    declarations: [AppComponent],
    providers: [BookService],
    bootstrap: [AppComponent]
})
export class AppModule {}