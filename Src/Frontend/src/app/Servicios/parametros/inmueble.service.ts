import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { InmuebleModel } from 'src/app/modelos/parametros/inmueble.model';
import { LocalStorageService } from '../compartir/local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class InmuebleService {
  url:string = ConfiguracionInformacion.GENERAL_URL;
  tk: string = "";
  
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.ObtenerToker();
  }

  ListaDeInmueble(): Observable<InmuebleModel[]> {
    return this.http.get<InmuebleModel[]>(`${this.url}/tadminmueble`)
  }

  GuardarListaInmueble(info: InmuebleModel): Observable<InmuebleModel> {
    return this.http.post<InmuebleModel>(`${this.url}/tadminmueble`, {
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

  EliminarInmueble(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/tadminmueble/${id}`, {
      headers: new HttpHeaders(
        {
          Authorizacion: `Bearer ${this.tk}`
        }
      )
    });
  }

  ObtenerListaInmueble(): Observable<InmuebleModel[]> {
    return this.http.get<InmuebleModel[]>(`${this.url}/tadminmueble`);
  }

  ObtenerInmueble(id: number): Observable<InmuebleModel> {
    return this.http.get<InmuebleModel>(`${this.url}/tadminmueble/${id}`);
  }

  EditarListaInmueble(data : InmuebleModel): Observable<InmuebleModel> {
    return this.http.put<InmuebleModel>(`${this.url}/tadminmueble/${data.id}`,{
      nombre: data.nombre,
      descripcion: data.descripcion
    });
  }
}