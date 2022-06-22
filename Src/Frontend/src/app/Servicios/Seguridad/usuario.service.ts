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
    return this.http.get<DatosUsuarioModel[]>(`${this.url}/tususuario`);
  }

  ObtenerUsuario(id: number): Observable<DatosUsuarioModel> {
    return this.http.get<DatosUsuarioModel>(`${this.url}/tususuario/${id}`);
  }

  EditarListaUsuarios(data: DatosUsuarioModel): Observable<DatosUsuarioModel> {
    return this.http.put<DatosUsuarioModel>(`${this.url}/tususuario/${data.nroDocument}`, {
    nombre1: data.primerNombre,
      nombre2: data.segundoNombre,
      documento: data.nroDocument,
      apellido: data.primerApellido,
      apellido2: data.segundoApellido,
      correo: data.email,
      telefono: data.celular

    });
  }

  GuardarListaUsuarios(info: DatosUsuarioModel): Observable<DatosUsuarioModel> {
    return this.http.post<DatosUsuarioModel>(`${this.url}/tususuario`, {
      nombre1: info.primerNombre,
      nombre2: info.segundoNombre,
      documento: info.nroDocument,
      apellido: info.primerApellido,
      apellido2: info.segundoApellido,
      correo: info.email,
      telefono: info.celular

    }, {
      headers: new HttpHeaders(
        {
          Authorizacion: `Bearer ${this.tk}`
        }
      )
    });
  }

  EliminarUsuario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/tususuario/${id}`, {
      headers: new HttpHeaders(
        {
          Authorizacion: `Bearer ${this.tk}`
        }
      )
    });
  }
}
