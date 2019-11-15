import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import Swal from 'sweetalert2';
import { LoginService} from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
   titulo:string = '  Sistema MUSA';
   usuario : Usuario;
  constructor(private loginService:LoginService, private router:Router) {
    this.usuario = new Usuario();

   }

  ngOnInit() {
    if(this.loginService.isAuthenticated()){
      Swal.fire('Login','Hola '+this.loginService.empleado.nombres+' ya estas Autentificado', 'info');
      this.router.navigate(['/'])
    }
  }
  login():void{
    console.log(this.usuario);
    if(this.usuario.username==null || this.usuario.password==null){
      Swal.fire('Error Login','Username o Password incorrectos', 'error');
      return;
    }
    this.loginService.login(this.usuario).subscribe(response=>{
      console.log(response);
      this.loginService.guardarUsuario(response.access_token);
      this.loginService.guardarToken(response.access_token);
      let usuario = this.loginService.empleado;
      this.router.navigate(['/']);
      Swal.fire('Login', 'Bienvenido: '+usuario.nombres+' has iniciado Sesión con éxito..!','success');
      
    }, error =>{
      if(error.status==400){
        Swal.fire('Error Login', 'Usuario o clave incorrectas!', 'error');
      }
    }
    );
  }

}
