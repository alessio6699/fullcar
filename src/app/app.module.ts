import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConteinitoriComponent } from './conteinitori/conteinitori.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { RecentCarComponent } from './recent-car/recent-car.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavBarComponent,
    ConteinitoriComponent,
    RecentCarComponent,
    WelcomeComponent,
    FooterComponent

   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    MatFormFieldModule,
    MatSelectModule
    
  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
