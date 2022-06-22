import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { DatosUsuarioModel } from 'src/app/modelos/seguridad/usuario-data.model';
import { LocalStorageService } from '../compartir/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string = ConfiguracionInformacion.GENERAL_URL;
  tk: string = "";

  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.ObtenerToker();
  }

  ObtenerListaUsuarios(): Observable<DatosUsuarioModel[]> {
    return this.http.get<DatosUsuarioModel[]>(`${this.url}/tususuarios`);
  }

  ObtenerUsuario(id: number): Observable<DatosUsuarioModel> {
    return this.http.get<DatosUsuarioModel>(`${this.url}/tususuarios/${id}`);
  }

  EditarListaUsuarios(info: DatosUsuarioModel): Observable<DatosUsuarioModel> {
    return this.http.put<DatosUsuarioModel>(`${this.url}/tususuarios/${info.nroDocumento}`, {
      nroDocumento: info.nroDocumento,
      primerNombre: info.primerNombre,
      segundoNombre: info.segundoNombre,
      primerApellido: info.primerApellido,
      segundoApellido: info.segundoApellido,
      email: info.email,
      password: info.password,
      celular: info.celular,
      rolId: info.rolId
    }, {
      headers: new HttpHeaders(
        {
          Authorizacion: `Bearer ${this.tk}`
        }
      )
    });
  }

  GuardarListaUsuarios(info: DatosUsuarioModel): Observable<DatosUsuarioModel> {
    return this.http.post<DatosUsuarioModel>(`${this.url}/tususuarios`, {
      nroDocumento: info.nroDocumento,
      primerNombre: info.primerNombre,
      segundoNombre: info.segundoNombre,
      primerApellido: info.primerApellido,
      segundoApellido: info.segundoApellido,
      email: info.email,
      password: info.password,
      celular: info.celular,
      rolId: info.rolId
    }, {
      headers: new HttpHeaders(
        {
          Authorizacion: `Bearer ${this.tk}`
        }
      )
    });
  }

  EliminarUsuario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/tususuarios/${id}`, {
      headers: new HttpHeaders(
        {
          Authorizacion: `Bearer ${this.tk}`
        }
      )
    });
  }
}
