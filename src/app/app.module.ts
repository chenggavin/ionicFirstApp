import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
 
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';
import { EmailComposer } from '@ionic-native/email-composer';
import { AngularFireModule } from 'angularfire2';



  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBDPH07NgYXp0Gh5Q2OkAHMyndymDnKX4A",
    authDomain: "myapp-integration.firebaseapp.com",
    databaseURL: "https://myapp-integration.firebaseio.com",
    projectId: "myapp-integration",
    storageBucket: "",
    messagingSenderId: "622015750335"
  };
 
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}