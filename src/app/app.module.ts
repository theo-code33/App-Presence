import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ButtonComponent } from './button/button.component';
=======
import { ConnexionComponent } from './connexion/connexion.component';
>>>>>>> 19da4da30d69312836e97e6efa6f508b995aad52

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ButtonComponent
=======
    ConnexionComponent
>>>>>>> 19da4da30d69312836e97e6efa6f508b995aad52
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
