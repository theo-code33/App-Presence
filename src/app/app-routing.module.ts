import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConnectComponent } from './admin-connect/admin-connect.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EndComponent } from './end/end.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageAppB1CpdComponent } from './page-app-b1-cpd/page-app-b1-cpd.component';
import { PageAppB2CpdComponent } from './page-app-b2-cpd/page-app-b2-cpd.component';
import { PageAppComponent } from './page-app/page-app.component';

const routes: Routes = [
  {path:'', redirectTo:'connexion', pathMatch:'full'},
  {path:'connexion', component: ConnexionComponent},
  {path:'app/B1-developpeur-web', component: PageAppComponent},
  {path:'app/B1-charge-projet-digital', component: PageAppB1CpdComponent},
  {path:'app/B2-charge-projet-digital', component: PageAppB2CpdComponent},
  {path:'end', component: EndComponent},
  {path:'admin-connect', component: AdminConnectComponent},
  {path:'admin', component: PageAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
