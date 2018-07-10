import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AmiiboDetailsComponent } from './amiibo-details/amiibo-details.component';
import { AmiiboPrintableComponent } from './amiibo-printable/amiibo-printable.component';

@NgModule({
  declarations: [
    AppComponent,
    AmiiboDetailsComponent,
    AmiiboPrintableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
