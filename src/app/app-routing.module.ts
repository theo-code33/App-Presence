import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConnectComponent } from './admin-connect/admin-connect.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EndComponent } from './end/end.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageAppComponent } from './page-app/page-app.component';

const routes: Routes = [
  {path:'', redirectTo:'connexion', pathMatch:'full'},
  {path:'connexion', component: ConnexionComponent},
  {path:'app', component: PageAppComponent},
  {path:'end', component: EndComponent},
  {path:'admin-connect', component: AdminConnectComponent},
  {path:'admin', component: PageAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
