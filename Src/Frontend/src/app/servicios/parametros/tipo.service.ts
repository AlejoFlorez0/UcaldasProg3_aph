import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../compartir/local-storage.service';
import { Observable } from 'rxjs';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { TiposModel } from 'src/app/modelos/parametros/tipo.model';


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
    return this.http.get<TiposModel[]>(`${this.url}/tadmtipoinmuebles`)
  }

  GuardarListaTipos(info: TiposModel): Observable<TiposModel> {
    return this.http.post<TiposModel>(`${this.url}/tadmtipoinmuebles`, {
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
    return this.http.delete<any>(`${this.url}/tadmtipoinmuebles/${id}`, {
      headers: new HttpHeaders(
        {
          Authorizacion: `Bearer ${this.tk}`
        }
      )
    });
  }

  ObtenerListaTipo(): Observable<TiposModel[]> {
    return this.http.get<TiposModel[]>(`${this.url}/tadmtipoinmuebles`);
  }

  ObtenerTipo(id: number): Observable<TiposModel> {
    return this.http.get<TiposModel>(`${this.url}/tadmtipoinmuebles/${id}`);
  }

  EditarListaTipo(data : TiposModel): Observable<TiposModel> {
    return this.http.put<TiposModel>(`${this.url}/tadmtipoinmuebles/${data.idTipoInmueble}`,{
      nombre: data.nombre,
      descripcion: data.descripcion
    });
  }
}
