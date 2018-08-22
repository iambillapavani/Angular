import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoadMapComponent } from './load-map/load-map.component';
import { CustomIconsComponent } from './custom-icons/custom-icons.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './country/country.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadMapComponent,
    CustomIconsComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, LoadMapComponent, CustomIconsComponent,CountryComponent]
})
export class AppModule { }
