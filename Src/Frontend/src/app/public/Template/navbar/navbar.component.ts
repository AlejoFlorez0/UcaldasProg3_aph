import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { datasessionModel } from 'src/app/modelos/seguridad/data-session.mode';
import { SeguridadService } from 'src/app/servicios/compartir/seguridad.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  SesionAbierta : boolean = false;
  subscription: Subscription = new Subscription();
  constructor(private securityServices: SeguridadService) {
   }

  ngOnInit(): void {
    this.subscription = this.securityServices.obtenerinformacionsesion().subscribe();
    next: (data: datasessionModel) => {
      this.SesionAbierta = data.EstaIniciado;
    }
    error:(err: any)=>{

    }
  }

}
