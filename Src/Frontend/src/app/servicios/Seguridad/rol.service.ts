import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { rolModel } from 'src/app/modelos/seguridad/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  url:string = ConfiguracionInformacion.GENERAL_URL;
  
    constructor(private http:HttpClient) {
     }

     ObtenerListaRoles():Observable<rolModel[]>{
       return this.http.get<rolModel[]>(`${this.url}/tusrols`);
     }

     GuardarListaRoles(){
     
    }
}
