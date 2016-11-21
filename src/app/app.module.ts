import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
/** Primefaces */
import { GMapModule } from 'primeng/primeng';

/** Modules */
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { MapSearchComponent } from './pages/map-search/map-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent, MapSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',component: MapSearchComponent }
    ]),
    GMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
