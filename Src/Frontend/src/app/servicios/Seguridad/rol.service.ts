import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { rolModel } from 'src/app/modelos/seguridad/rol.model';
import { LocalStorageService } from '../compartir/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  url: string = ConfiguracionInformacion.GENERAL_URL;
  tk: string = "";

  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.ObtenerToker();
  }

  ObtenerListaRoles(): Observable<rolModel[]> {
    return this.http.get<rolModel[]>(`${this.url}/tusrols`);
  }

  EditarListaRoles(id: number): Observable<rolModel> {
    return this.http.get<rolModel>(`${this.url}/tusrols/${id}`);
  }

  GuardarListaRoles(info: rolModel): Observable<rolModel> {
    return this.http.post<rolModel>(`${this.url}/tusrols`, {
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
}
