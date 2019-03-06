import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvantHeaderComponent } from './avant-header/avant-header.component';
import { AvantProfileComponent } from './avant-profile/avant-profile.component';
import { AvantFooterComponent } from './avant-footer/avant-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AvantHeaderComponent,
    AvantProfileComponent,
    AvantFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
