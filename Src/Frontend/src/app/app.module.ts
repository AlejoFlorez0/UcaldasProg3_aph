import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/Template/header/header.component';
import { NavbarComponent } from './public/Template/navbar/navbar.component';
import { FooterComponent } from './public/Template/footer/footer.component';
import { NotFoundComponent } from './public/Errors/not-found/not-found.component';
import { InternalServerComponent } from './public/Errors/internal-server/internal-server.component';
import { PrincipalComponent } from './public/general/principal/principal.component';
import { HttpClientModule} from  '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    InternalServerComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
