import { LoginPage } from './../login/login';
import { UbicacionPage } from './../ubicacion/ubicacion';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from './../inicio/inicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  irInicio() {
    this.navCtrl.push(InicioPage);
  }

  irUbicacion(){
    this.navCtrl.push(UbicacionPage);
  }
  
  irLogin(){
    this.navCtrl.push(LoginPage);
  }
}
