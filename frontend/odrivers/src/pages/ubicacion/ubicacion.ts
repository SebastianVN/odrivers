import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapOptions } from '@ionic-native/google-maps';

/**
 * Generated class for the UbicacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ubicacion',
  templateUrl: 'ubicacion.html',
})
export class UbicacionPage {

  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UbicacionPage');
  }

  obtenerPosicion() {
    this.geolocation.getCurrentPosition().then((coordenadas) => {
      this.loadMap(coordenadas);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  loadMap(coordenadas) {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: coordenadas.coords.latitude,
          lng: coordenadas.coords.longitude
        },
      zoom: 18,
      tilt: 30
    }
  };

  this.map = GoogleMaps.create('map_canvas', mapOptions);

  this.map.addMarkerSync({
    title: 'Ionic',
    icon: 'blue',
    animation: 'DROP',
    position: {
      lat: coordenadas.coords.latitude,
      lng: coordenadas.coords.longitude
    }
  });
  }
}
     
     
  
   
