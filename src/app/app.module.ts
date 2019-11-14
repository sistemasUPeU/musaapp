import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPopper } from 'angular-popper';
import { HeaderComponent } from './header/header.component'; 
import { RolComponent } from './rol/rol.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { FooterComponent } from './footer/footer.component';
import { PrivilegiosComponent } from './privilegios/privilegios.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {path: 'login', component:UsuarioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RolComponent,
    UsuarioComponent,
    OpcionesComponent,
    HeaderComponent,
    FooterComponent,
    PrivilegiosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPopper,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
