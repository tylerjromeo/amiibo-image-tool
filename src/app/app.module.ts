import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AmiiboDetailsComponent } from './amiibo-details/amiibo-details.component';
import { AmiiboPrintableComponent } from './amiibo-printable/amiibo-printable.component';
import { PrintableListComponent } from './printable-list/printable-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AmiiboDetailsComponent,
    AmiiboPrintableComponent,
    PrintableListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
