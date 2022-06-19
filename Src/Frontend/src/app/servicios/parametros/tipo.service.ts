import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  tk: string = "";
  
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.ObtenerToker();
  }

  ListaDeTipos(): Observable<TiposModel[]> {
    return this.http.get<TiposModel[]>(`${this.url}/tadmtipoinmueble`)
  }

  GuardarListaTipos(info: TiposModel): Observable<TiposModel> {
    return this.http.post<TiposModel>(`${this.url}/tadmtipoinmueble`, {
      nombre: info.nombre,
      descripcion: info.descripcion
    }, {
      headers: new HttpHeaders(
        {
          Authorizacion: `Bearer ${this.tk}`
        }
      )
    }
    );
  }

  EliminarTipo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/tadmtipoinmueble/${id}`, {
      headers: new HttpHeaders(
        {
          Authorizacion: `Bearer ${this.tk}`
        }
      )
    });
  }

  ObtenerListaTipo(): Observable<TiposModel[]> {
    return this.http.get<TiposModel[]>(`${this.url}/tadmtipoinmueble`);
  }

  ObtenerTipo(id: number): Observable<TiposModel> {
    return this.http.get<TiposModel>(`${this.url}/tadmtipoinmueble/${id}`);
  }

  EditarListaTipo(data : TiposModel): Observable<TiposModel> {
    return this.http.put<TiposModel>(`${this.url}/tadmtipoinmueble/${data.id}`,{
      nombre: data.nombre,
      descripcion: data.descripcion
    });
  }
}
