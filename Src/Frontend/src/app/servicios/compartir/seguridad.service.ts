import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { datasessionModel } from 'src/app/modelos/seguridad/data-session.mode';
import { ConfiguracionInformacion } from '../../Config/ConfifurationData';
import { credencialesUsuarioModel } from '../../modelos/seguridad/usuario-credenciales.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  informacionSesionPersona: BehaviorSubject<datasessionModel> = new BehaviorSubject<datasessionModel>(new datasessionModel());
  url: string = ConfiguracionInformacion.SEGURIDAD_URL;

  constructor(private http: HttpClient,
    private loalstorage: LocalStorageService) {
    this.verificarsesion()
  }

  verificarsesion(): boolean {
    let info = this.loalstorage.ObtenerInformacionSesion();
    if (info.tk) {
      info.EstaIniciado = true;
      this.recargarsesion(info)
      return true;
    } else {
      return false
    }
  }

  recargarsesion(data: datasessionModel) {
    this.informacionSesionPersona.next(data);
  }

  obtenerinformacionsesion() {
    return this.informacionSesionPersona.asObservable();
  }

  /*Falta cambiar la direccion  y el nombre de los datos con recpecto a la seguridad aun no creada*/
  login(data: credencialesUsuarioModel): Observable<datasessionModel> {
    return this.http.post<datasessionModel>(`${this.url}/tususuarios/recognize`, {
      email: data.usuario,
      password: data.contraseña
    })
  }
}
