import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header/header-component/header-component.component';
import { FooterComponent } from './footer/footer/footer.component';
import { AproposComponent } from './apropos/apropos/apropos.component';
import { ExplorerComponent } from './explorer/explorer/explorer.component';
// import { AccueilComponent } from './accueil/accueil/accueil.component';
import { ContactezNousComponent } from './contact/contactez-nous/contactez-nous.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './Administrateur/admin/admin.component';
import { AuthComponent } from './auths/auth/auth.component';
import { LoginComponent } from './auths/login/login.component';
import { UtilisationComponent } from './condition/utilisation/utilisation.component';
import { ConfidentialiteComponent } from './politque/confidentialite/confidentialite.component';
import { DetailsComponent } from './explorer/details/details.component';
import { SidebarComponent } from './Administrateur/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { GuideComponent } from './Administrateur/guide/guide.component';
import { AddGuideComponent } from './Administrateur/guide/add-guide/add-guide.component';
import { ReservationComponent } from './Administrateur/reservation/reservation.component';
import { MessagerieComponent } from './Administrateur/messagerie/messagerie.component';
import { AddZoneComponent } from './Administrateur/zone/add-zone/add-zone.component';
// import { ListerZoneComponent } from './Administrateur/zone/lister-zone/lister-zone.component';
import { DataTablesModule } from 'angular-datatables';
import { NavbarComponent } from './Administrateur/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/login.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ListerZoneComponent } from './Administrateur/zone/lister-zone/lister-zone.component';
import { ListeGuideComponent } from './Administrateur/guide/liste-guide/liste-guide.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { AuthInterceptor } from './interceptors/interceptor';
import { ConnexionService } from './services/connexion.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponent,
    AproposComponent,
    ExplorerComponent,
  AccueilComponent,
    ContactezNousComponent,
    AdminComponent,
    AuthComponent,
    LoginComponent,
    UtilisationComponent,
    ConfidentialiteComponent,
    DetailsComponent,
    SidebarComponent,
    GuideComponent,
    AddGuideComponent,
    ReservationComponent,
    MessagerieComponent,
    AddZoneComponent,
    ListerZoneComponent,
    NavbarComponent,
    ListeGuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    DataTablesModule,
    NgbModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [
    ConnexionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
