import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { TiposModel } from 'src/app/modelos/parametros/tipo.model';
import { LocalStorageService } from '../compartir/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  url:string = ConfiguracionInformacion.GENERAL_URL;

  constructor(private http:HttpClient) {

  }

  ListaDeTipos(): Observable<TiposModel[]> {
    return this.http.get<TiposModel[]>(`${this.url}/tadmtipoinmuebles`)
  }
}
