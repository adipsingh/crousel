import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';
import { SwiperModule } from './swiper/swiper.module';

import { AppComponent } from './app.component';
import { CrouselComponent } from './crousel/crousel.component';
import { SwiperComponent } from './swiper/swiper.component';

@NgModule({
  declarations: [
    AppComponent,
    CrouselComponent,
    SwiperComponent,
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
