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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
  ]
})
export class AppModule {}
