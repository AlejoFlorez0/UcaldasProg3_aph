import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { datasessionModel } from 'src/app/modelos/seguridad/data-session.mode';
import { LocalStorageService } from 'src/app/servicios/compartir/local-storage.service';
import { SeguridadService } from 'src/app/servicios/compartir/seguridad.service';

@Component({
  selector: 'app-cerrar',
  templateUrl: './cerrar.component.html',
  styleUrls: ['./cerrar.component.css']
})
export class CerrarComponent implements OnInit {

  constructor(  private localstroageService:LocalStorageService,
    private securityservice:SeguridadService,
    private router:Router
    ) {
   }

  ngOnInit(): void {
      this.localstroageService.RemoverSesion()
      this.securityservice.recargarsesion(new datasessionModel());
      this.router.navigate(["/home"])
  }

}
