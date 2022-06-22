import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { MultaModel } from 'src/app/modelos/facturacion/multa.model';
import { LocalStorageService } from 'src/app/servicios/compartir/local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class MultaService {

  url: string = ConfiguracionInformacion.GENERAL_URL;
  tk: string = "";

  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.ObtenerToker();
  }

  ListaDeMultas(): Observable<MultaModel[]> {
    return this.http.get<MultaModel[]>(`${this.url}/tadmmultas`)
  }

  GuardarListaMultas(info: MultaModel): Observable<MultaModel> {
    return this.http.post<MultaModel>(`${this.url}/tadmmultas`, {
      nombre: info.nombre,
      descripcion: info.descripcion,
      valor: info.valor
    }, {
      headers: new HttpHeaders(
        {
          Authorizacion: `Bearer ${this.tk}`
        }
      )
    }
    );
  }

  EliminarMulta(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/tadmmultas/${id}`, {
      headers: new HttpHeaders(
        {
          Authorizacion: `Bearer ${this.tk}`
        }
      )
    });
  }

  ObtenerListaMulta(): Observable<MultaModel[]> {
    return this.http.get<MultaModel[]>(`${this.url}/tadmmultas`);
  }

  ObtenerMulta(id: number): Observable<MultaModel> {
    return this.http.get<MultaModel>(`${this.url}/tadmmultas/${id}`);
  }

  EditarListaMulta(data: MultaModel): Observable<MultaModel> {
    return this.http.put<MultaModel>(`${this.url}/tadmmultas/${data.idMulta}`, {
      nombre: data.nombre,
      valor: data.valor,
      descripcion: data.descripcion
    });
  }
}
