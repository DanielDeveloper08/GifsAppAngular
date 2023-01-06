import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './components/gifs-page/gifs-page.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { HttpClientModule }   from '@angular/common/http';


@NgModule({
  declarations: [
    GifsPageComponent,
    ResultadosComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    GifsPageComponent
  ]
})
export class GifsModule { }
