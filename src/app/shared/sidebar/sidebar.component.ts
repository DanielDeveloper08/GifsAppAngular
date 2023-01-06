import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/modules/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get getHistorial(){
    return this.gifsService.getHistorial;
  }

  constructor(private gifsService : GifsService) { }


  onClickBusqueda( busqueda: string){
    this.gifsService.buscarGifs(busqueda);
  }
}
