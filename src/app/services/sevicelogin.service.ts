import { Injectable } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import {map, catchError, tap} from 'rxjs/Operators';
import { Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
//npm install --save sweetalert;
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SeviceloginService {

  constructor(private http: HttpClient, private router: Router) { }
  private isNoAutorizado(e): boolean{
    if(e.status==401 || e.status==403){
      this.router.navigate(['/login'])
      return true;
    }
    return false;
  }
}
