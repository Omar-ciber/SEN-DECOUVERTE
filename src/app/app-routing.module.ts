import { ConfidentialiteComponent } from './politque/confidentialite/confidentialite.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { ExplorerComponent } from './explorer/explorer/explorer.component';
import { AproposComponent } from './apropos/apropos/apropos.component';
import { ContactezNousComponent } from './contact/contactez-nous/contactez-nous.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilisationComponent } from './condition/utilisation/utilisation.component';
import { AuthComponent } from './auths/auth/auth.component';
import { DetailsComponent } from './explorer/details/details.component';
import { AdminComponent } from './Administrateur/admin/admin.component';
import { SidebarComponent } from './Administrateur/sidebar/sidebar.component';
import { ListerZoneComponent } from './Administrateur/zone/lister-zone/lister-zone.component';
// import { ListeZoneComponent } from './Administrateur/Zone/liste-zone/liste-zone.component';
const routes: Routes = [
  { path:'',redirectTo:'accueil',pathMatch:'full' },
  { path:'accueil',component: AccueilComponent},
  { path:'explorer',component: ExplorerComponent },
  { path: 'apropos', component: AproposComponent },
  { path:'contactez-nous', component:ContactezNousComponent },
  { path:'conditions', component:UtilisationComponent},
  { path:'confidentialite', component:ConfidentialiteComponent},
  { path: 'auth', component:AuthComponent},
  { path:'details', component:DetailsComponent},
  { path:'admin', component:AdminComponent},
  { path:'sidebar', component:SidebarComponent},
  { path:'lister-zone', component:ListerZoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
