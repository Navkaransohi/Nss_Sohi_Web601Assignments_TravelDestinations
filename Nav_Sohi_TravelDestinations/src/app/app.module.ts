// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component'; // Import ContentListComponent
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentFilterPipe } from './content-filter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { CreateContentComponent } from './create-content/create-content.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent, // Declare ContentListComponent
    ContentCardComponent,
    ContentFilterPipe,
    HoverAffectDirective,
    CreateContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Add other modules as needed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
