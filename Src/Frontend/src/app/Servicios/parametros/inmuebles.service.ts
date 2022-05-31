import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { inmuebleModel } from 'src/app/modelos/parametros/inmueble.model';

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {

  constructor() { }


  GetInmuebleList():Observable<inmuebleModel[]>{
    return this.http.get<inmuebleModel[]>(`${this.url}/`)
  }
}
