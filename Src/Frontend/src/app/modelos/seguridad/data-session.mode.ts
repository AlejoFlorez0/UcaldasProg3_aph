import { DatosUsuarioModel } from "./usuario-data.model";

export class datasessionModel{
    tk?:string;
    usuario?:DatosUsuarioModel;
    EstaIniciado:boolean =false;
}