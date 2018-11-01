import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'http://f3388537.ngrok.io /';
  loginService = 'api/login/';
  apiUsuarios = 'usuarios/';
  apiEps = 'eps/';
  apiItinerario = 'itinerario/';
  apiServicio = 'servicio/';
  apiHistorial = 'historialmedico/';
  apiPunto = 'puntoatencion/';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  login(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.loginService, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  registro(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.apiUsuarios, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  /**
   * getEps() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.apiEps, {
        headers: new HttpHeaders().set('Authorization', 'token ' + window.localStorage['token'])
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
   */
}
