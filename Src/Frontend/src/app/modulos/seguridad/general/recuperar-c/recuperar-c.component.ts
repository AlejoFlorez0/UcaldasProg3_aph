import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar-c',
  templateUrl: './recuperar-c.component.html',
  styleUrls: ['./recuperar-c.component.css']
})
export class RecuperarCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * 
   */
  restorePassword(): void {
    var email = (<HTMLInputElement>document.getElementById("email")).value;
    console.log(email);
  }

}
