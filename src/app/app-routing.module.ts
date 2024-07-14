import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';

const routes: Routes = [
  {
    path: '',
    title: 'El Paisa Cargo',
    component: HomeComponent,
  },
  {
    path: 'servicios',
    title: 'Servicios',
    component: ServiciosComponent,
  },
  {
    path: '**',
    title: '404',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
