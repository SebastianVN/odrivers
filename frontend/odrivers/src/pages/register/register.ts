import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  nombre: String;
  apellido: String;
  usuario: String;
  cedula: String;
  email: String;
  rol: String;
  telefono: String;
  fecha_nacimiento: Date;
  direccion: String;
  clave: String;


  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  hacerResgistro(){
    var data = {
      'nombre': this.nombre,
      'apellido': this.apellido,
      'telefono': this.telefono,
      'fecha_nacimiento': this.fecha_nacimiento,
      'username': this.usuario,
      'password': this.clave,
      'cedula': this.cedula,
      'email': this.email,
      'rol':this.rol,
      'direccion': this.direccion
    };
    this.restProvider.registro(data).then((result: any) => {
      this.navCtrl.setRoot(LoginPage);
    }, (err) => {
      console.log(err);
    });
  }

}
