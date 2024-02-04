// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component'; // Import ContentListComponent
import { ContentCardComponent } from './content-card/content-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent, // Declare ContentListComponent
    ContentCardComponent
  ],
  imports: [
    BrowserModule
    // Add other modules as needed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
