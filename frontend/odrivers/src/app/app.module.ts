import { UbicacionPage } from './../pages/ubicacion/ubicacion';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { InicioPage } from './../pages/inicio/inicio';

import { Geolocation } from '@ionic-native/geolocation';
import { PerfilPage } from '../pages/perfil/perfil';
=======
import { RestProvider } from '../providers/rest/rest';
>>>>>>> 9efd2590d1a50c71ddaa36816d36017498023827

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
<<<<<<< HEAD
    Geolocation,
=======
    RestProvider
>>>>>>> 9efd2590d1a50c71ddaa36816d36017498023827
  ]
})
export class AppModule {}
