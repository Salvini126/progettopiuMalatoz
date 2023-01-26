import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompVerComponent } from './comp-ver/comp-ver.component';
import { CompDocComponent } from './comp-doc/comp-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    CompVerComponent,
    CompDocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
