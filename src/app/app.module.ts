import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './modules/about/about.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { HomeComponent } from './modules/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { SliderComponent } from './modules/home/components/slider/slider.component';
import { NgOptimizedImage } from '@angular/common';
import { ServiciosGridComponent } from './modules/home/components/servicios-grid/servicios-grid.component';
import { FaqComponent } from './modules/home/components/faq/faq.component';
import { MarcasComponent } from './modules/home/components/marcas/marcas.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiciosComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LogoComponent,
    SliderComponent,
    NgOptimizedImage,
    ServiciosGridComponent,
    FaqComponent,
    MarcasComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
