import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { LayerComponent } from './modules/layer/layer.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './modules/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    LayerComponent,
    HeadersComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
