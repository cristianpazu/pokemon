import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemComponent } from './components/pokem/pokem.component';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';

const routes:Routes=[
  {path:'pokem',component: PokemComponent},
  {path:'buscar/:texto',component: BuscarComponent},
  {path:'****',pathMatch:'full' , redirectTo:'/pokem'}
  ]
  

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouting2Module { }
