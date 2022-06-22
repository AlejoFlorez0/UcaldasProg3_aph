import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { SeccionModel } from 'src/app/modelos/parametros/seccion.model';
import { LocalStorageService } from '../compartir/local-storage.service';



@Injectable({
  providedIn: 'root'
})
export class SeccionService {
  url:string = ConfiguracionInformacion.GENERAL_URL;
  tk: string = "";
  
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.ObtenerToker();
  }

  ListaDeSeccion(): Observable<SeccionModel[]> {
    return this.http.get<SeccionModel[]>(`${this.url}/tadmseccions`)
  }

  GuardarListaSeccion(info: SeccionModel): Observable<SeccionModel> {
    return this.http.post<SeccionModel>(`${this.url}/tadmseccions`, {
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

  EliminarSeccion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/tadmseccions/${id}`, {
      headers: new HttpHeaders(
        {
          Authorizacion: `Bearer ${this.tk}`
        }
      )
    });
  }

  ObtenerListaSeccion(): Observable<SeccionModel[]> {
    return this.http.get<SeccionModel[]>(`${this.url}/tadmseccions`);
  }

  ObtenerSeccion(id: number): Observable<SeccionModel> {
    return this.http.get<SeccionModel>(`${this.url}/tadmseccions/${id}`);
  }

  EditarListaSeccion(data : SeccionModel): Observable<SeccionModel> {
    return this.http.put<SeccionModel>(`${this.url}/tadmseccions/${data.id}`,{
      nombre: data.nombre,
      descripcion: data.descripcion
    });
  }
}