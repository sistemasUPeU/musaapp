import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private loginService:LoginService, private router: Router) { }
    logout():void{

      this.loginService.logout();
      Swal.fire('Logout', 'Hola '+this.loginService.empleado.nombres+' has cerrado sesión con Exito!', 'success')
      this.router.navigate(['/']);
    }
 ngOnInit() {
  }

}