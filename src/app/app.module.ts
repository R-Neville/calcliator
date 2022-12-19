import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CalculatorComponent } from './home-page/calculator/calculator.component';

@NgModule({
  declarations: [AppComponent, AboutPageComponent, HomePageComponent, CalculatorComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
