import { PuntosAtencionPage } from './../puntos-atencion/puntos-atencion';
import { RutasAtencionPage } from './../rutas-atencion/rutas-atencion';
import { ForoPage } from './../foro/foro';
import { HistorialPage } from './../historial/historial';
import { ServicioPage } from './../servicio/servicio';
import { UbicacionPage } from './../ubicacion/ubicacion';
import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  servicioPage = ServicioPage;
  perfilPage = PerfilPage;
  historialPage = HistorialPage;
  foroPage = ForoPage;
  rutasAtencionPage = RutasAtencionPage;
  puntosAtencionPage = PuntosAtencionPage;
  mapaPage = UbicacionPage;
  


}
