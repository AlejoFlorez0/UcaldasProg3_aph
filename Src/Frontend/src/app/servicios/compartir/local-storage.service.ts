import { Injectable } from '@angular/core';
import { datasessionModel } from 'src/app/modelos/data-session.mode';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  /*verificar la direccion del set y get item */
  Guardarsesion(data: datasessionModel):boolean{
    let informacion = localStorage.getItem("session-data");
    if(informacion){
      return false;
    }else{
      let informacionString = JSON.stringify(data);
      localStorage.setItem("session-data",informacionString);
      return true;
    }
  }

  RemoverSesion():boolean{
    let datos = localStorage.getItem("session-data");
    if(datos){
      localStorage.removeItem("session-data");
      return true;
    }else{
      return false;
    }
  }

  ObtenerToker(): string{
    let infromacionActual = localStorage.getItem("session-data");
    if(infromacionActual){
      let informacionSesionJSON = JSON.parse(infromacionActual)
      return informacionSesionJSON.tk;
    }else{
      return "";
    }
  } 

  ObtenerInformacionSesion(): datasessionModel{
    let infromacionActual = localStorage.getItem("session-data");
    if(infromacionActual){
      let informacionSesionJSON = JSON.parse(infromacionActual)
      return informacionSesionJSON;
    }else{
      return new datasessionModel();
    }
  }
}
