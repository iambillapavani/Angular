import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShareDataComponent } from './share-data/share-data.component';
import { AgePipe } from './pipes/age.pipe';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ShareDataComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
