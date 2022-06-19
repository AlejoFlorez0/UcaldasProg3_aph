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
    return this.http.get<SeccionModel[]>(`${this.url}/tadmseccion`)
  }

  GuardarListaSeccion(info: SeccionModel): Observable<SeccionModel> {
    return this.http.post<SeccionModel>(`${this.url}/tadmseccion`, {
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
    return this.http.delete<any>(`${this.url}/tadmseccion/${id}`, {
      headers: new HttpHeaders(
        {
          Authorizacion: `Bearer ${this.tk}`
        }
      )
    });
  }

  ObtenerListaSeccion(): Observable<SeccionModel[]> {
    return this.http.get<SeccionModel[]>(`${this.url}/tadmseccion`);
  }

  ObtenerSeccion(id: number): Observable<SeccionModel> {
    return this.http.get<SeccionModel>(`${this.url}/tadmseccion/${id}`);
  }

  EditarListaSeccion(data : SeccionModel): Observable<SeccionModel> {
    return this.http.put<SeccionModel>(`${this.url}/tadmseccion/${data.id}`,{
      nombre: data.nombre,
      descripcion: data.descripcion
    });
  }
}