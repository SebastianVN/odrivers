import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { InicioPage } from '../inicio/inicio';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario: String;
  contrasena: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    if(window.localStorage['token']){
      this.navCtrl.setRoot(InicioPage);
      console.log("se esta pasando de lanzazaazaza");
    }
  }

  hacerLogin(){
    var data = { 'username': this.usuario, 'password': this.contrasena };
    this.restProvider.login(data)
      .then((data:any)=> {
        window.localStorage['token'] = data.key;
        this.navCtrl.setRoot(InicioPage);
      });
  }

}
