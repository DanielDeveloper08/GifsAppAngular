import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datum, Gifs } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial: string[] = [];
  apiKey: string = 'I00k1IzeKNJsn56d8y4Qdx9HHCDH2VCK';
  urlApi : string = 'http://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient){
    this._historial = JSON.parse(localStorage.getItem("Historial")!) || [];
    this.resultados = JSON.parse(localStorage.getItem("Resultados")!) || [];
  }


  public resultados: Datum[] = [];

  ngOnInit(): void{
   
  }
  get getHistorial(){
    return [...this._historial];
  }

  buscarGifs( query: string ){
    query = query.toLocaleLowerCase();
    if(!this._historial.includes( query )){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
      localStorage.setItem("Historial", JSON.stringify(this._historial));
    }

    const params = new HttpParams()
                        .set('api_key',this.apiKey)
                        .set('limit', '10')
                        .set('q', query)

    this.http.get<Gifs>(`${this.urlApi}/search`,{params})
      .subscribe(resp=>{
        this.resultados = resp.data;
        localStorage.setItem("Resultados", JSON.stringify(this.resultados));
      })
    
  }

}
