import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { PageAppComponent } from './page-app/page-app.component';

const routes: Routes = [
  {path:'', redirectTo:'connexion', pathMatch:'full'},
  {path:'connexion', component: ConnexionComponent},
  {path:'app', component: PageAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
