import { TabsPage } from './../pages/tabs/tabs';
import { ForoPage } from './../pages/foro/foro';
import { HistorialPage } from './../pages/historial/historial';
import { LoginPage } from './../pages/login/login';
import { PuntosAtencionPage } from './../pages/puntos-atencion/puntos-atencion';
import { ReportesPage } from './../pages/reportes/reportes';
import { RutasAtencionPage } from './../pages/rutas-atencion/rutas-atencion';
import { ServicioPage } from './../pages/servicio/servicio';
import { RegisterPage } from './../pages/register/register';
import { UbicacionPage } from './../pages/ubicacion/ubicacion';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InicioPage } from './../pages/inicio/inicio';

import { Geolocation } from '@ionic-native/geolocation';
import { PerfilPage } from '../pages/perfil/perfil';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InicioPage,
    UbicacionPage,
    PerfilPage,
    RegisterPage,
    ServicioPage,
    RutasAtencionPage,
    ReportesPage,
    PuntosAtencionPage,
    LoginPage,
    HistorialPage,
    ForoPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InicioPage,
    UbicacionPage,
    PerfilPage,
    RegisterPage,
    ServicioPage,
    RutasAtencionPage,
    ReportesPage,
    PuntosAtencionPage,
    LoginPage,
    HistorialPage,
    ForoPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
  ]
})
export class AppModule {}
