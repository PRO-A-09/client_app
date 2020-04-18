import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ConnectionService } from './services/connection.service';
import { QuestionService } from './services/question.service';
import { IdentificationService } from './services/identification.service';
import { NotificationService } from './services/notification.service';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    UniqueDeviceID,
    LocalNotifications,
    ConnectionService,
    QuestionService,
    IdentificationService,
    NotificationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
