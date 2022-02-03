import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageAppComponent } from './page-app/page-app.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { MinuteSecondsPipe } from './page-app/minute-seconds.pipe';
import { EndComponent } from './end/end.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { AdminConnectComponent } from './admin-connect/admin-connect.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { PageAppB1CpdComponent } from './page-app-b1-cpd/page-app-b1-cpd.component';
import { PageAppB2CpdComponent } from './page-app-b2-cpd/page-app-b2-cpd.component';


// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ConnexionComponent,
    PageAppComponent,
    MinuteSecondsPipe,
    EndComponent,
    PageAdminComponent,
    AdminConnectComponent,
    PageAppB1CpdComponent,
    PageAppB2CpdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
