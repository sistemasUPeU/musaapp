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
  }
  login():void{
    console.log(this.usuario);
    if(this.usuario.username==null || this.usuario.password==null){
      Swal.fire('Error Login','Username o Password incorrectos');
      return;
    }
    this.loginService.login(this.usuario).subscribe(response=>{
      console.log(response);
      let datos = JSON.parse(atob(response.access_token.split(".")[1]));
      console.log(datos.APELLIDOS);

      this.loginService.guardarUsuario(response.access_token)
      this.router.navigate(['/']);
      Swal.fire('login', 'Bienvenido: '+datos.NOMBRES+' has iniciado Sesión con éxito..!');
      
    });
  }

}
