import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../modelo/usuario';
import { Empleado } from '../modelo/empleado';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _usuario: Usuario;
  private _token : string;
  private _empleado : Empleado;

  constructor(private http:HttpClient) { }
  login(usuario:Usuario):Observable<any>{
    const urlEndpoint = 'http://localhost:8081/oauth/token';

    const credenciales = btoa('musa'+':'+'1234567');

    const httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
     'Authorization':'Basic '+credenciales});
    let params = new URLSearchParams();
    params.set('grant_type','password');
    params.set('username',usuario.username);
    params.set('password',usuario.password);
    console.log(params.toString());
    return this.http.post<any>(urlEndpoint, params.toString(), {headers: httpHeaders});
  }
  guardarUsuario(accesToken:String):void{
    let datos = JSON.parse(atob(accesToken.split(".")[1]));
    this._empleado = new Empleado();
    this._empleado.nombres = datos.NOMBRES;
    this._empleado.apellidos = datos.APELLIDOS;
    sessionStorage.setItem('empleado',JSON.stringify(this._empleado));
  }
  guardarToken(accesToken:string):void{
    this._token = accesToken;
    sessionStorage.setItem('token',accesToken);
  }
  obtenerDatosToken(accesToken:string):any{
    if(accesToken!=null){
      return JSON.parse(atob(accesToken.split(".")[1]));
    }
    return null;
  }
}
